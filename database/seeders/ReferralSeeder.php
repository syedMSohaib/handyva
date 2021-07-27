<?php

namespace Database\Seeders;

use App\Models\Client;
use App\Models\Package;
use App\Models\Referral;
use Illuminate\Database\Seeder;

class ReferralSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $client = Client::all()->random();

        $faker = \Faker\Factory::create();

        foreach(range(0, 5) as $inc){
            $data = [
                "client_id" => $client->id,
                "referral_code" => true,
                "suggested_package" => Package::all()->random()->id,
                "referred_client_name"  => $faker->name(),
                "referred_client_email" => $faker->email(),
                "registration_date" => null,
                "registration_status"   => 0,
            ];
            // dd($data);
            Referral::create($data);

        }

    }
}
