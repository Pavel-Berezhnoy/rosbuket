<?php

namespace App\Services\Review;

use App\Models\Answer;
use App\Models\Review;
use Carbon\Carbon;
use DateTime;
use Illuminate\Http\Request;

class ReviewService
{

  private $review;

  public function __construct(Review $review)
  {
    $this->review = $review;
  }

  public function createReview(Request $request)
  {
    $this->review->fill($request->all());
    $this->review->created_at = Carbon::now();
    $this->review->validate = 0;
    $this->review->save();
  }

  public function prepareReview(int $bouquet_id): object
  {
    $reviews = Review::where(['bouquet_id' => $bouquet_id, 'validate' => 1])
      ->with([
        'answers' => function ($q) {
          $q->where('validate', 1);
        },
        'answers.answer'
      ])
      ->get();
    $totalRate = collect($reviews)->avg('estimate');
    $rate = collect($reviews)->countBy('estimate');

    return collect([
      'rate' => $rate,
      'total_rate' => $totalRate,
      'reviews' => $reviews
    ]);
  }

  public function prepareAdminReview(): object
  {
    $reviews = Review::with('bouquet')
      ->orderBy('created_at', 'desc')
      ->get();
    return $reviews;
  }

  public function adminView(int $review_id): object
  {
    return Review::where('id', $review_id)->with('answers')->first();
  }

  public function adminUpdate(Request $request)
  {
    $reviewAttributes = collect($request->all())->toArray();
    $this->review = Review::where('id', $reviewAttributes['id'])->first();
    $this->review->update($reviewAttributes);
    collect($reviewAttributes['answers'])->each(function ($answer) {
      $answer['created_at'] = new DateTime($answer['created_at']);
      $this->review->answers()->where('id', $answer['id'])->update($answer);
    });
  }
}
