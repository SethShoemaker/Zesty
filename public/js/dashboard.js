/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!***********************************!*\
  !*** ./resources/js/dashboard.js ***!
  \***********************************/
$(function () {
  function updateForm(action) {
    if (action == 'show') {
      $('#updateForm').css("display", "flex");
      $('#screen-overlay').show();
      $('body').css("overflow", "hidden");
    }

    if (action == 'hide') {
      $('#updateForm').hide();
      $('#screen-overlay').hide();
      $('body').css("overflow", "scroll");
    }
  }

  $("#updateBtn").on('click', function () {
    updateForm('show');
  });
  $("#updateFormCancel").on('click', function (e) {
    e.preventDefault();
    updateForm('hide');
  });
  $('#screen-overlay').on('click', function () {
    updateForm('hide');
  });
  $('#avatar').on('change', function () {
    var file = this.files[0];
    var reader = new FileReader();

    reader.onload = function (event) {
      $('#avatarPreview').attr("src", event.target.result);
    };

    reader.readAsDataURL(file);
  });
});
/******/ })()
;