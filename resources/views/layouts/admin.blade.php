<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ config('app.name', 'Laravel') }}</title>

    <!-- Fonts -->
    <link rel="dns-prefetch" href="//fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css?family=Nunito" rel="stylesheet">
    <link rel="stylesheet" href="https://cdn-uicons.flaticon.com/uicons-regular-rounded/css/uicons-regular-rounded.css">

    <!-- Styles -->
    <link href="{{ asset('css/admin/app.css') }}" rel="stylesheet">
    <link rel="stylesheet" href="{{ asset('vendor/datatables/css/jquery.dataTables.min.css') }}">
    <style>
        .loading-indicator:before{content:'';background:#000000cc;position:fixed;width:100%;height:100%;top:0;left:0;z-index:10000000000}.loading-indicator:after{content:'Loading ...';position:fixed;width:100%;top:50%;left:0;z-index:10001;color:#fff;text-align:center;font-weight:700;font-size:1.5rem}.approve .dg-content:before{background:url("{{asset('/images/add-cat-popup.png')}}") no-repeat center !important}.reject .dg-content:before{background:url("{{asset('/images/block.png')}}") no-repeat center !important}.dg-content:before{background:url("{{asset('/images/block.png')}}") no-repeat center !important;}
        .owl-nav{
                display: flex;
                flex-direction: row-reverse;
                justify-content: center;
        }

    </style>

    <!-- Scripts -->
    <script type="text/javascript">
        window.base_url = "{{ url('/') }}";
        window.user = @json(auth('admin')->user());
        window.user_per = @json(auth('admin')->user()->pids());
        window.appname = "{{config('app.name')}}";
        window.info = {
            countries : @json(app('App\Models\Country')::all()),
            timezones : @json(app('App\Models\Timezone')::all()),
            permissions: @json(config('app.permissions')),
            task_status: @json(app('App\Models\Task')::$status),
        }
        window.soachat = {
            appid: "{{config('services.soachat.appid')}}",
            appkey: "{{config('services.soachat.appkey')}}",
            domain: "{{config('services.soachat.domain')}}",
        }

    </script>
    <script defer="true" src="{{ asset('js/admin/app.js') }}"></script>
    <script defer="true" src="{{ asset('vendor/datatables/js/jquery.dataTables.min.js') }}"></script>
    <script defer="true" src="https://dev28.onlinetestingserver.com/soachatcentralizedWeb/js/ocs.js"></script>

</head>
<body data-typography="poppins" data-theme-version="light" data-layout="vertical" data-nav-headerbg="color_1" data-headerbg="color_1" data-sidebar-style="full" data-sibebarbg="color_1" data-sidebar-position="fixed" data-header-position="fixed" data-container="wide" direction="ltr" data-primary="color_1">
        <div id="app">
        <app/>
    </div>
</body>
</html>
