<?php

namespace App\Services\CartService;

use App\DTO\CartItemDTO\CartItemDto;
use App\Models\Bouquet;
use App\Models\Order;
use App\Models\OrderItem;

class CartService
{

  private $order;

  public function __construct(Order $order)
  {
    $this->order = $order;
  }

  public function getCart($cartItems)
  {
    $cartItemsIds = array_map(function ($cartItem) {
      return explode(',', $cartItem)[0];
    }, $cartItems);

    $cart = Bouquet::whereIn('id', $cartItemsIds)->get()->map(function ($bouquet) use ($cartItems) {
      $cartItemQty = 1;
      foreach ($cartItems as $cartItem) {
        $explodedCartItem = explode(',', $cartItem);
        if ((int)$explodedCartItem[0] === $bouquet->id) {
          $cartItemQty = $explodedCartItem[1];
          break;
        }
      }
      return CartItemDto::fromRequest($bouquet, $cartItemQty);
    });

    return $cart;
  }

  public function createOrder($orderFields)
  {
    $this->order->fill($orderFields);
    $this->order->save();
    $orderItems = array();

    foreach ($orderFields['order_items'] as $orderItem) {
      $orderItems[] = [
        'order_id' => $this->order->id,
        'bouquet_id' => $orderItem['id'],
        'qty' => $orderItem['quantity'],
        'count_price' => $orderItem['quantity'] * ($orderItem['price'] - $orderItem['discount']),
      ];
    }
    OrderItem::insert($orderItems);
  }
}
