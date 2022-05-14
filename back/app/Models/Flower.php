<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Flower extends Model
{
    use HasFactory;

    protected $table = "flower";

    protected $guarded = ['id'];

    const UPDATED_AT = null;

    const CREATED_AT = null;

    public function bouquets() {
        return $this->belongsToMany('App\Models\Bouquet','flower_bouquet','flower_id','bouquet_id');
    }

    public function flowersBouquets() {
        return $this->hasMany(FlowerBouquet::class);
    }
}
