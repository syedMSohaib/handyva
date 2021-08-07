<?php

return [

    /*
    |--------------------------------------------------------------------------
    | Third Party Services
    |--------------------------------------------------------------------------
    |
    | This file is for storing the credentials for third party services such
    | as Mailgun, Postmark, AWS and more. This file provides the de facto
    | location for this type of information, allowing packages to have
    | a conventional file to locate the various service credentials.
    |
    */

    'mailgun' => [
        'domain' => env('MAILGUN_DOMAIN'),
        'secret' => env('MAILGUN_SECRET'),
        'endpoint' => env('MAILGUN_ENDPOINT', 'api.mailgun.net'),
    ],

    'postmark' => [
        'token' => env('POSTMARK_TOKEN'),
    ],

    'ses' => [
        'key' => env('AWS_ACCESS_KEY_ID'),
        'secret' => env('AWS_SECRET_ACCESS_KEY'),
        'region' => env('AWS_DEFAULT_REGION', 'us-east-1'),
    ],

    'stripe' => [
        'pk' => "pk_test_b8qmpGr3IZYARJcwgfWNKevX00zxOc9EbZ",
        "sk" => "sk_test_06fdX4tw6DRPfRVWc4I5F7Do0095EoThGH"
    ],

    'soachat' => [
        "appid" => "ba6fbe0ccab8c49d7c986521b3107c31",
        "appkey" => "cd5e906c77ff5e096fe78815c8496964",
        "domain" => "dev28.onlinetestingserver.com",
        "secretkey" => '$2y$10$vfID6RM9zzCiRGjdNhWJ.OvalTMN5BWrwBAprc3O3OyVl9xG7gEDG',
        "endpoint" => 'http://dev28.onlinetestingserver.com/soachatcentralizedWeb',
    ]

];
