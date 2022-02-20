<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;

class Bouquet extends Model
{
    use HasFactory;

    protected $table = 'bouquet';

    protected $guarded = ['id'];

    const UPDATED_AT = null;

    public function categories() {
        return $this->belongsToMany('App\Models\Category','category_bouquets','bouquet_id','category_id');
    }

    public function categoriesBouquets () {
        return $this->hasMany(CategoryBouquet::class);
    }

    public function saveImage($image) {
        $filename = (string)Str::uuid().".".$image->getClientOriginalExtension();
        $filepath = 'images/bouquets/';
        $image->move($filepath,$filename);
        return '/'.$filepath.$filename;
    }
}