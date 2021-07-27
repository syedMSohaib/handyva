<?php

namespace App\Console\Commands;

use App\Models\Admin;
use App\Models\Client;
use App\Models\User;
use Illuminate\Console\Command;
use Webpatser\Uuid\Uuid;

class SyncUuid extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'sync:uuid';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Update Uuids to user, orgs and employee table';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {
        $users = User::whereNull('uuid')->get();
        foreach($users as $user){
            $user->uuid = (string) Uuid::generate(4);
            $user->save();
        }

        $clients = Client::whereNull('uuid')->get();
        foreach($clients as $client){
            $client->uuid = (string) Uuid::generate(4);
            $client->save();
        }

        $admins = Admin::whereNull('uuid')->get();
        foreach($admins as $admin){
            $admin->uuid = (string) Uuid::generate(4);
            $admin->save();
        }

        return "User, Admin and Client are synced with Uuid";
    }
}
