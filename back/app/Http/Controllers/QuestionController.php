<?php

namespace App\Http\Controllers;

use App\Models\Question;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use Carbon\Carbon;
use Symfony\Component\HttpKernel\Exception\HttpException;

class QuestionController extends Controller
{

    public function index()
    {
        $questions = Question::orderby('id', 'desc')->get();
        $filteredQuestions = $questions->map(function ($question) {
            $question->status = Question::$statusFromCode[$question->status];
            return $question;
        });
        return $filteredQuestions;
    }

    public function view(Request $request)
    {
        return Question::where('id', $request['id'])->first()->toJson();
    }

    public function checked(Request $request)
    {
        $question = Question::where('id', $request['id'])->first();
        $question->status = 1;
        $question->save();
    }

    public function create(Request $request, Question $question)
    {
        $question->fill($request->all());
        $question->status = 0;
        $question->save();
    }

    public function update(Request $request)
    {
        $question = Question::where('id', $request['id'])->first();
        $question->status = 2;
        $question->save();
        
        $sended_mail = Mail::send(
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

        if ($sended_mail) throw new HttpException('404', 'Такой почты не существует');
    }
}
