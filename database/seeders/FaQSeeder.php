<?php

namespace Database\Seeders;

use App\Models\Faq;
use Illuminate\Database\Seeder;

class FaQSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $faker = \Faker\Factory::create();

        foreach(range(0, 5) as $inc){
            $data = [
                "category" => "Task",
                "question" => $faker->sentence,
                "answer" => $faker->paragraph
            ];
            Faq::create($data);
        }
    }
}
