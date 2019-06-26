<?php

/* @var $factory \Illuminate\Database\Eloquent\Factory */

use App\Quote;
use Faker\Generator as Faker;

$factory->define(Quote::class, function (Faker $faker) {
    return [
        'author' => $faker->name(),
        'author_permalink' => $faker->url ,
        'url' => $faker->url ,
        'body' => $faker->text(100),
        'favorites_count' => $faker->numberBetween(100, 900),
        'upvotes_count' => $faker->numberBetween(100, 900),
        'downvotes_count' => $faker->numberBetween(100, 900),
        'date' => $faker->date('Y-m-d', 'now')
    ];
});
