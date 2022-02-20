<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;

class Settings extends Model
{
    use HasFactory;

    protected $table = 'settings';

    public $timestamps = false;

    protected $guarded = ['id'];

    public function saveImage($image) {
        $filename = (string)Str::uuid().".".$image->getClientOriginalExtension();
        $filepath = 'images/settings/';
        $image->move($filepath,$filename);
        return '/'.$filepath.$filename;
    }
}
