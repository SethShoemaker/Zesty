$(document).ready(function(){
    
    $('#mobile-search-show').on('click', function(){
        $('#screen-overlay').show();
        $('#mobile-search').css('display', 'flex');
    });

    $('#mobile-search-hide').on('click', function(){
        $('#screen-overlay').hide();
        $('#mobile-search').hide();
    });
    
    $('#mobile-profile-show').on('click', function(){
        $('#screen-overlay').show();
        $('#mobile-profile').css('display', 'flex');
    });

    $('#mobile-profile-hide').on('click', function(){
        $('#screen-overlay').hide();
        $('#mobile-profile').hide();
    });

    $('#screen-overlay').on('click', function(){
        $(this).hide();
        $('#mobile-search').hide();
        $('#mobile-profile').hide();
    })
})    