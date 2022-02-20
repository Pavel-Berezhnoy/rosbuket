<?php

namespace App\Http\Controllers;

use App\Models\Bouquet;
use Illuminate\Http\Request;
use App\Models\OrderItem;
use App\Models\Order;
use App\Models\Question;
use Carbon\Carbon;
use stdClass;

class MainController extends Controller
{
    public function index(Request $request) {
        if ((bool)$request['sale']) 
            return Bouquet::where("discount",">",0)->take(10)->get()->toJson();
        if ((bool)$request['popular']) {
            $bouquetIds = OrderItem::selectRaw('count(*) as total, bouquet_id')->groupBy('bouquet_id')->orderBy("total",'desc')->take(10)->get()->map(function ($bouquetId) {
                return $bouquetId->bouquet_id;
            });
            return Bouquet::whereIn('id',$bouquetIds)->get();
        }
        if ((bool)$request['new']){
            $time = Carbon::now();
            return Bouquet::where('created_at',">",$time->subWeek()->format('Y-m-d H:i:s'))->take(8)->get();
        }
    }

    public function adminMain()
    {
        $orders = Order::orderBy('id','desc')->take(10)->get();
        $filteredOrder = $orders->map(function ($order) {
            $order->status = $order->statusFromCode[$order->status];
            return $order;
        });
        $statistic = new stdClass();
        $statistic->countOrders = Order::count();
        $statistic->countProducts = Bouquet::count();
        $statistic->countQuestions = Question::count();
        $statistic->lastOrders = $filteredOrder;
        return $statistic;
    }
}
