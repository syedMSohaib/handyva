<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $this->call([
            // AdminSeeder::class,
            // PackageSeeder::class,
            ReferralSeeder::class,
        ]);
        // \App\Models\Client::factory(10)->create();
        // \App\Models\User::factory(10)->create();
    }
}
