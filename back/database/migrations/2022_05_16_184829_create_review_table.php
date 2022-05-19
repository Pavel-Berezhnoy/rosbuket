<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateReviewTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('review', function (Blueprint $table) {
            $table->id();
            $table->string('username',255);
            $table->smallInteger('estimate');
            $table->text('advantages');
            $table->text('disadvantages');
            $table->boolean('validate');
            $table->text('comment');
            $table->bigInteger('bouquet_id')->unsigned();
            $table->timestamps();
            $table->foreign('bouquet_id')->references('id')->on('bouquet');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema:: table('review', function ($table) {
            $table->dropForeign(['bouquet_id']);
        });
        Schema::dropIfExists('review');
    }
}
