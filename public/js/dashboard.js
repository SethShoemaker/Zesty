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

eval("$(function () {\n  function showUpdateForm() {\n    $('#editContainer').css(\"display\", \"flex\");\n    $('#screen-overlay').show();\n    $('body').css(\"overflow\", \"hidden\");\n  }\n\n  function hideAvatarForm() {\n    $('#editContainer').hide();\n    $('#screen-overlay').hide();\n    $('body').css(\"overflow\", \"scroll\");\n  }\n\n  $(\"#updateBtn\").on('click', function () {\n    showUpdateForm();\n  });\n  $(\"#screenOverlay\").on('click', function () {\n    hideAvatarForm();\n  });\n  $(\"#updateFormCancel\").on('click', function (e) {\n    e.preventDefault();\n    hideAvatarForm();\n  });\n  $('#avatar').on('change', function () {\n    var file = this.files[0];\n    var reader = new FileReader();\n\n    reader.onload = function (event) {\n      $('#avatarPreview').attr(\"src\", event.target.result);\n    };\n\n    reader.readAsDataURL(file);\n  });\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvZGFzaGJvYXJkLmpzPzg3MmQiXSwibmFtZXMiOlsiJCIsInNob3dVcGRhdGVGb3JtIiwiY3NzIiwic2hvdyIsImhpZGVBdmF0YXJGb3JtIiwiaGlkZSIsIm9uIiwiZSIsInByZXZlbnREZWZhdWx0IiwiZmlsZSIsImZpbGVzIiwicmVhZGVyIiwiRmlsZVJlYWRlciIsIm9ubG9hZCIsImV2ZW50IiwiYXR0ciIsInRhcmdldCIsInJlc3VsdCIsInJlYWRBc0RhdGFVUkwiXSwibWFwcGluZ3MiOiJBQUFBQSxDQUFDLENBQUMsWUFBVTtBQUNSLFdBQVNDLGNBQVQsR0FBeUI7QUFDckJELElBQUFBLENBQUMsQ0FBQyxnQkFBRCxDQUFELENBQW9CRSxHQUFwQixDQUF3QixTQUF4QixFQUFtQyxNQUFuQztBQUNBRixJQUFBQSxDQUFDLENBQUMsaUJBQUQsQ0FBRCxDQUFxQkcsSUFBckI7QUFDQUgsSUFBQUEsQ0FBQyxDQUFDLE1BQUQsQ0FBRCxDQUFVRSxHQUFWLENBQWMsVUFBZCxFQUEwQixRQUExQjtBQUNIOztBQUVELFdBQVNFLGNBQVQsR0FBeUI7QUFDckJKLElBQUFBLENBQUMsQ0FBQyxnQkFBRCxDQUFELENBQW9CSyxJQUFwQjtBQUNBTCxJQUFBQSxDQUFDLENBQUMsaUJBQUQsQ0FBRCxDQUFxQkssSUFBckI7QUFDQUwsSUFBQUEsQ0FBQyxDQUFDLE1BQUQsQ0FBRCxDQUFVRSxHQUFWLENBQWMsVUFBZCxFQUEwQixRQUExQjtBQUNIOztBQUVERixFQUFBQSxDQUFDLENBQUMsWUFBRCxDQUFELENBQWdCTSxFQUFoQixDQUFtQixPQUFuQixFQUE0QixZQUFVO0FBQ2xDTCxJQUFBQSxjQUFjO0FBQ2pCLEdBRkQ7QUFJQUQsRUFBQUEsQ0FBQyxDQUFDLGdCQUFELENBQUQsQ0FBb0JNLEVBQXBCLENBQXVCLE9BQXZCLEVBQWdDLFlBQVU7QUFDdENGLElBQUFBLGNBQWM7QUFDakIsR0FGRDtBQUlBSixFQUFBQSxDQUFDLENBQUMsbUJBQUQsQ0FBRCxDQUF1Qk0sRUFBdkIsQ0FBMEIsT0FBMUIsRUFBbUMsVUFBU0MsQ0FBVCxFQUFXO0FBQzFDQSxJQUFBQSxDQUFDLENBQUNDLGNBQUY7QUFDQUosSUFBQUEsY0FBYztBQUNqQixHQUhEO0FBS0FKLEVBQUFBLENBQUMsQ0FBQyxTQUFELENBQUQsQ0FBYU0sRUFBYixDQUFnQixRQUFoQixFQUEwQixZQUFVO0FBQ2hDLFFBQUlHLElBQUksR0FBRyxLQUFLQyxLQUFMLENBQVcsQ0FBWCxDQUFYO0FBQ0EsUUFBSUMsTUFBTSxHQUFHLElBQUlDLFVBQUosRUFBYjs7QUFDQUQsSUFBQUEsTUFBTSxDQUFDRSxNQUFQLEdBQWdCLFVBQVNDLEtBQVQsRUFBZTtBQUMzQmQsTUFBQUEsQ0FBQyxDQUFDLGdCQUFELENBQUQsQ0FBb0JlLElBQXBCLENBQXlCLEtBQXpCLEVBQStCRCxLQUFLLENBQUNFLE1BQU4sQ0FBYUMsTUFBNUM7QUFDSCxLQUZEOztBQUdBTixJQUFBQSxNQUFNLENBQUNPLGFBQVAsQ0FBcUJULElBQXJCO0FBQ0gsR0FQRDtBQVFILENBbENBLENBQUQiLCJzb3VyY2VzQ29udGVudCI6WyIkKGZ1bmN0aW9uKCl7XG4gICAgZnVuY3Rpb24gc2hvd1VwZGF0ZUZvcm0oKXtcbiAgICAgICAgJCgnI2VkaXRDb250YWluZXInKS5jc3MoXCJkaXNwbGF5XCIsIFwiZmxleFwiICk7ICAgICAgIFxuICAgICAgICAkKCcjc2NyZWVuLW92ZXJsYXknKS5zaG93KCk7XG4gICAgICAgICQoJ2JvZHknKS5jc3MoXCJvdmVyZmxvd1wiLCBcImhpZGRlblwiICk7XG4gICAgfVxuICAgIFxuICAgIGZ1bmN0aW9uIGhpZGVBdmF0YXJGb3JtKCl7XG4gICAgICAgICQoJyNlZGl0Q29udGFpbmVyJykuaGlkZSgpOyBcbiAgICAgICAgJCgnI3NjcmVlbi1vdmVybGF5JykuaGlkZSgpO1xuICAgICAgICAkKCdib2R5JykuY3NzKFwib3ZlcmZsb3dcIiwgXCJzY3JvbGxcIiApO1xuICAgIH1cblxuICAgICQoXCIjdXBkYXRlQnRuXCIpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCl7XG4gICAgICAgIHNob3dVcGRhdGVGb3JtKCk7XG4gICAgfSlcblxuICAgICQoXCIjc2NyZWVuT3ZlcmxheVwiKS5vbignY2xpY2snLCBmdW5jdGlvbigpe1xuICAgICAgICBoaWRlQXZhdGFyRm9ybSgpO1xuICAgIH0pXG5cbiAgICAkKFwiI3VwZGF0ZUZvcm1DYW5jZWxcIikub24oJ2NsaWNrJywgZnVuY3Rpb24oZSl7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgaGlkZUF2YXRhckZvcm0oKTtcbiAgICB9KVxuXG4gICAgJCgnI2F2YXRhcicpLm9uKCdjaGFuZ2UnLCBmdW5jdGlvbigpe1xuICAgICAgICBsZXQgZmlsZSA9IHRoaXMuZmlsZXNbMF07XG4gICAgICAgIGxldCByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xuICAgICAgICByZWFkZXIub25sb2FkID0gZnVuY3Rpb24oZXZlbnQpe1xuICAgICAgICAgICAgJCgnI2F2YXRhclByZXZpZXcnKS5hdHRyKFwic3JjXCIsZXZlbnQudGFyZ2V0LnJlc3VsdCk7XG4gICAgICAgIH07XG4gICAgICAgIHJlYWRlci5yZWFkQXNEYXRhVVJMKGZpbGUpO1xuICAgIH0pO1xufSkiXSwiZmlsZSI6Ii4vcmVzb3VyY2VzL2pzL2Rhc2hib2FyZC5qcy5qcyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./resources/js/dashboard.js\n");

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