<?php

use Illuminate\Database\Seeder;

class QuotesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $tags = App\QuoteTag::all();
		$users = App\User::all() ;
        $quotes = factory(App\Quote::class, 20)->create(); 

        $quotes->each(function ($quote) use ($tags, $users) {
            $quote->tags()->attach(
                $tags->random(rand(1,3))->pluck('id')->toArray()
            );

            $quote->usersFav()->attach(
                $users->random(1)->pluck('id'),
                [ 'type' => array_random(['fav', 'like'])]
            );
        });
    }
}
