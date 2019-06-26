<?php

/* @var $factory \Illuminate\Database\Eloquent\Factory */

use App\QuoteTag;
use Faker\Generator as Faker;

$factory->define(QuoteTag::class, function (Faker $faker) {
    return [
        'tag' => $faker->unique()->word
    ];
});
