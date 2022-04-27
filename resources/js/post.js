$(function(){

    $(".container form").on("submit", function(){
        encodeIngredients();
        if($('#ingredientsJSON').val() == "[]"){
            return false;
        }
    })

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
        let ingredientQuantity = parseInt($("#ingredientQuantity").val());
        let ingredientName = $("#ingredientName").val();
        // Checks if ingredient was entered properly
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
            let itemJSON = JSON.stringify({
                "ingredientQuantity": ingredientQuantity,
                "ingredientName": ingredientName
            });
            $('#ingredientsList').append(
                '<li class="list-group-item fs-6" value=\'' + itemJSON + '\'><a class="class" onclick="this.parentNode.remove()"><img src="/images/iconExit.svg"></a>' + ingredientQuantity + " " + ingredientName + '</li>'
            );
            $("#ingredientQuantity").removeClass('is-invalid').val('');
            $("#ingredientName").removeClass('is-invalid').val('');
        }
    }

    $("#ingredientsList").sortable();

    function encodeIngredients(){
        // Creates array of ingredients as JSON objects
        let ingredientListJSON = [];
        $( "#ingredientsList li" ).each(function() {
                let ingredientJSON = JSON.parse($(this).attr('value'));
                ingredientListJSON.push(ingredientJSON); 
            });
        ingredientListJSON = JSON.stringify(ingredientListJSON);
        $('#ingredientsJSON').val(ingredientListJSON);
    }
})