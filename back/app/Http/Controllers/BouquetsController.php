<?php

namespace App\Http\Controllers;

use App\Models\Bouquet;
use Illuminate\Http\Response;

class BouquetsController extends Controller
{
    public function index()
    {
        return null;
    }

    public function view($bouquetId)
    {
        return $this->findOrFail($bouquetId);
    }

    public function findOrFail($id)
    {
        $bouquet = Bouquet::where('id', $id)->select(['id', 'name', 'image', 'discount', 'description', 'price'])->with(['categories' => function ($q) {
            $q->select(['category.name', 'category.id']);
        }, 'flowers' => function ($q) {
            $q->select(['flower.name']);
        }])->first();
        if ($bouquet)
            return $bouquet->toJson();
        else
            return response()->json(['status' => 'error', 'message' => 'Товар не найден'], 404);
    }
}
