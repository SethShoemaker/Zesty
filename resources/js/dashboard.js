$(function(){
    function showAvatarForm(){
        $('#avatarFormContainer').css("display", "flex" );
        $('body').css("overflow", "hidden" );
    }
    
    function hideAvatarForm(){
        $('#avatarFormContainer').hide();
        $('body').css("overflow", "scroll" );
    }

    $("#avatarFrame").on('click', function(){
        showAvatarForm();
    })

    $("#screenOverlay").on('click', function(){
        hideAvatarForm();
    })
    
    $("#avatarFormHide").on('click', function(){
        hideAvatarForm();
    })

    $("#avatarFormCancel").on('click', function(e){
        e.preventDefault();
        hideAvatarForm();
    })
})