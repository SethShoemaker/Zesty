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

/***/ "./resources/js/dashboard.js":
/*!***********************************!*\
  !*** ./resources/js/dashboard.js ***!
  \***********************************/
/***/ (() => {

eval("$(function () {\n  function showUpdateForm() {\n    $('#editContainer').css(\"display\", \"flex\");\n    $('#screenOverlay').show();\n    $('body').css(\"overflow\", \"hidden\");\n  }\n\n  function hideAvatarForm() {\n    $('#editContainer').hide();\n    $('#screenOverlay').hide();\n    $('body').css(\"overflow\", \"scroll\");\n  }\n\n  $(\"#updateBtn\").on('click', function () {\n    showUpdateForm();\n  });\n  $(\"#screenOverlay\").on('click', function () {\n    hideAvatarForm();\n  });\n  $(\"#updateFormCancel\").on('click', function (e) {\n    e.preventDefault();\n    hideAvatarForm();\n  });\n  $('#avatar').on('change', function () {\n    var file = this.files[0];\n    var reader = new FileReader();\n\n    reader.onload = function (event) {\n      $('#avatarPreview').attr(\"src\", event.target.result);\n    };\n\n    reader.readAsDataURL(file);\n  });\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvZGFzaGJvYXJkLmpzPzg3MmQiXSwibmFtZXMiOlsiJCIsInNob3dVcGRhdGVGb3JtIiwiY3NzIiwic2hvdyIsImhpZGVBdmF0YXJGb3JtIiwiaGlkZSIsIm9uIiwiZSIsInByZXZlbnREZWZhdWx0IiwiZmlsZSIsImZpbGVzIiwicmVhZGVyIiwiRmlsZVJlYWRlciIsIm9ubG9hZCIsImV2ZW50IiwiYXR0ciIsInRhcmdldCIsInJlc3VsdCIsInJlYWRBc0RhdGFVUkwiXSwibWFwcGluZ3MiOiJBQUFBQSxDQUFDLENBQUMsWUFBVTtBQUNSLFdBQVNDLGNBQVQsR0FBeUI7QUFDckJELElBQUFBLENBQUMsQ0FBQyxnQkFBRCxDQUFELENBQW9CRSxHQUFwQixDQUF3QixTQUF4QixFQUFtQyxNQUFuQztBQUNBRixJQUFBQSxDQUFDLENBQUMsZ0JBQUQsQ0FBRCxDQUFvQkcsSUFBcEI7QUFDQUgsSUFBQUEsQ0FBQyxDQUFDLE1BQUQsQ0FBRCxDQUFVRSxHQUFWLENBQWMsVUFBZCxFQUEwQixRQUExQjtBQUNIOztBQUVELFdBQVNFLGNBQVQsR0FBeUI7QUFDckJKLElBQUFBLENBQUMsQ0FBQyxnQkFBRCxDQUFELENBQW9CSyxJQUFwQjtBQUNBTCxJQUFBQSxDQUFDLENBQUMsZ0JBQUQsQ0FBRCxDQUFvQkssSUFBcEI7QUFDQUwsSUFBQUEsQ0FBQyxDQUFDLE1BQUQsQ0FBRCxDQUFVRSxHQUFWLENBQWMsVUFBZCxFQUEwQixRQUExQjtBQUNIOztBQUVERixFQUFBQSxDQUFDLENBQUMsWUFBRCxDQUFELENBQWdCTSxFQUFoQixDQUFtQixPQUFuQixFQUE0QixZQUFVO0FBQ2xDTCxJQUFBQSxjQUFjO0FBQ2pCLEdBRkQ7QUFJQUQsRUFBQUEsQ0FBQyxDQUFDLGdCQUFELENBQUQsQ0FBb0JNLEVBQXBCLENBQXVCLE9BQXZCLEVBQWdDLFlBQVU7QUFDdENGLElBQUFBLGNBQWM7QUFDakIsR0FGRDtBQUlBSixFQUFBQSxDQUFDLENBQUMsbUJBQUQsQ0FBRCxDQUF1Qk0sRUFBdkIsQ0FBMEIsT0FBMUIsRUFBbUMsVUFBU0MsQ0FBVCxFQUFXO0FBQzFDQSxJQUFBQSxDQUFDLENBQUNDLGNBQUY7QUFDQUosSUFBQUEsY0FBYztBQUNqQixHQUhEO0FBS0FKLEVBQUFBLENBQUMsQ0FBQyxTQUFELENBQUQsQ0FBYU0sRUFBYixDQUFnQixRQUFoQixFQUEwQixZQUFVO0FBQ2hDLFFBQUlHLElBQUksR0FBRyxLQUFLQyxLQUFMLENBQVcsQ0FBWCxDQUFYO0FBQ0EsUUFBSUMsTUFBTSxHQUFHLElBQUlDLFVBQUosRUFBYjs7QUFDQUQsSUFBQUEsTUFBTSxDQUFDRSxNQUFQLEdBQWdCLFVBQVNDLEtBQVQsRUFBZTtBQUMzQmQsTUFBQUEsQ0FBQyxDQUFDLGdCQUFELENBQUQsQ0FBb0JlLElBQXBCLENBQXlCLEtBQXpCLEVBQStCRCxLQUFLLENBQUNFLE1BQU4sQ0FBYUMsTUFBNUM7QUFDSCxLQUZEOztBQUdBTixJQUFBQSxNQUFNLENBQUNPLGFBQVAsQ0FBcUJULElBQXJCO0FBQ0gsR0FQRDtBQVFILENBbENBLENBQUQiLCJzb3VyY2VzQ29udGVudCI6WyIkKGZ1bmN0aW9uKCl7XG4gICAgZnVuY3Rpb24gc2hvd1VwZGF0ZUZvcm0oKXtcbiAgICAgICAgJCgnI2VkaXRDb250YWluZXInKS5jc3MoXCJkaXNwbGF5XCIsIFwiZmxleFwiICk7ICAgICAgIFxuICAgICAgICAkKCcjc2NyZWVuT3ZlcmxheScpLnNob3coKTtcbiAgICAgICAgJCgnYm9keScpLmNzcyhcIm92ZXJmbG93XCIsIFwiaGlkZGVuXCIgKTtcbiAgICB9XG4gICAgXG4gICAgZnVuY3Rpb24gaGlkZUF2YXRhckZvcm0oKXtcbiAgICAgICAgJCgnI2VkaXRDb250YWluZXInKS5oaWRlKCk7IFxuICAgICAgICAkKCcjc2NyZWVuT3ZlcmxheScpLmhpZGUoKTtcbiAgICAgICAgJCgnYm9keScpLmNzcyhcIm92ZXJmbG93XCIsIFwic2Nyb2xsXCIgKTtcbiAgICB9XG5cbiAgICAkKFwiI3VwZGF0ZUJ0blwiKS5vbignY2xpY2snLCBmdW5jdGlvbigpe1xuICAgICAgICBzaG93VXBkYXRlRm9ybSgpO1xuICAgIH0pXG5cbiAgICAkKFwiI3NjcmVlbk92ZXJsYXlcIikub24oJ2NsaWNrJywgZnVuY3Rpb24oKXtcbiAgICAgICAgaGlkZUF2YXRhckZvcm0oKTtcbiAgICB9KVxuXG4gICAgJChcIiN1cGRhdGVGb3JtQ2FuY2VsXCIpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpe1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGhpZGVBdmF0YXJGb3JtKCk7XG4gICAgfSlcblxuICAgICQoJyNhdmF0YXInKS5vbignY2hhbmdlJywgZnVuY3Rpb24oKXtcbiAgICAgICAgbGV0IGZpbGUgPSB0aGlzLmZpbGVzWzBdO1xuICAgICAgICBsZXQgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcbiAgICAgICAgcmVhZGVyLm9ubG9hZCA9IGZ1bmN0aW9uKGV2ZW50KXtcbiAgICAgICAgICAgICQoJyNhdmF0YXJQcmV2aWV3JykuYXR0cihcInNyY1wiLGV2ZW50LnRhcmdldC5yZXN1bHQpO1xuICAgICAgICB9O1xuICAgICAgICByZWFkZXIucmVhZEFzRGF0YVVSTChmaWxlKTtcbiAgICB9KTtcbn0pIl0sImZpbGUiOiIuL3Jlc291cmNlcy9qcy9kYXNoYm9hcmQuanMuanMiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./resources/js/dashboard.js\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./resources/js/dashboard.js"]();
/******/ 	
/******/ })()
;