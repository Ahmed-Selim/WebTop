<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */
use App\User;
use Illuminate\Support\Str;
use Faker\Generator as Faker;

/*
|--------------------------------------------------------------------------
| Model Factories
|--------------------------------------------------------------------------
|
| This directory should contain each of the model factory definitions for
| your application. Factories provide a convenient way to generate new
| model instances for testing / seeding your application's database.
|
*/

$factory->define(User::class, function (Faker $faker) {

    $gender = $faker->randomElement(['male', 'female']) ;

    return [
        'first_name' => $faker->firstName($gender),
        'last_name' => $faker->lastName($gender),
        'user_name' => $faker->unique()->userName,
        'profile_picture' => '/img/' . $gender . '.png',
        
        // 'profile_picture' => $faker->unique()->sentence(5,true),

        // 'email' => $faker->freeEmail,
        // 'password' => $faker->password,
        'phone_number' => $faker->unique()->e164PhoneNumber,
        'birth_day' => $faker->date('Y-m-d','now'),
        'gender' => $gender,
        'state' => $faker->state,
        'city' => $faker->city,
        'country' => $faker->country,
        'auth' => $faker->randomElement(['user','admin']),
    ];
});
