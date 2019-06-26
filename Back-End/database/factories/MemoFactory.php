<?php

/* @var $factory \Illuminate\Database\Eloquent\Factory */

use App\Memo;
use Faker\Generator as Faker;

$factory->define(Memo::class, function (Faker $faker) {
    return [
        'title' => $faker->unique()->name(),
        'file' => $faker->unique()->url(),
        'size' => $faker->randomNumber(NULL, false),
        'user_id' => \App\User::all()->random()->id
    ];
});
