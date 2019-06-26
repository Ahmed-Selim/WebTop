<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateMemosTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('memos', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->unsignedBigInteger('user_id')->index();
            $table->string('title');
            $table->text('file');
            $table->bigInteger('size');

            $table->unique(['user_id', 'title']);
            $table->foreign('user_id')->references('id')->on('users');
            $table->timestamps();
        });

        // Schema::table('memos', function (Blueprint $table) {
        //     $table->unsignedBigInteger('id', true)->change();
        // });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('memos');
    }
}
