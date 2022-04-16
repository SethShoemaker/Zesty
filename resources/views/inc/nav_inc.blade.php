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
                <input id='q' type='text' name='q' placeholder='Search'>
                <button type='submit'>
                    <img src='/images/iconSearch.svg'>
                </button>
            </form>
        </div>
        <div id="authContainer">
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
            </div>
    </div>
</nav>