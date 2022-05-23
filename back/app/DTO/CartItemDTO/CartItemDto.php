<?php

namespace App\DTO\CartItemDTO;

use App\Models\Bouquet;

/**
 * @property int $id
 * @property string $name
 * @property string $image
 * @property int $price
 * @property int $qantity
 */

class CartItemDto
{
    public int $id;

    public string $name;

    public string $image;

    public float $price;

    public float $discount;

    public int $quantity = 0;

    public function __construct(
        int $id,
        string $name,
        string $image,
        float $price,
        int $quantity,
        float $discount
    ) {
        $this->id = $id;
        $this->name = $name;
        $this->image = $image;
        $this->price = $price;
        $this->quantity = $quantity;
        $this->discount = $discount;
    }

    /**
     * @return CartItem
     */
    public static function fromRequest(Bouquet $bouquet, int $qty): self
    {
        return new self(
            $bouquet->id,
            $bouquet->name,
            $bouquet->image,
            $bouquet->price,
            $qty,
            $bouquet->discount ? $bouquet->discount : 0
        );
    }
}
