<?php

namespace Database\Seeders;

use App\Models\Package;
use Carbon\Carbon;
use Illuminate\Database\Seeder;

class PackageSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $data = [
            [
                "title" => "Basic",
                "description" => "IDEAL FOR BEGINNERS: VIRTUAL ASSISTANCE FROM OUR POOL RANDOM ASSISTANTS",
                "price" => 25,
                "no_of_task" => 5,
                "created_at" => Carbon::now(),
            ],
            [
                "title" => "Basic",
                "description" => "IDEAL FOR BEGINNERS: VIRTUAL ASSISTANCE FROM OUR POOL RANDOM ASSISTANTS",
                "price" => 60,
                "no_of_task" => 15,
                "created_at" => Carbon::now(),
            ],
            [
                "title" => "Standard",
                "description" => "IDEAL FOR INTERMEDIATE USERS: VIRTUAL ASSISTANCE FROM OUR POOL OF PROFESSIONAL ASSISTANTS",
                "price" => 100,
                "no_of_task" => 30,
                "created_at" => Carbon::now(),
            ],
            [
                "title" => "Standard",
                "description" => "IDEAL FOR INTERMEDIATE USERS: VIRTUAL ASSISTANCE FROM OUR POOL OF PROFESSIONAL ASSISTANTS",
                "price" => 150,
                "no_of_task" => 50,
                "created_at" => Carbon::now(),
            ],
            [
                "title" => "Premium",
                "description" => "IDEAL FOR ADVANCED USERS: VIRTUAL ASSISTANCE FROM OUR POOL OF DEDICATED ASSISTANTS",
                "price" => 275,
                "no_of_task" => 100,
                "created_at" => Carbon::now(),
            ],
        ];

        Package::insert($data);
    }
}
