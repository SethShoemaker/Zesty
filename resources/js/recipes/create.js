$(function(){

console.log($('#ingredients').val());

    // Loops though and appends old ingredients
    if ($('#ingredients').val().length > 0) {
        let oldIngredient = JSON.parse($('#ingredients').val());
        
        $.each(oldIngredient,function(index){
            let currentOldIngredient = oldIngredient[index];
            $('#ingredientsList').append(
                '<li class="list-group-item fs-6" value=\'' + currentOldIngredient + '\'><a onclick="this.parentNode.remove()">X</a>' + currentOldIngredient + '</li>'
            );
        });
    }

    $('#image').on('change', function(){
        let file = this.files[0];
        let reader = new FileReader();
        reader.onload = function(event){
            $('#imagePreview').attr("src",event.target.result);
        };
        reader.readAsDataURL(file);
    });

    $('#addIngredient').on('click', function(e){
        addIngredient();
    });

    $('.ingredientInput').on('keypress', function(e) {
        let keyCode = e.keyCode || e.which;
        if (keyCode === 13) {
            e.preventDefault();
            addIngredient();
            return false;
        }
    });

    function addIngredient() {
        let error = false;
        let ingredient = $("#ingredientName").val();
        if (ingredient === "") {
            error = true;
            $('#ingredientName').addClass('is-invalid');
        }
        if (error != true) {
            $('#ingredientsList').append(
                '<li class="list-group-item fs-6" value=\'' + ingredient + '\'><a onclick="this.parentNode.remove()">X</a>' + ingredient + '</li>'
            );
            $("#ingredientQuantity").removeClass('is-invalid').val('');
            $("#ingredientName").removeClass('is-invalid').val('');
        }
    }

    $("#ingredientsList").sortable();

    $(".container form").on("submit", function(){
        encodeIngredients();
        if($('#ingredients').val() == "[]"){
            alert('You have not added any ingredients to your recipe!');
            return false;
        }
    })

    function encodeIngredients(){
        let ingredientList = [];
        $( "#ingredientsList li" ).each(function() {
                let ingredientItem = $(this).attr( "value" );
                ingredientList.push(ingredientItem); 
            });
        ingredientList = JSON.stringify(ingredientList);
        $('#ingredients').val(ingredientList);
    }
})