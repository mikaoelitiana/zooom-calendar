<?php
use \Psr\Http\Message\ServerRequestInterface as Request;
use \Psr\Http\Message\ResponseInterface as Response;
use \Firebase\JWT\JWT;

require 'vendor/autoload.php';
$config = require 'config.php';

$app = new \Slim\App($config);
$container = $app->getContainer();
$capsule = new Illuminate\Database\Capsule\Manager;
$capsule->addConnection($container->get('settings')['db']);
$capsule->bootEloquent();

$jwtMW = new \Slim\Middleware\JwtAuthentication([
    "secret" => $config['settings']['auth']['key']
]);

$app->get('/events', function (Request $request, Response $response) {
    $events = Event::all()
      ->sortBy('weight')
      ->sortByDesc('id');
    $response = $response->withJson($events);

    return $response;
});

$app->get('/events/{id}', function (Request $request, Response $response) {
    $id = $request->getAttribute('id');
    $events = Event::find($id);
    $response = $response->withJson($events);

    return $response;
});

$app->get('/events/category/{id}', function (Request $request, Response $response) {
    $id = $request->getAttribute('id');
    $events = Event::where('category', $id)->get();
    $response = $response->withJson($events);

    return $response;
});

$app->get('/events/location/autocomplete/{search}', function (Request $request, Response $response) {
    $search = $request->getAttribute('search');
    $events = Event::find();
    $response = $response->withJson($events);

    return $response;
});

$app->post('/events/{id}', function (Request $request, Response $response, $args) {
    $id = $request->getAttribute('id');
    $event = Event::find($id);
    $event->update($request->getParsedBody());
    $response = $response->withJson($event);

    return $response;
})->add($jwtMW);

$app->post('/events', function (Request $request, Response $response) {
    $event = Event::create($request->getParsedBody());
    $response = $response->withJson($event);

    return $response;
})->add($jwtMW);

$app->post('/users/login', function (Request $request, Response $response) {
    $reply = array();
    $post = $request->getParsedBody();
    if($post['username'] == 'admin' && $post['password'] == 'secretpassword') {
      $user = [
        'uid' => 1,
        'name' => 'admin'
      ];
      $jwt = JWT::encode(array('data' => $user), $this->get('settings')['auth']['key']);
      $reply['jwt'] = $jwt;
      $reply['logged'] = true;
    }
    $response = $response->withJson($reply);

    return $response;
});

$app->get('/users/logout', function (Request $request, Response $response) {
    $user = [
      'uid' => 0,
      'logged' => false
    ];
    unset($_SESSION['user']);
    $response = $response->withJson($user);

    return $response;
});

$app->run();
