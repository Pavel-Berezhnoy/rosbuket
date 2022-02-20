<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;

class Category extends Model
{
    use HasFactory;

    protected $table = 'category';

    protected $guarded = ['id'];

    const UPDATED_AT = null;

    const CREATED_AT = null;

    public function parent() {
        return $this->hasOne('App\Models\Category', 'id','parent');
    }

    public function saveImage($image) {
        $filename = (string)Str::uuid().".".$image->getClientOriginalExtension();
        $filepath = 'images/categories/';
        $image->move($filepath,$filename);
        return '/'.$filepath.$filename;
    }

    public function bouquetsCategories () {
        return $this->hasMany(CategoryBouquet::class);
    }
}
