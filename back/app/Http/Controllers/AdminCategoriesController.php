<?php

namespace App\Http\Controllers;

use App\Models\Category;
use Illuminate\Http\Request;

class AdminCategoriesController extends Controller
{
    public function index()
    {
        return Category::with('parent')->get()->toJson();
    }

    public function view($id)
    {
        return Category::where('id',$id)->with('parent')->first()->toJson();
    }

    public function delete(Request $request)
    {
        $category = Category::where('id',$request['id'])->first();
        $category->bouquetsCategories()->delete();
        $category->delete();
    }

    public function create(Request $request)
    {
        $requestFields = $request->all();
        $category = new Category($requestFields);
        $category->image = $category->saveImage($request->file('image'));
        $category->parent = $request->input('parent') == 0 ? null : $request->input('parent');
        $category->save();
        return $category;
    }

    public function update(Request $request)
    {
        $requestFields = $request->all();
        $updatedCategory = Category::where('id',$requestFields['id'])->first();
        $updatedCategory->name = $requestFields['name'];
        $updatedCategory->description = $requestFields['description'];
        $updatedCategory->parent = $requestFields['parent'] == 0 ? null : $requestFields['parent'];
        $request->file('image') ? $updatedCategory->image = $updatedCategory->saveImage($request->file('image')) : "";
        $updatedCategory->save();
        return $updatedCategory;
    }
}
