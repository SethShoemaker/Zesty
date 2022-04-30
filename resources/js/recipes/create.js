$(function(){

    const { parseInt } = require("lodash");

    // Loops though and appends old ingredients
    if ($('#ingredientsJSON').val().length > 0) {
        let oldIngredientJSON = JSON.parse($('#ingredientsJSON').val());
        $.each(oldIngredientJSON,function(index){
            let currentOldIngredient = oldIngredientJSON[index];
            $('#ingredientsList').append(
                '<li class="list-group-item fs-6" value=\'' + JSON.stringify(currentOldIngredient) + '\'><a onclick="this.parentNode.remove()"><img src="/images/iconExit.svg"></a>' + currentOldIngredient.ingredientQuantity + " " + currentOldIngredient.ingredientName + '</li>'
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
        var error = false;
        let ingredientQuantity = $("#ingredientQuantity").val();
        let ingredientName = $("#ingredientName").val();
        if (ingredientQuantity == 0 || ingredientQuantity === null) {
            var error = true;
            $('#ingredientQuantity').addClass('is-invalid');
        }
        if (ingredientName === "") {
            var error = true;
            $('#ingredientName').addClass('is-invalid');
        }
        if (error != true) {
            // Create new list item with JSON object as value attr
            let ingredientJSON = JSON.stringify({
                "ingredientQuantity":  parseInt(ingredientQuantity),
                "ingredientName": ingredientName
            });
            $('#ingredientsList').append(
                '<li class="list-group-item fs-6" value=\'' + ingredientJSON + '\'><a class="class" onclick="this.parentNode.remove()"><img src="/images/iconExit.svg"></a>' + ingredientQuantity + " " + ingredientName + '</li>'
            );
            $("#ingredientQuantity").removeClass('is-invalid').val('');
            $("#ingredientName").removeClass('is-invalid').val('');
        }
    }

    $("#ingredientsList").sortable();

    $(".container form").on("submit", function(){
        encodeIngredients();
        if($('#ingredientsJSON').val() == "[]"){
            alert('You have not added any ingredients to your recipe!');
            return false;
        }
    })

    function encodeIngredients(){
        let ingredientListJSON = [];
        $( "#ingredientsList li" ).each(function() {
                let ingredientJSON = JSON.parse($(this).attr('value'));
                ingredientListJSON.push(ingredientJSON); 
            });
        ingredientListJSON = JSON.stringify(ingredientListJSON);
        $('#ingredientsJSON').val(ingredientListJSON);
    }
})