<?php

namespace App\Console\Commands;

use App\Models\Admin;
use App\Models\Client;
use App\Models\User;
use Exception;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\Log;

class Soachat extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'soachat:sync';

    /**
     * appid
     *
     * @var string
     */
    protected $appid = "ba6fbe0ccab8c49d7c986521b3107c31";

    /**
     * secretkey
     *
     * @var string
     */
    protected $secretkey = '$2y$10$vfID6RM9zzCiRGjdNhWJ.OvalTMN5BWrwBAprc3O3OyVl9xG7gEDG';

    /**
     * endpoint
     *
     * @var string
     */
    protected $endpoint = 'http://dev28.onlinetestingserver.com/soachatcentralizedWeb';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Sync User to SoaChat';

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
     * request
     *
     * @param  mixed $fields
     * @param  mixed $url
     * @return void
     */
    public function request($fields, $url=''){
        $headers = array (
                "Connection: keep-alive",
                "User-Agent: Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/535.19 (KHTML, like Gecko) Chrome/18.0.1025.162 Safari/535.19",
                "Accept: text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
                "Accept-Encoding: gzip,deflate,sdch",
                "Accept-Language: en-US,en;q=0.8",
                "Accept-Charset: ISO-8859-1,utf-8;q=0.7,*;q=0.3"
        );
        $fields_string = http_build_query ( $fields );
        $cookie = 'cf6c650fc5361e46b4e6b7d5918692cd=49d369a493e3088837720400c8dba3fa; __utma=148531883.862638000.1335434431.1335434431.1335434431.1; __utmc=148531883; __utmz=148531883.1335434431.1.1.utmcsr=(direct)|utmccn=(direct)|utmcmd=(none); mcs=698afe33a415257006ed24d33c7d467d; style=default';

        $data_string = json_encode($fields);

        $ch = curl_init ();
        curl_setopt ( $ch, CURLOPT_URL, $url);
        curl_setopt($ch, CURLOPT_CUSTOMREQUEST, "POST");
        curl_setopt($ch, CURLOPT_POSTFIELDS, $data_string);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($ch, CURLOPT_HTTPHEADER, array(
                         'Content-Type: application/json',
                         'Content-Length: ' . strlen($data_string))
        );
        $response = curl_exec ( $ch );
        curl_close ( $ch );
        return $response;
    }


    /*  Endpoint to add User to Soachat system database POST - /api/user/add */
    public function addUser($id,$name,$avatar=null,$isVideoIncluded=0){

        $data = array(
            'appid' =>  $this->appid,
            'secret_key' =>  $this->secretkey,
            'id' =>  $id,
            'name' =>  $name,
            'isVideoIncluded' => $isVideoIncluded,
            'avatar' =>  $avatar,
        );

        $url = $this->endpoint . '/api/user/add';
        try{
            $response = $this->request($data, $url );
        }
        catch(Exception $e){
            Log::info($e->getMessage());
        }
        return $response;
    }


    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {
        dump("Users syncing process initiated");

        $users = User::all();
        foreach($users as $user){
            $this->addUser($user->uuid, $user->name, $user->image, 0);
            dump("{$user->name} is synced to SoaChat");
        }

        dump("All Users are synced to SoaChat");
        dump("Client syncing process initiated");

        $orgs = Client::all();
        foreach($orgs as $org){
            $this->addUser($org->uuid, $org->name, $org->image, 0);
            dump("{$org->name} is synced to SoaChat");
        }

        dump("All Client are synced to SoaChat");
        dump("Admin syncing process initiated");

        $admins = Admin::all();
        foreach($admins as $emp){
            $this->addUser($emp->uuid, $emp->name, $emp->image, 0);
            dump("{$emp->name} is synced to SoaChat");
        }

        dump("All Admin are synced to SoaChat");
        dump("Syncing finished");

        return 0;
    }
}
