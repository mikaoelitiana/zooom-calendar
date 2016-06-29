<?php
class Event extends Illuminate\Database\Eloquent\Model
{
    protected $guarded = ['id'];
    protected $fillable = [
      'headline',
      'description',
      'address',
      'zip',
      'country',
      'startdate',
      'enddate',
      'lat',
      'lon',
      'category',
      'weight',
    ];
	  public $timestamps = false;
}
