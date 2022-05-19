<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateAnswerTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('answer', function (Blueprint $table) {
            $table->id();
            $table->string('username', 255);
            $table->text('message');
            $table->boolean('validate');
            $table->bigInteger('review_id')->unsigned();
            $table->bigInteger('answer_id')->unsigned();
            $table->foreign('review_id')->references('id')->on('review');
            $table->foreign('answer_id')->references('id')->on('answer');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('answer', function ($table) {
            $table->dropForeign(['review_id']);
            $table->dropForeign(['answer_id']);
        });
        Schema::dropIfExists('answer');
    }
}
