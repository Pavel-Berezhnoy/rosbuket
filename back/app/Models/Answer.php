<?php

namespace App\Models;

use DateTime;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Answer extends Model
{
    use HasFactory;

    protected $table = 'answer';

    protected $guarded = ['updated_at'];

    const UPDATED_AT = null;

    public function setCreatedAtAttribute($date)
    {
        return $this->attributes['created_at'] = new DateTime($date);
    }

    public function review()
    {
        return $this->hasOne(Review::class);
    }

    public function answer()
    {
        return $this->belongsTo(Answer::class);
    }
}
