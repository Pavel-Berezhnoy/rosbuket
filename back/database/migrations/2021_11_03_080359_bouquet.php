<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class Bouquet extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('bouquet', function (Blueprint $table) {
            $table->id()->index();
            $table->string('name');
            $table->string('image');
            $table->decimal('price',12,2);
            $table->text('description');
            $table->string('short_description');
            $table->timestamp('created_at')->nullable();
            $table->decimal('discount',12,2)->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('bouquet');
    }
}
