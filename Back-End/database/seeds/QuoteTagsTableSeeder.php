<?php

use Illuminate\Database\Seeder;

class QuoteTagsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        factory(App\QuoteTag::class, 15)->create();
    }
}
