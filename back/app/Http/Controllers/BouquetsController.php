<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Bouquet;

use function GuzzleHttp\Promise\all;

class BouquetsController extends Controller
{
    public function index()
    {
        return null;
    }

    public function view($bouquetId, Request $request)
    {
        return Bouquet::where('id', $bouquetId)->with('categories')->first()->toJson();
    }
}
