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
    public $id;

    public $name;

    public $image;

    public $price;

    public $quantity = 0;

    public function __construct(
        int $id,
        string $name,
        string $image,
        int $price,
        int $quantity
    ) {
        $this->setId($id);
        $this->setName($name);
        $this->setImage($image);
        $this->setPrice($price);
        $this->setQuantity($quantity);
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
            $qty
        );
    }

    public function setId(int $id)
    {
        $this->id = $id;
    }

    public function setName(string $name)
    {
        $this->name = $name;
    }

    public function setImage(string $image)
    {
        $this->image = $image;
    }

    public function setPrice(string $price)
    {
        $this->price = $price;
    }

    public function setQuantity(string $quantity)
    {
        $this->quantity = $quantity;
    }
}
