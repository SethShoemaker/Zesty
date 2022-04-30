<nav id='navMobile'>
    <div id="navContainer">
        <div id="logoContainer">
            <a id='logo' href="{{ url('/') }}" role='logo'>
                <img src='/images/ZestyIcon.svg'>
                Zesty
            </a>
        </div>
        <div id="iconContainer">
            <a>Search</a>
            <a>Profile</a>
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
                <div class="dropdown">
                    <a class="dropdown-toggle" role="button" id="navDropdownToggler" data-bs-toggle="dropdown" aria-expanded="false">
                        {{ Auth::user()->username }}
                    </a>
                
                    <ul class="dropdown-menu" aria-labelledby="navDropdownToggler">
                        <li>
                            <a class="dropdown-item" href="{{ url('/post/recipe') }}">Post Recipe</a>
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