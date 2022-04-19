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

eval("$(function () {\n  function showAvatarForm() {\n    $('#avatarFormContainer').css(\"display\", \"flex\");\n    $('body').css(\"overflow\", \"hidden\");\n  }\n\n  function hideAvatarForm() {\n    $('#avatarFormContainer').hide();\n    $('body').css(\"overflow\", \"scroll\");\n  }\n\n  $(\"#avatarFrame\").on('click', function () {\n    showAvatarForm();\n  });\n  $(\"#screenOverlay\").on('click', function () {\n    hideAvatarForm();\n  });\n  $(\"#avatarFormHide\").on('click', function () {\n    hideAvatarForm();\n  });\n  $(\"#avatarFormCancel\").on('click', function (e) {\n    e.preventDefault();\n    hideAvatarForm();\n  });\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvZGFzaGJvYXJkLmpzPzg3MmQiXSwibmFtZXMiOlsiJCIsInNob3dBdmF0YXJGb3JtIiwiY3NzIiwiaGlkZUF2YXRhckZvcm0iLCJoaWRlIiwib24iLCJlIiwicHJldmVudERlZmF1bHQiXSwibWFwcGluZ3MiOiJBQUFBQSxDQUFDLENBQUMsWUFBVTtBQUNSLFdBQVNDLGNBQVQsR0FBeUI7QUFDckJELElBQUFBLENBQUMsQ0FBQyxzQkFBRCxDQUFELENBQTBCRSxHQUExQixDQUE4QixTQUE5QixFQUF5QyxNQUF6QztBQUNBRixJQUFBQSxDQUFDLENBQUMsTUFBRCxDQUFELENBQVVFLEdBQVYsQ0FBYyxVQUFkLEVBQTBCLFFBQTFCO0FBQ0g7O0FBRUQsV0FBU0MsY0FBVCxHQUF5QjtBQUNyQkgsSUFBQUEsQ0FBQyxDQUFDLHNCQUFELENBQUQsQ0FBMEJJLElBQTFCO0FBQ0FKLElBQUFBLENBQUMsQ0FBQyxNQUFELENBQUQsQ0FBVUUsR0FBVixDQUFjLFVBQWQsRUFBMEIsUUFBMUI7QUFDSDs7QUFFREYsRUFBQUEsQ0FBQyxDQUFDLGNBQUQsQ0FBRCxDQUFrQkssRUFBbEIsQ0FBcUIsT0FBckIsRUFBOEIsWUFBVTtBQUNwQ0osSUFBQUEsY0FBYztBQUNqQixHQUZEO0FBSUFELEVBQUFBLENBQUMsQ0FBQyxnQkFBRCxDQUFELENBQW9CSyxFQUFwQixDQUF1QixPQUF2QixFQUFnQyxZQUFVO0FBQ3RDRixJQUFBQSxjQUFjO0FBQ2pCLEdBRkQ7QUFJQUgsRUFBQUEsQ0FBQyxDQUFDLGlCQUFELENBQUQsQ0FBcUJLLEVBQXJCLENBQXdCLE9BQXhCLEVBQWlDLFlBQVU7QUFDdkNGLElBQUFBLGNBQWM7QUFDakIsR0FGRDtBQUlBSCxFQUFBQSxDQUFDLENBQUMsbUJBQUQsQ0FBRCxDQUF1QkssRUFBdkIsQ0FBMEIsT0FBMUIsRUFBbUMsVUFBU0MsQ0FBVCxFQUFXO0FBQzFDQSxJQUFBQSxDQUFDLENBQUNDLGNBQUY7QUFDQUosSUFBQUEsY0FBYztBQUNqQixHQUhEO0FBSUgsQ0EzQkEsQ0FBRCIsInNvdXJjZXNDb250ZW50IjpbIiQoZnVuY3Rpb24oKXtcbiAgICBmdW5jdGlvbiBzaG93QXZhdGFyRm9ybSgpe1xuICAgICAgICAkKCcjYXZhdGFyRm9ybUNvbnRhaW5lcicpLmNzcyhcImRpc3BsYXlcIiwgXCJmbGV4XCIgKTtcbiAgICAgICAgJCgnYm9keScpLmNzcyhcIm92ZXJmbG93XCIsIFwiaGlkZGVuXCIgKTtcbiAgICB9XG4gICAgXG4gICAgZnVuY3Rpb24gaGlkZUF2YXRhckZvcm0oKXtcbiAgICAgICAgJCgnI2F2YXRhckZvcm1Db250YWluZXInKS5oaWRlKCk7XG4gICAgICAgICQoJ2JvZHknKS5jc3MoXCJvdmVyZmxvd1wiLCBcInNjcm9sbFwiICk7XG4gICAgfVxuXG4gICAgJChcIiNhdmF0YXJGcmFtZVwiKS5vbignY2xpY2snLCBmdW5jdGlvbigpe1xuICAgICAgICBzaG93QXZhdGFyRm9ybSgpO1xuICAgIH0pXG5cbiAgICAkKFwiI3NjcmVlbk92ZXJsYXlcIikub24oJ2NsaWNrJywgZnVuY3Rpb24oKXtcbiAgICAgICAgaGlkZUF2YXRhckZvcm0oKTtcbiAgICB9KVxuICAgIFxuICAgICQoXCIjYXZhdGFyRm9ybUhpZGVcIikub24oJ2NsaWNrJywgZnVuY3Rpb24oKXtcbiAgICAgICAgaGlkZUF2YXRhckZvcm0oKTtcbiAgICB9KVxuXG4gICAgJChcIiNhdmF0YXJGb3JtQ2FuY2VsXCIpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpe1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGhpZGVBdmF0YXJGb3JtKCk7XG4gICAgfSlcbn0pIl0sImZpbGUiOiIuL3Jlc291cmNlcy9qcy9kYXNoYm9hcmQuanMuanMiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./resources/js/dashboard.js\n");

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