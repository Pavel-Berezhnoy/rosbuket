<?php

namespace App\Http\Controllers;

use App\Models\Bouquet;
use App\Services\Bouquet\BouquetService;
use Illuminate\Http\Request;

class AdminBouquetsController extends Controller
{
    public function index()
    {
        return Bouquet::all()->toJson();
    }

    public function view($id)
    {
        return Bouquet::where('id', $id)
            ->with([
                'categories' => function ($q) {
                    $q->select(['category.name', 'category.id']);
                },
                'flowers' => function ($q) {
                    $q->select(['flower.name', 'flower.id']);
                },
            ])
            ->first()
            ->toJson();
    }

    public function delete(Request $request)
    {
        $bouquet = Bouquet::where('id', $request['id'])->first();
        $bouquet->categoriesBouquets()->delete();
        $bouquet->flowersBouquets()->delete();
        $bouquet->delete();
    }

    public function update(Request $request, BouquetService $bouquetService)
    {
        $bouquetService->update($request);
    }

    public function create(Request $request, BouquetService $bouquetService)
    {
        $bouquetService->create($request);
    }
}
