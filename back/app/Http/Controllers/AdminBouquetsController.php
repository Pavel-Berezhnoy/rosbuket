<?php

namespace App\Http\Controllers;

use App\Models\Bouquet;
use App\Services\Bouquet\BouquetService;
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
