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

    public function adminIndex(ReviewService $reviewService)
    {
        return $reviewService->prepareAdminReview()->toJson();
    }

    public function adminView($reviewId)
    {
        return Review::where('id', $reviewId)->with('answers')->first();
    }

    public function update(Request $request, ReviewService $reviewService, Review $review)
    {
        return $reviewService->adminUpdate($request);
    }

    public function delete(Request $request)
    {
        Review::destroy($request['id']);
    }
        
}
