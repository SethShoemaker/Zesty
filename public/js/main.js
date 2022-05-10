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

eval("$(document).ready(function () {\n  function mobileSearch(action) {\n    if (action == 'show') {\n      $('#screen-overlay').show();\n      $('#mobile-search').css('display', 'flex');\n    }\n\n    if (action == 'hide') {\n      $('#screen-overlay').hide();\n      $('#mobile-search').hide();\n    }\n  }\n\n  function mobileProfile(action) {\n    if (action == 'show') {\n      $('#screen-overlay').show();\n      $('#mobile-profile').css('display', 'flex');\n    }\n\n    if (action == 'hide') {\n      $('#screen-overlay').hide();\n      $('#mobile-profile').hide();\n    }\n  }\n\n  $('#mobile-search-show').on('click', function () {\n    mobileSearch('show');\n  });\n  $('#mobile-search-hide').on('click', function () {\n    mobileSearch('hide');\n  });\n  $('#mobile-profile-show').on('click', function () {\n    mobileProfile('show');\n  });\n  $('#mobile-profile-hide').on('click', function () {\n    mobileProfile('hide');\n  });\n  $('#screen-overlay').on('click', function () {\n    mobileSearch('hide');\n    mobileProfile('hide');\n  });\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvbWFpbi5qcz9mZGFjIl0sIm5hbWVzIjpbIiQiLCJkb2N1bWVudCIsInJlYWR5IiwibW9iaWxlU2VhcmNoIiwiYWN0aW9uIiwic2hvdyIsImNzcyIsImhpZGUiLCJtb2JpbGVQcm9maWxlIiwib24iXSwibWFwcGluZ3MiOiJBQUFBQSxDQUFDLENBQUNDLFFBQUQsQ0FBRCxDQUFZQyxLQUFaLENBQWtCLFlBQVU7QUFFeEIsV0FBU0MsWUFBVCxDQUFzQkMsTUFBdEIsRUFBNkI7QUFDekIsUUFBR0EsTUFBTSxJQUFJLE1BQWIsRUFBb0I7QUFDcEJKLE1BQUFBLENBQUMsQ0FBQyxpQkFBRCxDQUFELENBQXFCSyxJQUFyQjtBQUNBTCxNQUFBQSxDQUFDLENBQUMsZ0JBQUQsQ0FBRCxDQUFvQk0sR0FBcEIsQ0FBd0IsU0FBeEIsRUFBbUMsTUFBbkM7QUFDQzs7QUFDRCxRQUFHRixNQUFNLElBQUksTUFBYixFQUFvQjtBQUNoQkosTUFBQUEsQ0FBQyxDQUFDLGlCQUFELENBQUQsQ0FBcUJPLElBQXJCO0FBQ0FQLE1BQUFBLENBQUMsQ0FBQyxnQkFBRCxDQUFELENBQW9CTyxJQUFwQjtBQUNIO0FBQ0o7O0FBRUQsV0FBU0MsYUFBVCxDQUF1QkosTUFBdkIsRUFBOEI7QUFDMUIsUUFBR0EsTUFBTSxJQUFJLE1BQWIsRUFBb0I7QUFDcEJKLE1BQUFBLENBQUMsQ0FBQyxpQkFBRCxDQUFELENBQXFCSyxJQUFyQjtBQUNBTCxNQUFBQSxDQUFDLENBQUMsaUJBQUQsQ0FBRCxDQUFxQk0sR0FBckIsQ0FBeUIsU0FBekIsRUFBb0MsTUFBcEM7QUFDQzs7QUFDRCxRQUFHRixNQUFNLElBQUksTUFBYixFQUFvQjtBQUNoQkosTUFBQUEsQ0FBQyxDQUFDLGlCQUFELENBQUQsQ0FBcUJPLElBQXJCO0FBQ0FQLE1BQUFBLENBQUMsQ0FBQyxpQkFBRCxDQUFELENBQXFCTyxJQUFyQjtBQUNIO0FBQ0o7O0FBRURQLEVBQUFBLENBQUMsQ0FBQyxxQkFBRCxDQUFELENBQXlCUyxFQUF6QixDQUE0QixPQUE1QixFQUFxQyxZQUFVO0FBQzNDTixJQUFBQSxZQUFZLENBQUMsTUFBRCxDQUFaO0FBQ0gsR0FGRDtBQUlBSCxFQUFBQSxDQUFDLENBQUMscUJBQUQsQ0FBRCxDQUF5QlMsRUFBekIsQ0FBNEIsT0FBNUIsRUFBcUMsWUFBVTtBQUMzQ04sSUFBQUEsWUFBWSxDQUFDLE1BQUQsQ0FBWjtBQUNILEdBRkQ7QUFJQUgsRUFBQUEsQ0FBQyxDQUFDLHNCQUFELENBQUQsQ0FBMEJTLEVBQTFCLENBQTZCLE9BQTdCLEVBQXNDLFlBQVU7QUFDNUNELElBQUFBLGFBQWEsQ0FBQyxNQUFELENBQWI7QUFDSCxHQUZEO0FBSUFSLEVBQUFBLENBQUMsQ0FBQyxzQkFBRCxDQUFELENBQTBCUyxFQUExQixDQUE2QixPQUE3QixFQUFzQyxZQUFVO0FBQzVDRCxJQUFBQSxhQUFhLENBQUMsTUFBRCxDQUFiO0FBQ0gsR0FGRDtBQUlBUixFQUFBQSxDQUFDLENBQUMsaUJBQUQsQ0FBRCxDQUFxQlMsRUFBckIsQ0FBd0IsT0FBeEIsRUFBaUMsWUFBVTtBQUN2Q04sSUFBQUEsWUFBWSxDQUFDLE1BQUQsQ0FBWjtBQUNBSyxJQUFBQSxhQUFhLENBQUMsTUFBRCxDQUFiO0FBQ0gsR0FIRDtBQUlILENBNUNEIiwic291cmNlc0NvbnRlbnQiOlsiJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKXtcblxuICAgIGZ1bmN0aW9uIG1vYmlsZVNlYXJjaChhY3Rpb24pe1xuICAgICAgICBpZihhY3Rpb24gPT0gJ3Nob3cnKXtcbiAgICAgICAgJCgnI3NjcmVlbi1vdmVybGF5Jykuc2hvdygpO1xuICAgICAgICAkKCcjbW9iaWxlLXNlYXJjaCcpLmNzcygnZGlzcGxheScsICdmbGV4Jyk7ICAgXG4gICAgICAgIH1cbiAgICAgICAgaWYoYWN0aW9uID09ICdoaWRlJyl7XG4gICAgICAgICAgICAkKCcjc2NyZWVuLW92ZXJsYXknKS5oaWRlKCk7XG4gICAgICAgICAgICAkKCcjbW9iaWxlLXNlYXJjaCcpLmhpZGUoKTtcbiAgICAgICAgfVxuICAgIH0gXG4gICAgXG4gICAgZnVuY3Rpb24gbW9iaWxlUHJvZmlsZShhY3Rpb24pe1xuICAgICAgICBpZihhY3Rpb24gPT0gJ3Nob3cnKXtcbiAgICAgICAgJCgnI3NjcmVlbi1vdmVybGF5Jykuc2hvdygpO1xuICAgICAgICAkKCcjbW9iaWxlLXByb2ZpbGUnKS5jc3MoJ2Rpc3BsYXknLCAnZmxleCcpOyAgIFxuICAgICAgICB9XG4gICAgICAgIGlmKGFjdGlvbiA9PSAnaGlkZScpe1xuICAgICAgICAgICAgJCgnI3NjcmVlbi1vdmVybGF5JykuaGlkZSgpO1xuICAgICAgICAgICAgJCgnI21vYmlsZS1wcm9maWxlJykuaGlkZSgpO1xuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgICQoJyNtb2JpbGUtc2VhcmNoLXNob3cnKS5vbignY2xpY2snLCBmdW5jdGlvbigpe1xuICAgICAgICBtb2JpbGVTZWFyY2goJ3Nob3cnKTtcbiAgICB9KTtcblxuICAgICQoJyNtb2JpbGUtc2VhcmNoLWhpZGUnKS5vbignY2xpY2snLCBmdW5jdGlvbigpe1xuICAgICAgICBtb2JpbGVTZWFyY2goJ2hpZGUnKTtcbiAgICB9KTtcbiAgICBcbiAgICAkKCcjbW9iaWxlLXByb2ZpbGUtc2hvdycpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCl7XG4gICAgICAgIG1vYmlsZVByb2ZpbGUoJ3Nob3cnKTtcbiAgICB9KTtcblxuICAgICQoJyNtb2JpbGUtcHJvZmlsZS1oaWRlJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKXtcbiAgICAgICAgbW9iaWxlUHJvZmlsZSgnaGlkZScpO1xuICAgIH0pO1xuXG4gICAgJCgnI3NjcmVlbi1vdmVybGF5Jykub24oJ2NsaWNrJywgZnVuY3Rpb24oKXtcbiAgICAgICAgbW9iaWxlU2VhcmNoKCdoaWRlJyk7XG4gICAgICAgIG1vYmlsZVByb2ZpbGUoJ2hpZGUnKTtcbiAgICB9KVxufSkgICAgIl0sImZpbGUiOiIuL3Jlc291cmNlcy9qcy9tYWluLmpzLmpzIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./resources/js/main.js\n");

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