<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    use HasFactory;

    protected $table = "order";

    protected $guarded = ['id'];

    const UPDATED_AT = null;

    const CREATED_AT = null;

    public $statusFromCode = [
        '0' => 'Новое',
        '1' => 'Просмотрено',
        '2' => 'Одобрено'
    ];

    public function orderItems() {
        return $this->hasMany(OrderItem::class);
    }

    public function bouquets() {
        return $this->hasManyThrough(Bouquet::class,OrderItem::class,'order_id','id','id','bouquet_id');
    }
}
