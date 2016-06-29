<?php

return [
    'settings' => [
        'displayErrorDetails' => true,
        'db' => [
            'host' => '127.0.0.1',
            'username' => 'root',
            'password' => 'P4ssWord',
            'database' => 'zooom',
            'driver' => 'mysql',
            'charset' => 'utf8',
            'collation' => 'utf8_unicode_ci',
            'prefix' => ''
        ],
        'auth' => [
          'key' => 'zooom_calendar_secret_key'
        ]
    ]
];
