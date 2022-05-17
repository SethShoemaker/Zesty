/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!****************************************!*\
  !*** ./resources/js/recipes/create.js ***!
  \****************************************/
$(function () {
  console.log($('#ingredients').val()); // Loops though and appends old ingredients

  if ($('#ingredients').val().length > 0) {
    var oldIngredient = JSON.parse($('#ingredients').val());
    $.each(oldIngredient, function (index) {
      var currentOldIngredient = oldIngredient[index];
      $('#ingredientsList').append('<li class="list-group-item fs-6" value=\'' + currentOldIngredient + '\'><a onclick="this.parentNode.remove()">X</a>' + currentOldIngredient + '</li>');
    });
  }

  $('#image').on('change', function () {
    var file = this.files[0];
    var reader = new FileReader();

    reader.onload = function (event) {
      $('#imagePreview').attr("src", event.target.result);
    };

    reader.readAsDataURL(file);
  });
  $('#addIngredient').on('click', function (e) {
    addIngredient();
  });
  $('.ingredientInput').on('keypress', function (e) {
    var keyCode = e.keyCode || e.which;

    if (keyCode === 13) {
      e.preventDefault();
      addIngredient();
      return false;
    }
  });

  function addIngredient() {
    var error = false;
    var ingredient = $("#ingredientName").val();

    if (ingredient === "") {
      error = true;
      $('#ingredientName').addClass('is-invalid');
    }

    if (error != true) {
      $('#ingredientsList').append('<li class="list-group-item fs-6" value=\'' + ingredient + '\'><a onclick="this.parentNode.remove()">X</a>' + ingredient + '</li>');
      $("#ingredientQuantity").removeClass('is-invalid').val('');
      $("#ingredientName").removeClass('is-invalid').val('');
    }
  }

  $("#ingredientsList").sortable();
  $(".container form").on("submit", function () {
    encodeIngredients();

    if ($('#ingredients').val() == "[]") {
      alert('You have not added any ingredients to your recipe!');
      return false;
    }
  });

  function encodeIngredients() {
    var ingredientList = [];
    $("#ingredientsList li").each(function () {
      var ingredientItem = $(this).attr("value");
      ingredientList.push(ingredientItem);
    });
    ingredientList = JSON.stringify(ingredientList);
    $('#ingredients').val(ingredientList);
  }
});
/******/ })()
;