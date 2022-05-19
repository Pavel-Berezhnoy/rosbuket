<?php

namespace App\Http\Controllers;

use App\Services\Answer\AnswerService;
use Illuminate\Http\Request;

class AnswerController extends Controller
{
    public function create(Request $request, AnswerService $answerService)
    {
        $answerService->create($request);
    }
}
