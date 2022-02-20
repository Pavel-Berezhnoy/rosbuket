<?php

namespace App\Services\CartService;

use App\Models\Bouquet;

class CartItem extends Bouquet
{
    protected $quantity = 0;

    public function __construct($qty = 1)
    {
        $this->setQuantity($qty);
    }

    public function setQuantity($qty = 1)
    {
        $this->quantity = $qty;
    }

    public function getQuantity()
    {
        return $this->quantity;
    }

    public static function getIds($requestCartItems = [])
    {
        $cartItemIds = [];
        foreach ($requestCartItems as $requestCartItem) {
            $cartItemIds[] = $requestCartItem['id'];
        };
        return $cartItemIds;
    }
}
