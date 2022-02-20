<?php

namespace App\Http\Controllers;

use App\Models\Bouquet;
use Illuminate\Http\Request;
use App\Services\CartService\CartItem;
use App\Models\Order;
use App\Models\OrderItem;


class CartController extends Controller
{
    public function index(Request $request)
    {
        return CartItem::whereIn('id',explode(",",$request['items']))->get()->keyBy("id")->toJson();
    }

    public function create(Request $request) {
        $fields =  $request->all();
        $order = new Order($fields);
        $order->save();
        $orderItems = array();
        foreach($fields['order_items'] as $orderItem) {
            $orderItems[] = [
                'order_id' => $order->id,
                'bouquet_id' => $orderItem['id'],
                'qty' => $orderItem['qty'],
                'count_price' => $orderItem['qty'] * $orderItem['price'],
            ];
        }
        OrderItem::insert($orderItems);
        return "Запись успешно добавлена";
    }
}
