<div id="screen-overlay"></div>
<nav id='mobile-nav'>
    <div class="nav-container">
        <div class="logo-container">
            <a class='logo' href="{{ url('/') }}" role='logo'>
                <img src='/images/ZestyIcon.svg'>
                Zesty
            </a>
        </div>
        <div id="mobile-icons">
            <a id="mobile-search-show" role="search-button">
                <img src='{{ asset('images/iconSearch.svg') }}'>
            </a>
            <a id="mobile-profile-show" role="profile-button">
                <img src='{{ asset('images/iconProfile.svg') }}'>
            </a>
        </div>
    </div>
    <div id="mobile-search">      
        <a id="mobile-search-hide"><img src='{{ asset('images/iconClose.svg') }}'></a>
        <form action='/search' method='GET'>
            <input id='q' type='text' name='q' placeholder='Search' role='search' value='{{ $q ?? null }}'>
            <button type='submit'>
                <img src='/images/iconSearch.svg'>
            </button>
        </form>
    </div>
    <div id="mobile-profile">
        <div id="mobile-profile-hide">
            <a><img src='{{ asset('images/iconClose.svg') }}'></a>
        </div>
        @guest
            <a href="{{ url('/login') }}">
                Login
            </a>

            <a href="{{ url('/register') }}">
                Register
            </a>
        @else
            <a href="{{ url('/recipe/create') }}">Post Recipe</a>

            <a href="{{ url('/dashboard') }}">Dashboard</a>

            <a href="{{ route('logout') }}" onclick="event.preventDefault(); document.getElementById('logout-form').submit();">
                Logout
            </a>

            <form id="logout-form" action="{{ route('logout') }}" method="POST" class="d-none">
                @csrf
            </form>
        @endguest
    </div>
</nav>
<nav id="desktop-nav">
    <div class="nav-container">
        <div class="logo-container">
            <a class='logo' href="{{ url('/') }}" role='logo'>
                <img src='/images/ZestyIcon.svg'>
                Zesty
            </a>
        </div>
        <div id="desktop-search">
            <form action='/search' method='GET'>
                <input id='q' type='text' name='q' placeholder='Search' role='search' value='{{ $q ?? null }}'>
                <button type='submit'>
                    <img src='/images/iconSearch.svg'>
                </button>
            </form>
        </div>
        <div id="desktop-auth">
            @guest
                <a  href="{{ url('/login') }}">
                    Login
                </a>
                <a  href="{{ url('/register') }}">
                    Register
                </a>
            @else
                <div class="dropdown">
                    <a class="dropdown-toggle" role="button" id="navDropdownToggler" data-bs-toggle="dropdown" aria-expanded="false">
                        {{ Auth::user()->username }}
                    </a>
                
                    <ul class="dropdown-menu" aria-labelledby="navDropdownToggler">
                        <li>
                            <a class="dropdown-item" href="{{ url('/recipe/create') }}">Post Recipe</a>
                        </li>
                        <li>
                            <a class="dropdown-item" href="{{ url('/dashboard') }}">Dashboard</a>
                        </li>
                        <li>
                            <a class="dropdown-item" href="{{ route('logout') }}" onclick="event.preventDefault(); document.getElementById('logout-form').submit();">
                                Logout
                            </a>
                
                            <form id="logout-form" action="{{ route('logout') }}" method="POST" class="d-none">
                                @csrf
                            </form>
                        </li>
                    </ul>
                </div>
            @endguest
        </div>
    </div>
</nav>