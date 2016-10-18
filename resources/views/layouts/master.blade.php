<html>
    <head>
        <title>App Name - @yield('title')</title>
        <script src="{{ URL::asset('js/dest/jquery.js') }}"></script>
        <script src="{{ URL::asset('js/dest/angular.min.js') }}"></script>
        <script src="{{ URL::asset('js/dest/script-min.js') }}"></script>
        
        <link href="{{ URL::asset('css/dest/styles.min.css') }}" rel="stylesheet">
        
    </head>
    <body>
        <header>
            <nav>
                <ul>
                    <li>
                        <a href="javascript:;">Home</a>
                    </li>
                    <li>
                        <a href="javascript:;">Home</a>
                    </li>
                    <li>
                        <a href="javascript:;">Home</a>
                    </li>
                </ul>
            </nav>
        </header>

        <div class="container">
            @yield('content')
        </div>
    </body>
</html>