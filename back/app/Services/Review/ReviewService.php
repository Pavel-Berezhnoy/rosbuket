<?php

namespace App\Services\Review;

use App\Models\Review;
use Carbon\Carbon;
use Illuminate\Support\Collection;

class ReviewService
{

  private $review;

  public function __construct(Review $review)
  {
    $this->review = $review;
  }

  public function createReview($request)
  {
    $this->review->fill($request->all());
    $this->review->created_at = Carbon::now();
    $this->review->validate = 0;
    $this->review->save();
  }

  public function prepareReview($bouquet_id): object
  {
    $reviews = Review::where(['bouquet_id' => $bouquet_id, 'validate' => 1])->with(['answers', 'answers.answer'])->get();
    $totalRate = collect($reviews)->avg('estimate');
    $rate = collect($reviews)->countBy('estimate');

    return collect([
      'rate' => $rate,
      'total_rate' => $totalRate,
      'reviews' => $reviews
    ]);
  }
}
