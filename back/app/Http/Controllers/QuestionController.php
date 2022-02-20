<?php

namespace App\Http\Controllers;

use App\Models\Question;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use Carbon\Carbon;

class QuestionController extends Controller
{

    public function index() {
        $questions = Question::orderby('id','desc')->get();
        $filteredQuestions = $questions->map(function ($question) {
            $question->status = $question->statusFromCode[$question->status];
            return $question;
        });
        return $filteredQuestions;
    }

    public function view(Request $request)
    {
        return Question::where('id',$request['id'])->first()->toJson();
    }

    public function checked(Request $request)
    {
        $question = Question::where('id',$request['id'])->first();
        $question->status = 1;
        $question->save();
    }

    public function create(Request $request) {
        $fields = $request->all();
        $question = new Question($fields);
        $question->save();
    }

    public function update(Request $request)
    {
        $question = Question::where('id', $request['id'])->first();
        $question->status = 2;
        $question->save();
        Mail::send(
            'mail.question',
            [
                'question' => $question,
                'answer' => $request['answer'],
                'sender' => env('MAIL_USERNAME'),
                'time' => Carbon::now()->toDateTimeString(),
            ],
            function ($message) use ($request) {
                $message->from(env('MAIL_USERNAME'), 'RosBuket');
                $message->to($request['email'], 'receiver')->subject('Письмо');
            }
        );
    }
}
