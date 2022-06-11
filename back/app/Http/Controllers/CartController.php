<?php

namespace App\Http\Controllers;

use App\Http\Requests\OrderRequest;
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

    public function create(OrderRequest $request, CartService $cartService)
    {
        $fields = $request->validated();

        $cartService->createOrder($fields);
        
        return $fields;
    }
}
