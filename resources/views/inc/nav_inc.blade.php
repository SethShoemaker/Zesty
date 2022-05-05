<nav id='navMobile'>
    <div id="navContainer">
        <div id="logoContainer">
            <a id='logo' href="{{ url('/') }}" role='logo'>
                <img src='/images/ZestyIcon.svg'>
                Zesty
            </a>
        </div>
        <div id="iconContainer">
            <div class="dropdown">
                <a id="SearchToggler" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <img src='{{ asset('images/iconSearch.svg') }}'>
                </a>
                <ul class="dropdown-menu" aria-labelledby="SearchToggler">
                    <li class="dropdown-item">Action</li>
                </ul>
            </div>
            <div class="dropdown">
                <a id="profileToggler" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <img src='{{ asset('images/iconProfile.svg') }}'>
                </a>
                <ul class="dropdown-menu" aria-labelledby="profileToggler">
                    <li class="dropdown-item">Action</li>
                </ul>
            </div>
        </div>
    </div>
</nav>
<nav id="navDesktop">
    <div id="navContainer">
        <div id="logoContainer">
            <a id='logo' href="{{ url('/') }}" role='logo'>
                <img src='/images/ZestyIcon.svg'>
                Zesty
            </a>
        </div>
        <div id="searchContainer">
            <form action='/search' method='GET'>
                <input id='q' type='text' name='q' placeholder='Search' value='{{ $q ?? null }}'>
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
                <div class="dropdown">
                    <a class="dropdown-toggle" role="button" id="navDropdownToggler" data-bs-toggle="dropdown" aria-expanded="false">
                        {{ Auth::user()->username }}
                    </a>
                
                    <ul class="dropdown-menu" aria-labelledby="navDropdownToggler">
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