<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Category;
use App\Models\Bouquet;
use App\Models\CategoryBouquet;

class CategoryController extends Controller
{
    public function index(Request $request)
    {
        $catId = $request['categoryId'] == 0 ? null : $request['categoryId'];
        return Category::where('parent',$catId)->get()->toJson();
    }

    public function all() {
        return Category::all()->toJson();
    }

    public function view($id, Request $request)
    {
        $query = Bouquet::whereIn('bouquet.id',$this->getBouquetsIds($id));
        if ($request['price_filter'])
            $query = $query->orderBy('price',$request['price_filter']);
        return $query
            ->get()
            ->toJson();
    }

    private function getBouquetsIds($id) {
        return CategoryBouquet::select('bouquet_id')->where('category_id',$id)->get();
    }
}
