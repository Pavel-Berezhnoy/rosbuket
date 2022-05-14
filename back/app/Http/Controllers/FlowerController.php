<?php

namespace App\Http\Controllers;

use App\Models\Flower;
use App\Services\Flower\FlowerService;
use Illuminate\Http\Request;

class FlowerController extends Controller
{
    public function index()
    {
        return Flower::all();
    }

    public function create(Request $request, FlowerService $flowerService)
    {
        $flowerService->create($request);
    }

    public function delete(Request $request, FlowerService $flowerService)
    {
        $flowerService->delete($request['id']);
    }

    public function update(Request $request, FlowerService $flowerService)
    {
        $flowerService->update($request);
    }

    public function adminFlowers()
    {
        return Flower::all();
    }

    public function view($id)
    {
        return Flower::where('id', $id)->first();
    }
}
