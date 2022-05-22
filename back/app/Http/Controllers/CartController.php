<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Services\CartService\CartService;

class CartController extends Controller
{
    public function index(Request $request, CartService $cartService)
    {
        $cartItems = $request['items'];

        $cart = $cartService->getCart($cartItems);

        return $cart;
    }

    public function create(Request $request, CartService $cartService)
    {
        $fields =  $request->all();

        $cartService->createOrder($fields);
        
        return "Запись успешно добавлена";
    }
}
