<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateFlowerBouquetTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('flower_bouquet', function (Blueprint $table) {
            $table->id()->index();
            $table->bigInteger('bouquet_id')->unsigned();
            $table->bigInteger('flower_id')->unsigned();
            $table->foreign('flower_id')->references('id')->on('flower');
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
        Schema:: table('flower_bouquet', function ($table) {
            $table->dropForeign(['flower_id']);
            $table->dropForeign(['category_id']);
        });
        Schema::dropIfExists('flower_bouquet');
    }
}
