/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("window.onload = function(){\r\n    // let oCan = document.getElementById(\"can\");\r\n    // let conText = oCan.getContext(\"2d\");\r\n    // conText.moveTo(0,0);\r\n    // conText.lineTo(100,100);\r\n    // conText.lineTo(100,300);\r\n    // conText.lineTo(300,400);\r\n    // conText.closePath();\r\n    // conText.stroke();\r\n    let oCan = document.getElementById(\"can\");\r\n    let oBtn = document.getElementById(\"btn\");\r\n    let con = oCan.getContext(\"2d\");\r\n    let w = oCan.width,h = oCan.height;\r\n    con.lineCap=\"round\";//square\r\n    con.lineWidth=30;\r\n    con.strokeStyle=\"red\";\r\n    con.fillStyle=\"pink\";\r\n    con.beginPath();\r\n    con.arc(150,150,50,0,30*2*Math.PI/180,false);\r\n    con.rect(300,300,100,200);\r\n    con.moveTo(50,50);\r\n    con.lineTo(100,100);\r\n    //con.fill()\r\n    con.stroke();\r\n    oBtn.onclick = function(){\r\n        con.clearRect(0,0,w,h);\r\n\r\n        let x = Math.random()*500;\r\n        let y = Math.random()*500;\r\n        con.strokeStyle =\"red\";\r\n        con.lineWidth=15;\r\n        con.lineJoin=\"bevel\";//round\r\n        con.beginPath();\r\n        con.moveTo(x,y);\r\n        con.lineTo(x,Math.cos(Math.random()*Math.PI)*100);\r\n        con.lineTo(Math.sin(Math.random()*Math.PI)*100,y)\r\n        //con.lineTo(x,y);\r\n        con.closePath();\r\n        con.stroke();\r\n\r\n    }\r\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYXBwLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC5qcz8xMTEyIl0sInNvdXJjZXNDb250ZW50IjpbIndpbmRvdy5vbmxvYWQgPSBmdW5jdGlvbigpe1xyXG4gICAgLy8gbGV0IG9DYW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNhblwiKTtcclxuICAgIC8vIGxldCBjb25UZXh0ID0gb0Nhbi5nZXRDb250ZXh0KFwiMmRcIik7XHJcbiAgICAvLyBjb25UZXh0Lm1vdmVUbygwLDApO1xyXG4gICAgLy8gY29uVGV4dC5saW5lVG8oMTAwLDEwMCk7XHJcbiAgICAvLyBjb25UZXh0LmxpbmVUbygxMDAsMzAwKTtcclxuICAgIC8vIGNvblRleHQubGluZVRvKDMwMCw0MDApO1xyXG4gICAgLy8gY29uVGV4dC5jbG9zZVBhdGgoKTtcclxuICAgIC8vIGNvblRleHQuc3Ryb2tlKCk7XHJcbiAgICBsZXQgb0NhbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2FuXCIpO1xyXG4gICAgbGV0IG9CdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJ0blwiKTtcclxuICAgIGxldCBjb24gPSBvQ2FuLmdldENvbnRleHQoXCIyZFwiKTtcclxuICAgIGxldCB3ID0gb0Nhbi53aWR0aCxoID0gb0Nhbi5oZWlnaHQ7XHJcbiAgICBjb24ubGluZUNhcD1cInJvdW5kXCI7Ly9zcXVhcmVcclxuICAgIGNvbi5saW5lV2lkdGg9MzA7XHJcbiAgICBjb24uc3Ryb2tlU3R5bGU9XCJyZWRcIjtcclxuICAgIGNvbi5maWxsU3R5bGU9XCJwaW5rXCI7XHJcbiAgICBjb24uYmVnaW5QYXRoKCk7XHJcbiAgICBjb24uYXJjKDE1MCwxNTAsNTAsMCwzMCoyKk1hdGguUEkvMTgwLGZhbHNlKTtcclxuICAgIGNvbi5yZWN0KDMwMCwzMDAsMTAwLDIwMCk7XHJcbiAgICBjb24ubW92ZVRvKDUwLDUwKTtcclxuICAgIGNvbi5saW5lVG8oMTAwLDEwMCk7XHJcbiAgICAvL2Nvbi5maWxsKClcclxuICAgIGNvbi5zdHJva2UoKTtcclxuICAgIG9CdG4ub25jbGljayA9IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgY29uLmNsZWFyUmVjdCgwLDAsdyxoKTtcclxuXHJcbiAgICAgICAgbGV0IHggPSBNYXRoLnJhbmRvbSgpKjUwMDtcclxuICAgICAgICBsZXQgeSA9IE1hdGgucmFuZG9tKCkqNTAwO1xyXG4gICAgICAgIGNvbi5zdHJva2VTdHlsZSA9XCJyZWRcIjtcclxuICAgICAgICBjb24ubGluZVdpZHRoPTE1O1xyXG4gICAgICAgIGNvbi5saW5lSm9pbj1cImJldmVsXCI7Ly9yb3VuZFxyXG4gICAgICAgIGNvbi5iZWdpblBhdGgoKTtcclxuICAgICAgICBjb24ubW92ZVRvKHgseSk7XHJcbiAgICAgICAgY29uLmxpbmVUbyh4LE1hdGguY29zKE1hdGgucmFuZG9tKCkqTWF0aC5QSSkqMTAwKTtcclxuICAgICAgICBjb24ubGluZVRvKE1hdGguc2luKE1hdGgucmFuZG9tKCkqTWF0aC5QSSkqMTAwLHkpXHJcbiAgICAgICAgLy9jb24ubGluZVRvKHgseSk7XHJcbiAgICAgICAgY29uLmNsb3NlUGF0aCgpO1xyXG4gICAgICAgIGNvbi5zdHJva2UoKTtcclxuXHJcbiAgICB9XHJcbn0iXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/app.js\n");

/***/ })

/******/ });