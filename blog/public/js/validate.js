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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 8);
/******/ })
/************************************************************************/
/******/ ({

/***/ 8:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(9);


/***/ }),

/***/ 9:
/***/ (function(module, exports) {

function checkEmail(e) {
  var element = e.target;
  if (/[^a-zA-Z0-9@._]/.test(element.value)) {
    alert("Email is invalid! Only characters a-z A-Z 0-9 @ . _ are allowed.");
    element.value = "";
    return false;
  }
  if (/[^a-zA-Z]/.test(element.value)) {
    alert("Email is invalid!  a-z A-Z characters are must.");
    element.value = "";
    return false;
  }
  if (!/[@]/.test(element.value)) {
    alert("Email is invalid!You are missing @");
    element.value = "";
    return false;
  }
  if (/[.]/.test(element.value)) {
    alert("Email is invalid!.domain name is missing");

    var element = e.target;
    if (/[^a-zA-Z0-9@._]/.test(element.value)) {
      alert("Email is invalid!Only character a-z A-z 0-9 @ . _ are allowed.");
      element.value = "";
      return false;
    }
    if (!/[a-z A-Z]/.test(element.value)) {
      alert("Email is invalid!Character a-z A-z are must.");
      element.value = "";
      return false;
    }
    if (!/[@]/.test(element.value)) {
      alert("Email is invalid!You are missing @.");
      element.value = "";
      return false;
    }
    if (!/[.]/.test(element.value)) {
      alert("Email is invalid!. domain name is missing.");

      element.value = "";
      return false;
    }
    return true;
  }

  function checkSubject(e) {
    var element = e.target;
    if (/[^a-zA-Z]/.test(element.value)) {
      alert("Invalid Subject.Use only a-z or A-Z");
      element.value = "";
      return false;
    }
    return true;
  }
  function submitForm(e) {
    if (document.getElementById('user-email').value != "" && document.getElementById('message').value != "") {
      var contact = document.getElementByClassName('contact-form');
      contact[0].innerHTML = "<h3>Thank You for feedback,I,ll get you shortly</h3>";
    }
  }

  if (/[^a-zA-Z]/.test(element.value)) {
    alert("Invalid Subject.Use only a-z or A-z");
    element.value = "";
    return false;
  }
}

function submitForm(e) {
  if (document.getElementById('user-email').value != "" && document.getElementById('subject').value != "" && document.getElementById('message').value != "") {
    var contact = document.getElementById('contacts');
    contact.innerHTML = "<h3>Thank you for feedback.I'LL get to you shortly<h3>";
  }
}

var email = document.getElementById('user-email');
email.addEventListener('blur', checkEmail, false);

var subject = document.getElementById('subject');
subject.addEventListener('blur', checkSubject, false);

var submit = document.getElementById('submit-btn');
submit.addEventListener('blur', submitForm, false);

var submit = document.getElementById('submit-btn');
submit.addEventListener('click', submitForm, false);

/***/ })

/******/ });