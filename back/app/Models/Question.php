<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Question extends Model
{
    use HasFactory;

    protected $table = "question";

    public $timestamps = false;

    protected $guarded = ['id'];

    public static $statusFromCode = [
        '0' => 'Новое',
        '1' => 'Просмотрено',
        '2' => 'Ответ отправлен'
    ];
}
