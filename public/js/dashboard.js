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

eval("$(function () {\n  function updateForm(action) {\n    if (action == 'show') {\n      $('#editContainer').css(\"display\", \"flex\");\n      $('#screen-overlay').show();\n      $('body').css(\"overflow\", \"hidden\");\n    }\n\n    if (action == 'hide') {\n      $('#editContainer').hide();\n      $('#screen-overlay').hide();\n      $('body').css(\"overflow\", \"scroll\");\n    }\n  }\n\n  $(\"#updateBtn\").on('click', function () {\n    updateForm('show');\n  });\n  $(\"#updateFormCancel\").on('click', function (e) {\n    e.preventDefault();\n    updateForm('hide');\n  });\n  $('#avatar').on('change', function () {\n    var file = this.files[0];\n    var reader = new FileReader();\n\n    reader.onload = function (event) {\n      $('#avatarPreview').attr(\"src\", event.target.result);\n    };\n\n    reader.readAsDataURL(file);\n  });\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvZGFzaGJvYXJkLmpzPzg3MmQiXSwibmFtZXMiOlsiJCIsInVwZGF0ZUZvcm0iLCJhY3Rpb24iLCJjc3MiLCJzaG93IiwiaGlkZSIsIm9uIiwiZSIsInByZXZlbnREZWZhdWx0IiwiZmlsZSIsImZpbGVzIiwicmVhZGVyIiwiRmlsZVJlYWRlciIsIm9ubG9hZCIsImV2ZW50IiwiYXR0ciIsInRhcmdldCIsInJlc3VsdCIsInJlYWRBc0RhdGFVUkwiXSwibWFwcGluZ3MiOiJBQUFBQSxDQUFDLENBQUMsWUFBVTtBQUVSLFdBQVNDLFVBQVQsQ0FBb0JDLE1BQXBCLEVBQTJCO0FBQ3ZCLFFBQUdBLE1BQU0sSUFBSSxNQUFiLEVBQW9CO0FBQ2hCRixNQUFBQSxDQUFDLENBQUMsZ0JBQUQsQ0FBRCxDQUFvQkcsR0FBcEIsQ0FBd0IsU0FBeEIsRUFBbUMsTUFBbkM7QUFDQUgsTUFBQUEsQ0FBQyxDQUFDLGlCQUFELENBQUQsQ0FBcUJJLElBQXJCO0FBQ0FKLE1BQUFBLENBQUMsQ0FBQyxNQUFELENBQUQsQ0FBVUcsR0FBVixDQUFjLFVBQWQsRUFBMEIsUUFBMUI7QUFDSDs7QUFDRCxRQUFHRCxNQUFNLElBQUksTUFBYixFQUFvQjtBQUNoQkYsTUFBQUEsQ0FBQyxDQUFDLGdCQUFELENBQUQsQ0FBb0JLLElBQXBCO0FBQ0FMLE1BQUFBLENBQUMsQ0FBQyxpQkFBRCxDQUFELENBQXFCSyxJQUFyQjtBQUNBTCxNQUFBQSxDQUFDLENBQUMsTUFBRCxDQUFELENBQVVHLEdBQVYsQ0FBYyxVQUFkLEVBQTBCLFFBQTFCO0FBQ0g7QUFDSjs7QUFFREgsRUFBQUEsQ0FBQyxDQUFDLFlBQUQsQ0FBRCxDQUFnQk0sRUFBaEIsQ0FBbUIsT0FBbkIsRUFBNEIsWUFBVTtBQUNsQ0wsSUFBQUEsVUFBVSxDQUFDLE1BQUQsQ0FBVjtBQUNILEdBRkQ7QUFJQUQsRUFBQUEsQ0FBQyxDQUFDLG1CQUFELENBQUQsQ0FBdUJNLEVBQXZCLENBQTBCLE9BQTFCLEVBQW1DLFVBQVNDLENBQVQsRUFBVztBQUMxQ0EsSUFBQUEsQ0FBQyxDQUFDQyxjQUFGO0FBQ0FQLElBQUFBLFVBQVUsQ0FBQyxNQUFELENBQVY7QUFDSCxHQUhEO0FBS0FELEVBQUFBLENBQUMsQ0FBQyxTQUFELENBQUQsQ0FBYU0sRUFBYixDQUFnQixRQUFoQixFQUEwQixZQUFVO0FBQ2hDLFFBQUlHLElBQUksR0FBRyxLQUFLQyxLQUFMLENBQVcsQ0FBWCxDQUFYO0FBQ0EsUUFBSUMsTUFBTSxHQUFHLElBQUlDLFVBQUosRUFBYjs7QUFDQUQsSUFBQUEsTUFBTSxDQUFDRSxNQUFQLEdBQWdCLFVBQVNDLEtBQVQsRUFBZTtBQUMzQmQsTUFBQUEsQ0FBQyxDQUFDLGdCQUFELENBQUQsQ0FBb0JlLElBQXBCLENBQXlCLEtBQXpCLEVBQStCRCxLQUFLLENBQUNFLE1BQU4sQ0FBYUMsTUFBNUM7QUFDSCxLQUZEOztBQUdBTixJQUFBQSxNQUFNLENBQUNPLGFBQVAsQ0FBcUJULElBQXJCO0FBQ0gsR0FQRDtBQVFILENBaENBLENBQUQiLCJzb3VyY2VzQ29udGVudCI6WyIkKGZ1bmN0aW9uKCl7XG5cbiAgICBmdW5jdGlvbiB1cGRhdGVGb3JtKGFjdGlvbil7XG4gICAgICAgIGlmKGFjdGlvbiA9PSAnc2hvdycpe1xuICAgICAgICAgICAgJCgnI2VkaXRDb250YWluZXInKS5jc3MoXCJkaXNwbGF5XCIsIFwiZmxleFwiICk7XG4gICAgICAgICAgICAkKCcjc2NyZWVuLW92ZXJsYXknKS5zaG93KCk7XG4gICAgICAgICAgICAkKCdib2R5JykuY3NzKFwib3ZlcmZsb3dcIiwgXCJoaWRkZW5cIiApO1xuICAgICAgICB9XG4gICAgICAgIGlmKGFjdGlvbiA9PSAnaGlkZScpe1xuICAgICAgICAgICAgJCgnI2VkaXRDb250YWluZXInKS5oaWRlKCk7IFxuICAgICAgICAgICAgJCgnI3NjcmVlbi1vdmVybGF5JykuaGlkZSgpO1xuICAgICAgICAgICAgJCgnYm9keScpLmNzcyhcIm92ZXJmbG93XCIsIFwic2Nyb2xsXCIgKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgICQoXCIjdXBkYXRlQnRuXCIpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCl7XG4gICAgICAgIHVwZGF0ZUZvcm0oJ3Nob3cnKTtcbiAgICB9KVxuXG4gICAgJChcIiN1cGRhdGVGb3JtQ2FuY2VsXCIpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpe1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHVwZGF0ZUZvcm0oJ2hpZGUnKTtcbiAgICB9KVxuXG4gICAgJCgnI2F2YXRhcicpLm9uKCdjaGFuZ2UnLCBmdW5jdGlvbigpe1xuICAgICAgICBsZXQgZmlsZSA9IHRoaXMuZmlsZXNbMF07XG4gICAgICAgIGxldCByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xuICAgICAgICByZWFkZXIub25sb2FkID0gZnVuY3Rpb24oZXZlbnQpe1xuICAgICAgICAgICAgJCgnI2F2YXRhclByZXZpZXcnKS5hdHRyKFwic3JjXCIsZXZlbnQudGFyZ2V0LnJlc3VsdCk7XG4gICAgICAgIH07XG4gICAgICAgIHJlYWRlci5yZWFkQXNEYXRhVVJMKGZpbGUpO1xuICAgIH0pO1xufSkiXSwiZmlsZSI6Ii4vcmVzb3VyY2VzL2pzL2Rhc2hib2FyZC5qcy5qcyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./resources/js/dashboard.js\n");

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