<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Review extends Model
{
    use HasFactory;

    protected $table = 'review';

    const UPDATED_AT = null;

    protected $guarded = ['id'];

    public function bouquet()
    {
        return $this->hasOne(Bouquet::class);
    }

    public function answers()
    {
        return $this->hasMany(Answer::class);
    }
}
