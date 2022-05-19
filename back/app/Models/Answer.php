<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Answer extends Model
{
    use HasFactory;

    protected $table = 'answer';

    protected $guarded = ['id'];

    const UPDATED_AT = null;

    public function review()
    {
        return $this->hasOne(Review::class);
    }

    public function answer()
    {
        return $this->hasOne(Answer::class);
    }
}
