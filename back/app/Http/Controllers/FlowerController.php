<?php

namespace App\Http\Controllers;

use App\Models\Flower;
use App\Services\Flower\FlowerService;
use Illuminate\Http\Request;

class FlowerController extends Controller
{
    public function index()
    {
        return Flower::where('active', 1)->paginate(15);
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

    public function view($flowerId)
    {
        return $this->findOrFail($flowerId);
    }

    public function findOrFail($id)
    {
        $flower = Flower::where('id', $id)->first();
        if ($flower)
            return $flower->toJson();
        else
            return response()->json(['status' => 'error', 'message' => 'Такой записи в глоссарии не существует!'], 404);
    }
}
