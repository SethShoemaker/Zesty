/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./resources/js/dashboard/dashboard.js":
/*!*********************************************!*\
  !*** ./resources/js/dashboard/dashboard.js ***!
  \*********************************************/
/***/ (() => {

eval("$(function () {\n  function showUpdateForm() {\n    $('#editContainer').css(\"display\", \"flex\");\n    $('#screenOverlay').show();\n    $('body').css(\"overflow\", \"hidden\");\n  }\n\n  function hideAvatarForm() {\n    $('#editContainer').hide();\n    $('#screenOverlay').hide();\n    $('body').css(\"overflow\", \"scroll\");\n  }\n\n  $(\"#updateBtn\").on('click', function () {\n    showUpdateForm();\n  });\n  $(\"#screenOverlay\").on('click', function () {\n    hideAvatarForm();\n  });\n  $(\"#updateFormCancel\").on('click', function (e) {\n    e.preventDefault();\n    hideAvatarForm();\n  });\n  $('#avatar').on('change', function () {\n    var file = this.files[0];\n    var reader = new FileReader();\n\n    reader.onload = function (event) {\n      $('#avatarPreview').attr(\"src\", event.target.result);\n    };\n\n    reader.readAsDataURL(file);\n  });\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvZGFzaGJvYXJkL2Rhc2hib2FyZC5qcz8xZDA2Il0sIm5hbWVzIjpbIiQiLCJzaG93VXBkYXRlRm9ybSIsImNzcyIsInNob3ciLCJoaWRlQXZhdGFyRm9ybSIsImhpZGUiLCJvbiIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImZpbGUiLCJmaWxlcyIsInJlYWRlciIsIkZpbGVSZWFkZXIiLCJvbmxvYWQiLCJldmVudCIsImF0dHIiLCJ0YXJnZXQiLCJyZXN1bHQiLCJyZWFkQXNEYXRhVVJMIl0sIm1hcHBpbmdzIjoiQUFBQUEsQ0FBQyxDQUFDLFlBQVU7QUFDUixXQUFTQyxjQUFULEdBQXlCO0FBQ3JCRCxJQUFBQSxDQUFDLENBQUMsZ0JBQUQsQ0FBRCxDQUFvQkUsR0FBcEIsQ0FBd0IsU0FBeEIsRUFBbUMsTUFBbkM7QUFDQUYsSUFBQUEsQ0FBQyxDQUFDLGdCQUFELENBQUQsQ0FBb0JHLElBQXBCO0FBQ0FILElBQUFBLENBQUMsQ0FBQyxNQUFELENBQUQsQ0FBVUUsR0FBVixDQUFjLFVBQWQsRUFBMEIsUUFBMUI7QUFDSDs7QUFFRCxXQUFTRSxjQUFULEdBQXlCO0FBQ3JCSixJQUFBQSxDQUFDLENBQUMsZ0JBQUQsQ0FBRCxDQUFvQkssSUFBcEI7QUFDQUwsSUFBQUEsQ0FBQyxDQUFDLGdCQUFELENBQUQsQ0FBb0JLLElBQXBCO0FBQ0FMLElBQUFBLENBQUMsQ0FBQyxNQUFELENBQUQsQ0FBVUUsR0FBVixDQUFjLFVBQWQsRUFBMEIsUUFBMUI7QUFDSDs7QUFFREYsRUFBQUEsQ0FBQyxDQUFDLFlBQUQsQ0FBRCxDQUFnQk0sRUFBaEIsQ0FBbUIsT0FBbkIsRUFBNEIsWUFBVTtBQUNsQ0wsSUFBQUEsY0FBYztBQUNqQixHQUZEO0FBSUFELEVBQUFBLENBQUMsQ0FBQyxnQkFBRCxDQUFELENBQW9CTSxFQUFwQixDQUF1QixPQUF2QixFQUFnQyxZQUFVO0FBQ3RDRixJQUFBQSxjQUFjO0FBQ2pCLEdBRkQ7QUFJQUosRUFBQUEsQ0FBQyxDQUFDLG1CQUFELENBQUQsQ0FBdUJNLEVBQXZCLENBQTBCLE9BQTFCLEVBQW1DLFVBQVNDLENBQVQsRUFBVztBQUMxQ0EsSUFBQUEsQ0FBQyxDQUFDQyxjQUFGO0FBQ0FKLElBQUFBLGNBQWM7QUFDakIsR0FIRDtBQUtBSixFQUFBQSxDQUFDLENBQUMsU0FBRCxDQUFELENBQWFNLEVBQWIsQ0FBZ0IsUUFBaEIsRUFBMEIsWUFBVTtBQUNoQyxRQUFJRyxJQUFJLEdBQUcsS0FBS0MsS0FBTCxDQUFXLENBQVgsQ0FBWDtBQUNBLFFBQUlDLE1BQU0sR0FBRyxJQUFJQyxVQUFKLEVBQWI7O0FBQ0FELElBQUFBLE1BQU0sQ0FBQ0UsTUFBUCxHQUFnQixVQUFTQyxLQUFULEVBQWU7QUFDM0JkLE1BQUFBLENBQUMsQ0FBQyxnQkFBRCxDQUFELENBQW9CZSxJQUFwQixDQUF5QixLQUF6QixFQUErQkQsS0FBSyxDQUFDRSxNQUFOLENBQWFDLE1BQTVDO0FBQ0gsS0FGRDs7QUFHQU4sSUFBQUEsTUFBTSxDQUFDTyxhQUFQLENBQXFCVCxJQUFyQjtBQUNILEdBUEQ7QUFRSCxDQWxDQSxDQUFEIiwic291cmNlc0NvbnRlbnQiOlsiJChmdW5jdGlvbigpe1xuICAgIGZ1bmN0aW9uIHNob3dVcGRhdGVGb3JtKCl7XG4gICAgICAgICQoJyNlZGl0Q29udGFpbmVyJykuY3NzKFwiZGlzcGxheVwiLCBcImZsZXhcIiApOyAgICAgICBcbiAgICAgICAgJCgnI3NjcmVlbk92ZXJsYXknKS5zaG93KCk7XG4gICAgICAgICQoJ2JvZHknKS5jc3MoXCJvdmVyZmxvd1wiLCBcImhpZGRlblwiICk7XG4gICAgfVxuICAgIFxuICAgIGZ1bmN0aW9uIGhpZGVBdmF0YXJGb3JtKCl7XG4gICAgICAgICQoJyNlZGl0Q29udGFpbmVyJykuaGlkZSgpOyBcbiAgICAgICAgJCgnI3NjcmVlbk92ZXJsYXknKS5oaWRlKCk7XG4gICAgICAgICQoJ2JvZHknKS5jc3MoXCJvdmVyZmxvd1wiLCBcInNjcm9sbFwiICk7XG4gICAgfVxuXG4gICAgJChcIiN1cGRhdGVCdG5cIikub24oJ2NsaWNrJywgZnVuY3Rpb24oKXtcbiAgICAgICAgc2hvd1VwZGF0ZUZvcm0oKTtcbiAgICB9KVxuXG4gICAgJChcIiNzY3JlZW5PdmVybGF5XCIpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCl7XG4gICAgICAgIGhpZGVBdmF0YXJGb3JtKCk7XG4gICAgfSlcblxuICAgICQoXCIjdXBkYXRlRm9ybUNhbmNlbFwiKS5vbignY2xpY2snLCBmdW5jdGlvbihlKXtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBoaWRlQXZhdGFyRm9ybSgpO1xuICAgIH0pXG5cbiAgICAkKCcjYXZhdGFyJykub24oJ2NoYW5nZScsIGZ1bmN0aW9uKCl7XG4gICAgICAgIGxldCBmaWxlID0gdGhpcy5maWxlc1swXTtcbiAgICAgICAgbGV0IHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XG4gICAgICAgIHJlYWRlci5vbmxvYWQgPSBmdW5jdGlvbihldmVudCl7XG4gICAgICAgICAgICAkKCcjYXZhdGFyUHJldmlldycpLmF0dHIoXCJzcmNcIixldmVudC50YXJnZXQucmVzdWx0KTtcbiAgICAgICAgfTtcbiAgICAgICAgcmVhZGVyLnJlYWRBc0RhdGFVUkwoZmlsZSk7XG4gICAgfSk7XG59KSJdLCJmaWxlIjoiLi9yZXNvdXJjZXMvanMvZGFzaGJvYXJkL2Rhc2hib2FyZC5qcy5qcyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./resources/js/dashboard/dashboard.js\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./resources/js/dashboard/dashboard.js"]();
/******/ 	
/******/ })()
;