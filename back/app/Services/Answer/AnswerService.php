<?php

namespace App\Services\Answer;

use App\Models\Answer;
use Carbon\Carbon;

class AnswerService
{

  private $answer;

  public function __construct(Answer $answer)
  {
    $this->answer = $answer;
  }

  public function create($request): void
  {
    $this->answer->fill($request->all());
    $this->answer->created_at = Carbon::now();
    $this->answer->validate = 0;
    $this->answer->save();
  }
}