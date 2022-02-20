<?php

namespace App\Http\Controllers;

use App\Models\Bouquet;
use App\Models\Category;
use Illuminate\Http\Request;

class AdminBouquetsController extends Controller
{
    public function view()
    {
        return Bouquet::all()->toJson();
    }

    public function delete(Request $request)
    {

        $bouquet = Bouquet::where('id',$request['id'])->first();
        $bouquet->categoriesBouquets()->delete();
        $bouquet->delete();
    }

    public function update(Request $request)
    {
        $bouquet = Bouquet::where('id',$request->input('id'))->first();
        $request->file('image') ? $bouquet->image = $bouquet->saveImage($request->file('image')) : "";
        $bouquet->name = $request->input('name');
        $bouquet->description = $request->input('description');
        $bouquet->short_description = $request->input('short_description');
        $bouquet->price = $request->input('price');
        $bouquet->discount = $request->input('discount');
        $bouquet->save();
        $bouquet->categories()->detach();
        $categoriesIds = explode(",", $request->input("categories"));
        $categories = Category::whereIn('id', $categoriesIds)->get();
        $bouquet->categories()->saveMany($categories);
        return $bouquet;
    }

    public function create(Request $request)
    {
        $requestFields = $request->all();
        $bouquet = new Bouquet($requestFields);
        $bouquet->image = $bouquet->saveImage($request->file('image'));
        $bouquet->save();
        $categoriesIds = explode(",", $request->input("categories"));
        $categories = Category::whereIn('id', $categoriesIds)->get();
        $bouquet->categories()->saveMany($categories);
        return $bouquet->toJson();
    }
}
