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

/***/ "./resources/js/main.js":
/*!******************************!*\
  !*** ./resources/js/main.js ***!
  \******************************/
/***/ (() => {

eval("$(document).ready(function () {\n  $('#mobile-search-show').on('click', function () {\n    $('#screen-overlay').show();\n    $('#mobile-search').css('display', 'flex');\n  });\n  $('#mobile-search-hide').on('click', function () {\n    $('#screen-overlay').hide();\n    $('#mobile-search').hide();\n  });\n  $('#mobile-profile-show').on('click', function () {\n    $('#screen-overlay').show();\n    $('#mobile-profile').css('display', 'flex');\n  });\n  $('#mobile-profile-hide').on('click', function () {\n    $('#screen-overlay').hide();\n    $('#mobile-profile').hide();\n  });\n  $('#screen-overlay').on('click', function () {\n    $(this).hide();\n    $('#mobile-search').hide();\n    $('#mobile-profile').hide();\n  });\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvbWFpbi5qcz9mZGFjIl0sIm5hbWVzIjpbIiQiLCJkb2N1bWVudCIsInJlYWR5Iiwib24iLCJzaG93IiwiY3NzIiwiaGlkZSJdLCJtYXBwaW5ncyI6IkFBQUFBLENBQUMsQ0FBQ0MsUUFBRCxDQUFELENBQVlDLEtBQVosQ0FBa0IsWUFBVTtBQUV4QkYsRUFBQUEsQ0FBQyxDQUFDLHFCQUFELENBQUQsQ0FBeUJHLEVBQXpCLENBQTRCLE9BQTVCLEVBQXFDLFlBQVU7QUFDM0NILElBQUFBLENBQUMsQ0FBQyxpQkFBRCxDQUFELENBQXFCSSxJQUFyQjtBQUNBSixJQUFBQSxDQUFDLENBQUMsZ0JBQUQsQ0FBRCxDQUFvQkssR0FBcEIsQ0FBd0IsU0FBeEIsRUFBbUMsTUFBbkM7QUFDSCxHQUhEO0FBS0FMLEVBQUFBLENBQUMsQ0FBQyxxQkFBRCxDQUFELENBQXlCRyxFQUF6QixDQUE0QixPQUE1QixFQUFxQyxZQUFVO0FBQzNDSCxJQUFBQSxDQUFDLENBQUMsaUJBQUQsQ0FBRCxDQUFxQk0sSUFBckI7QUFDQU4sSUFBQUEsQ0FBQyxDQUFDLGdCQUFELENBQUQsQ0FBb0JNLElBQXBCO0FBQ0gsR0FIRDtBQUtBTixFQUFBQSxDQUFDLENBQUMsc0JBQUQsQ0FBRCxDQUEwQkcsRUFBMUIsQ0FBNkIsT0FBN0IsRUFBc0MsWUFBVTtBQUM1Q0gsSUFBQUEsQ0FBQyxDQUFDLGlCQUFELENBQUQsQ0FBcUJJLElBQXJCO0FBQ0FKLElBQUFBLENBQUMsQ0FBQyxpQkFBRCxDQUFELENBQXFCSyxHQUFyQixDQUF5QixTQUF6QixFQUFvQyxNQUFwQztBQUNILEdBSEQ7QUFLQUwsRUFBQUEsQ0FBQyxDQUFDLHNCQUFELENBQUQsQ0FBMEJHLEVBQTFCLENBQTZCLE9BQTdCLEVBQXNDLFlBQVU7QUFDNUNILElBQUFBLENBQUMsQ0FBQyxpQkFBRCxDQUFELENBQXFCTSxJQUFyQjtBQUNBTixJQUFBQSxDQUFDLENBQUMsaUJBQUQsQ0FBRCxDQUFxQk0sSUFBckI7QUFDSCxHQUhEO0FBS0FOLEVBQUFBLENBQUMsQ0FBQyxpQkFBRCxDQUFELENBQXFCRyxFQUFyQixDQUF3QixPQUF4QixFQUFpQyxZQUFVO0FBQ3ZDSCxJQUFBQSxDQUFDLENBQUMsSUFBRCxDQUFELENBQVFNLElBQVI7QUFDQU4sSUFBQUEsQ0FBQyxDQUFDLGdCQUFELENBQUQsQ0FBb0JNLElBQXBCO0FBQ0FOLElBQUFBLENBQUMsQ0FBQyxpQkFBRCxDQUFELENBQXFCTSxJQUFyQjtBQUNILEdBSkQ7QUFLSCxDQTNCRCIsInNvdXJjZXNDb250ZW50IjpbIiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCl7XG4gICAgXG4gICAgJCgnI21vYmlsZS1zZWFyY2gtc2hvdycpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCl7XG4gICAgICAgICQoJyNzY3JlZW4tb3ZlcmxheScpLnNob3coKTtcbiAgICAgICAgJCgnI21vYmlsZS1zZWFyY2gnKS5jc3MoJ2Rpc3BsYXknLCAnZmxleCcpO1xuICAgIH0pO1xuXG4gICAgJCgnI21vYmlsZS1zZWFyY2gtaGlkZScpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCl7XG4gICAgICAgICQoJyNzY3JlZW4tb3ZlcmxheScpLmhpZGUoKTtcbiAgICAgICAgJCgnI21vYmlsZS1zZWFyY2gnKS5oaWRlKCk7XG4gICAgfSk7XG4gICAgXG4gICAgJCgnI21vYmlsZS1wcm9maWxlLXNob3cnKS5vbignY2xpY2snLCBmdW5jdGlvbigpe1xuICAgICAgICAkKCcjc2NyZWVuLW92ZXJsYXknKS5zaG93KCk7XG4gICAgICAgICQoJyNtb2JpbGUtcHJvZmlsZScpLmNzcygnZGlzcGxheScsICdmbGV4Jyk7XG4gICAgfSk7XG5cbiAgICAkKCcjbW9iaWxlLXByb2ZpbGUtaGlkZScpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCl7XG4gICAgICAgICQoJyNzY3JlZW4tb3ZlcmxheScpLmhpZGUoKTtcbiAgICAgICAgJCgnI21vYmlsZS1wcm9maWxlJykuaGlkZSgpO1xuICAgIH0pO1xuXG4gICAgJCgnI3NjcmVlbi1vdmVybGF5Jykub24oJ2NsaWNrJywgZnVuY3Rpb24oKXtcbiAgICAgICAgJCh0aGlzKS5oaWRlKCk7XG4gICAgICAgICQoJyNtb2JpbGUtc2VhcmNoJykuaGlkZSgpO1xuICAgICAgICAkKCcjbW9iaWxlLXByb2ZpbGUnKS5oaWRlKCk7XG4gICAgfSlcbn0pICAgICJdLCJmaWxlIjoiLi9yZXNvdXJjZXMvanMvbWFpbi5qcy5qcyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./resources/js/main.js\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./resources/js/main.js"]();
/******/ 	
/******/ })()
;