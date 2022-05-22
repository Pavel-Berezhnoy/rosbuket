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

    public function categories()
    {
        return $this->belongsToMany('App\Models\Category', 'category_bouquets', 'bouquet_id', 'category_id');
    }

    public function flowers()
    {
        return $this->belongsToMany('App\Models\Flower', 'flower_bouquet', 'bouquet_id', 'flower_id')->where('active', 1);
    }

    public function categoriesBouquets()
    {
        return $this->hasMany(CategoryBouquet::class);
    }

    public function reviews()
    {
        return $this->hasMany(Review::class)->where('validate', 1);
    }

    public function flowersBouquets()
    {
        return $this->hasMany(FlowerBouquet::class);
    }
}
