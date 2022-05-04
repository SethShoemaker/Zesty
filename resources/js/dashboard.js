$(function(){
    function showUpdateForm(){
        $('#editContainer').css("display", "flex" );       
        $('#screenOverlay').show();
        $('body').css("overflow", "hidden" );
    }
    
    function hideAvatarForm(){
        $('#editContainer').hide(); 
        $('#screenOverlay').hide();
        $('body').css("overflow", "scroll" );
    }

    $("#updateBtn").on('click', function(){
        showUpdateForm();
    })

    $("#screenOverlay").on('click', function(){
        hideAvatarForm();
    })

    $("#updateFormCancel").on('click', function(e){
        e.preventDefault();
        hideAvatarForm();
    })

    $('#avatar').on('change', function(){
        let file = this.files[0];
        let reader = new FileReader();
        reader.onload = function(event){
            $('#avatarPreview').attr("src",event.target.result);
        };
        reader.readAsDataURL(file);
    });
})