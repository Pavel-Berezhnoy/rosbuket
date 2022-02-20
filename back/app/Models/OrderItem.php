<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class OrderItem extends Model
{
    use HasFactory;

    protected $table = "order_item";

    protected $guarded = ['id'];

    const UPDATED_AT = null;

    const CREATED_AT = null;

    public function bouquet() {
        return $this->hasOne('App\Models\Bouquet', 'id','bouquet_id');
    }
}
