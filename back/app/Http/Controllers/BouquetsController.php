<?php

namespace App\Http\Controllers;

use App\Models\Bouquet;
use Doctrine\DBAL\Query\QueryBuilder;

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
        $bouquet = Bouquet::where('id', $id)
            ->select(['id', 'name', 'image', 'discount', 'description', 'price'])
            ->withAvg('reviews', 'estimate')
            ->withCount(['orders', 'reviews'])
            ->with([
                'categories' => function ($q) {
                    $q->select(['category.name', 'category.id']);
                },
                'flowers' => function ($q) {
                    $q->select(['flower.name', 'flower.id']);
                },
            ])->first();
        if ($bouquet)
            return $bouquet->toJson();
        else
            return response()->json(['status' => 'error', 'message' => 'Товар не найден'], 404);
    }
}
