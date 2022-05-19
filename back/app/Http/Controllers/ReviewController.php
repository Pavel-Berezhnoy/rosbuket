<?php

namespace App\Http\Controllers;

use App\Models\Review;
use App\Services\Review\ReviewService;
use Illuminate\Http\Request;

class ReviewController extends Controller
{

    public function index(Request $request, ReviewService $reviewService)
    {
        return $reviewService->prepareReview($request['bouquet_id'])->toJson();
    }

    public function create(Request $request, ReviewService $reviewService)
    {
        $reviewService->createReview($request);
    }

    public function adminIndex()
    {
        return Review::all()->toJson();
    }

    public function adminView($reviewId)
    {
        return Review::where('id', $reviewId)->with('answers')->first();
    }
}
