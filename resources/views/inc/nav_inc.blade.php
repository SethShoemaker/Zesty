<nav>
    <div id="navContainer">
        <div id="logoContainer">
            <a id='logo' href="{{ url('/') }}" role='logo'>
                <img src='/images/ZestyIcon.svg'>
                {{ config('app.name') }}
            </a>
        </div>
        <div id="searchContainer">
            <form action='/search' method='post'>
                <input type='text'>
                <button>Search</button>
            </form>
        </div>
        <ul id="authContainer">
            @guest
                <a  href="{{ url('/login') }}">
                    Login
                </a>
                <a  href="{{ url('/register') }}">
                    Register
                </a>
            @else
                <a  href="{{ url('/dashboard') }}">
                    {{ Auth::user()->name }}
                </a>
            @endguest
        </ul>
    </div>
</nav>