$(function(){
    $('#delete-show').on('click', function(){
        $('#delete-confirmation').css('display', 'grid');
        $('#screen-overlay').show();
        $('body').css("overflow", "hidden" );
    })

    function deleteCancel(){
        $('#delete-confirmation').hide();
        $('#screen-overlay').hide();
        $('body').css("overflow", "scroll" );
    }

    $('#screen-overlay').on('click', function(){
        deleteCancel();
    })

    $('#delete-cancel').on('click', function(){
        deleteCancel();
    })
})