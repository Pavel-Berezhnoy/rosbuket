<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Order;
use Carbon\Carbon;
use Illuminate\Support\Facades\Mail;

class AdminOrderController extends Controller
{
    public function index()
    {
        $orders = Order::orderBy('id', 'desc')->get();
        $filteredOrder = $orders->map(function ($order) {
            $order->status = $order->statusFromCode[$order->status];
            return $order;
        });
        return $filteredOrder;
    }

    public function update(Request $request)
    {
        $order = Order::where('id', $request['id'])->with(['orderItems', 'orderItems.bouquet'])->first();
        $order->status = 2;
        $order->save();
        $fullprice = $order->orderItems->reduce(function ($accumulator, $orderItem) {
            return $accumulator + $orderItem->count_price;
        });
        Mail::send(
            'mail.order',
            [
                'order' => $order,
                'sender' => env('MAIL_USERNAME'),
                'time' => Carbon::now()->toDateTimeString(),
                'count' => $fullprice
            ],
            function ($message) use ($order) {
                $message->from(env('MAIL_USERNAME'), 'RosBuket');
                $message->to($order->mail, 'receiver')->subject('Письмо');
            }
        );
    }

    public function checked(Request $request)
    {
        $order = Order::where('id', $request['id'])->first();
        $order->status = 1;
        $order->save();
    }

    public function view(Request $request)
    {
        return Order::where('id', $request['id'])->with(['orderItems', 'orderItems.bouquet'])->first()->toJson();
    }
}
