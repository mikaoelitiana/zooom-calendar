<?php
class RSVP extends Illuminate\Database\Eloquent\Model
{
    protected $guarded = ['id'];
    protected $fillable = [
      'email',
      'firstname',
      'lastname',
      ];
	  public $timestamps = false;
}
