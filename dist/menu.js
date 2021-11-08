/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/auth */ \"./src/modules/auth.js\");\n/* harmony import */ var _modules_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/menu */ \"./src/modules/menu.js\");\n\r\n\r\n\r\n(0,_modules_auth__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n(0,_modules_menu__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbWVudS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7QUFBa0M7QUFDQTtBQUNsQztBQUNBLHlEQUFJO0FBQ0oseURBQUkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pbnRlbnNpdi8uL3NyYy9tZW51LmpzP2FiMDgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF1dGggZnJvbSBcIi4vbW9kdWxlcy9hdXRoXCI7XHJcbmltcG9ydCBtZW51IGZyb20gXCIuL21vZHVsZXMvbWVudVwiO1xyXG5cclxuYXV0aCgpO1xyXG5tZW51KCk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/menu.js\n");

/***/ }),

/***/ "./src/modules/auth.js":
/*!*****************************!*\
  !*** ./src/modules/auth.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst auth = () => {\r\n    const buttonAuth = document.querySelector('.button-auth')\r\n    const modalAuth = document.querySelector('.modal-auth')\r\n    const buttonOut = document.querySelector('.button-out')\r\n    const userName = document.querySelector('.user-name')\r\n    const closeAuth = document.querySelector('.close-auth')\r\n    const logInForm = document.getElementById('logInForm')\r\n    const inputLogin = document.getElementById('login')\r\n    const inputPassword = document.getElementById('password')\r\n    const buttonCart = document.querySelector('.button-cart')\r\n\r\n    const login = (user) => {\r\n        buttonAuth.style.display = 'none';\r\n        buttonOut.style.display = 'flex';\r\n        userName.style.display = 'flex';\r\n        buttonCart.style.display = 'flex';\r\n\r\n        userName.textContent = user.login;\r\n        modalAuth.style.display = 'none'\r\n    }\r\n\r\n    const logout = () => {\r\n        buttonAuth.style.display = 'flex';\r\n\r\n        buttonOut.style.display = 'none';\r\n        userName.style.display = 'none';\r\n        userName.textContent = '';\r\n        buttonCart.style.display = 'none';\r\n\r\n        localStorage.removeItem('user')\r\n    }\r\n\r\n    buttonAuth.addEventListener('click', () => {\r\n        modalAuth.style.display = 'flex'\r\n    })\r\n\r\n    closeAuth.addEventListener('click', () => {\r\n        modalAuth.style.display = 'none'\r\n    })\r\n\r\n    logInForm.addEventListener('submit', (event) => {\r\n        event.preventDefault();\r\n        if (!inputLogin.value || !inputLogin.value.trim()) {\r\n            alert(Error('Write login'));\r\n        } else {\r\n            const user = {\r\n                login: inputLogin.value,\r\n                password: inputPassword.value\r\n            }\r\n            localStorage.setItem('user', JSON.stringify(user))\r\n            login(user);\r\n        }\r\n    })\r\n\r\n    buttonOut.addEventListener('click', () => {\r\n        logout();\r\n    })\r\n\r\n    if (localStorage.getItem('user')) {\r\n        login(JSON.parse(localStorage.getItem('user')));\r\n    }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (auth);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbW9kdWxlcy9hdXRoLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBQWUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pbnRlbnNpdi8uL3NyYy9tb2R1bGVzL2F1dGguanM/ZTdiMSJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBhdXRoID0gKCkgPT4ge1xyXG4gICAgY29uc3QgYnV0dG9uQXV0aCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idXR0b24tYXV0aCcpXHJcbiAgICBjb25zdCBtb2RhbEF1dGggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwtYXV0aCcpXHJcbiAgICBjb25zdCBidXR0b25PdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnV0dG9uLW91dCcpXHJcbiAgICBjb25zdCB1c2VyTmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy51c2VyLW5hbWUnKVxyXG4gICAgY29uc3QgY2xvc2VBdXRoID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNsb3NlLWF1dGgnKVxyXG4gICAgY29uc3QgbG9nSW5Gb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xvZ0luRm9ybScpXHJcbiAgICBjb25zdCBpbnB1dExvZ2luID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xvZ2luJylcclxuICAgIGNvbnN0IGlucHV0UGFzc3dvcmQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGFzc3dvcmQnKVxyXG4gICAgY29uc3QgYnV0dG9uQ2FydCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idXR0b24tY2FydCcpXHJcblxyXG4gICAgY29uc3QgbG9naW4gPSAodXNlcikgPT4ge1xyXG4gICAgICAgIGJ1dHRvbkF1dGguc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgICBidXR0b25PdXQuc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcclxuICAgICAgICB1c2VyTmFtZS5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xyXG4gICAgICAgIGJ1dHRvbkNhcnQuc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcclxuXHJcbiAgICAgICAgdXNlck5hbWUudGV4dENvbnRlbnQgPSB1c2VyLmxvZ2luO1xyXG4gICAgICAgIG1vZGFsQXV0aC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgbG9nb3V0ID0gKCkgPT4ge1xyXG4gICAgICAgIGJ1dHRvbkF1dGguc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcclxuXHJcbiAgICAgICAgYnV0dG9uT3V0LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgICAgdXNlck5hbWUuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgICB1c2VyTmFtZS50ZXh0Q29udGVudCA9ICcnO1xyXG4gICAgICAgIGJ1dHRvbkNhcnQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuXHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ3VzZXInKVxyXG4gICAgfVxyXG5cclxuICAgIGJ1dHRvbkF1dGguYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgbW9kYWxBdXRoLnN0eWxlLmRpc3BsYXkgPSAnZmxleCdcclxuICAgIH0pXHJcblxyXG4gICAgY2xvc2VBdXRoLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgIG1vZGFsQXV0aC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXHJcbiAgICB9KVxyXG5cclxuICAgIGxvZ0luRm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZXZlbnQpID0+IHtcclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGlmICghaW5wdXRMb2dpbi52YWx1ZSB8fCAhaW5wdXRMb2dpbi52YWx1ZS50cmltKCkpIHtcclxuICAgICAgICAgICAgYWxlcnQoRXJyb3IoJ1dyaXRlIGxvZ2luJykpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHVzZXIgPSB7XHJcbiAgICAgICAgICAgICAgICBsb2dpbjogaW5wdXRMb2dpbi52YWx1ZSxcclxuICAgICAgICAgICAgICAgIHBhc3N3b3JkOiBpbnB1dFBhc3N3b3JkLnZhbHVlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3VzZXInLCBKU09OLnN0cmluZ2lmeSh1c2VyKSlcclxuICAgICAgICAgICAgbG9naW4odXNlcik7XHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxuXHJcbiAgICBidXR0b25PdXQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgbG9nb3V0KCk7XHJcbiAgICB9KVxyXG5cclxuICAgIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndXNlcicpKSB7XHJcbiAgICAgICAgbG9naW4oSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndXNlcicpKSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGF1dGgiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/modules/auth.js\n");

/***/ }),

/***/ "./src/modules/menu.js":
/*!*****************************!*\
  !*** ./src/modules/menu.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst menu = () => {\r\n\r\n\tconst cardsMenu = document.querySelector('.cards-menu')\r\n\r\n\tconst cartArray = localStorage.getItem('cart') ?\r\n\t\tJSON.parse(localStorage.getItem('cart')) : [];\r\n\r\n\tconst changeTitle = (restaurant) => {\r\n\t\tconst restaurantTitle = document.querySelector('.restaurant-title');\r\n\t\tconst rating = document.querySelector('.rating')\r\n\t\tconst price = document.querySelector('.price')\r\n\t\tconst category = document.querySelector(\".category\")\r\n\t\trestaurantTitle.textContent = restaurant.name;\r\n\t\trating.textContent = restaurant.stars\r\n\t\tprice.textContent = restaurant.price\r\n\t\tcategory.textContent = restaurant.category\r\n\t}\r\n\r\n\tconst addToCart = (cartItem) => {\r\n\t\tif (cartArray.some((item) => item.id === cartItem.id)) {\r\n\t\t\tcartArray.map((item => {\r\n\t\t\t\tif (item.id === cartItem.id) {\r\n\t\t\t\t\titem.count++\r\n\t\t\t\t}\r\n\t\t\t\treturn item\r\n\t\t\t}))\r\n\t\t} else {\r\n\t\t\tcartArray.push(cartItem);\r\n\t\t}\r\n\r\n\t\tlocalStorage.setItem('cart', JSON.stringify(cartArray))\r\n\t}\r\n\r\n\tconst renderItems = (data) => {\r\n\t\tdata.forEach(({ description, id, image, name, price }) => {\r\n\t\t\tconst card = document.createElement('div');\r\n\r\n\t\t\tcard.classList.add('card')\r\n\t\t\tcard.innerHTML = `\r\n            <img src=\" ${image}\" alt=\"  ${name}\" class=\"card-image\" />\r\n\t\t\t\t\t\t<div class=\"card-text\">\r\n\t\t\t\t\t\t\t<div class=\"card-heading\">\r\n\t\t\t\t\t\t\t\t<h3 class=\"card-title card-title-reg\">${name}</h3>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<!-- /.card-heading -->\r\n\t\t\t\t\t\t\t<div class=\"card-info\">\r\n\t\t\t\t\t\t\t\t<div class=\"ingredients\">\r\n                                ${description}\r\n                                \r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<!-- /.card-info -->\r\n\t\t\t\t\t\t\t<div class=\"card-buttons\">\r\n\t\t\t\t\t\t\t\t<button class=\"button button-primary button-add-cart\">\r\n\t\t\t\t\t\t\t\t\t<span class=\"button-card-text\">В корзину</span>\r\n\t\t\t\t\t\t\t\t\t<span class=\"button-cart-svg\"></span>\r\n\t\t\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t\t\t<strong class=\"card-price-bold\">${price}</strong>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n    `\r\n\t\t\tcard.querySelector('.button-card-text').addEventListener('click', () => {\r\n\t\t\t\taddToCart({ name, price, id, cout: 1 })\r\n\t\t\t})\r\n\r\n\t\t\tcardsMenu.append(card)\r\n\t\t});\r\n\t}\r\n\tif (localStorage.getItem('restaurants')) {\r\n\t\tif (localStorage.getItem('user')) {\r\n\t\t\tconst restaurant = JSON.parse(localStorage.getItem('restaurants'));\r\n\t\t\tchangeTitle(restaurant);\r\n\t\t\tconsole.log(restaurant);\r\n\t\t\tfetch(`./db/${restaurant.products}`)\r\n\t\t\t\t.then((response) => response.json())\r\n\t\t\t\t.then((data) => {\r\n\t\t\t\t\trenderItems(data)\r\n\t\t\t\t})\r\n\t\t\t\t.catch((error) => {\r\n\t\t\t\t\tconsole.log(error);\r\n\t\t\t\t})\r\n\t\t} else {\r\n\t\t\talert(\"Вы должны быть зарегестрированы\");\r\n\t\t\twindow.location.href = '/'\r\n\r\n\r\n\r\n\t\t}\r\n\t} else {\r\n\t\twindow.location.href = '/'\r\n\t}\r\n\r\n}\r\n\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menu);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbW9kdWxlcy9tZW51LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSixJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IscUNBQXFDO0FBQ3ZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLE1BQU0sV0FBVyxLQUFLO0FBQy9DO0FBQ0E7QUFDQSxnREFBZ0QsS0FBSztBQUNyRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQztBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQ0FBMEMsTUFBTTtBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQiwwQkFBMEI7QUFDMUMsSUFBSTtBQUNKO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLG9CQUFvQjtBQUNyQztBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTCxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFlIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaW50ZW5zaXYvLi9zcmMvbW9kdWxlcy9tZW51LmpzPzJmYWQiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgbWVudSA9ICgpID0+IHtcclxuXHJcblx0Y29uc3QgY2FyZHNNZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhcmRzLW1lbnUnKVxyXG5cclxuXHRjb25zdCBjYXJ0QXJyYXkgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnY2FydCcpID9cclxuXHRcdEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2NhcnQnKSkgOiBbXTtcclxuXHJcblx0Y29uc3QgY2hhbmdlVGl0bGUgPSAocmVzdGF1cmFudCkgPT4ge1xyXG5cdFx0Y29uc3QgcmVzdGF1cmFudFRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJlc3RhdXJhbnQtdGl0bGUnKTtcclxuXHRcdGNvbnN0IHJhdGluZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yYXRpbmcnKVxyXG5cdFx0Y29uc3QgcHJpY2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJpY2UnKVxyXG5cdFx0Y29uc3QgY2F0ZWdvcnkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNhdGVnb3J5XCIpXHJcblx0XHRyZXN0YXVyYW50VGl0bGUudGV4dENvbnRlbnQgPSByZXN0YXVyYW50Lm5hbWU7XHJcblx0XHRyYXRpbmcudGV4dENvbnRlbnQgPSByZXN0YXVyYW50LnN0YXJzXHJcblx0XHRwcmljZS50ZXh0Q29udGVudCA9IHJlc3RhdXJhbnQucHJpY2VcclxuXHRcdGNhdGVnb3J5LnRleHRDb250ZW50ID0gcmVzdGF1cmFudC5jYXRlZ29yeVxyXG5cdH1cclxuXHJcblx0Y29uc3QgYWRkVG9DYXJ0ID0gKGNhcnRJdGVtKSA9PiB7XHJcblx0XHRpZiAoY2FydEFycmF5LnNvbWUoKGl0ZW0pID0+IGl0ZW0uaWQgPT09IGNhcnRJdGVtLmlkKSkge1xyXG5cdFx0XHRjYXJ0QXJyYXkubWFwKChpdGVtID0+IHtcclxuXHRcdFx0XHRpZiAoaXRlbS5pZCA9PT0gY2FydEl0ZW0uaWQpIHtcclxuXHRcdFx0XHRcdGl0ZW0uY291bnQrK1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRyZXR1cm4gaXRlbVxyXG5cdFx0XHR9KSlcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdGNhcnRBcnJheS5wdXNoKGNhcnRJdGVtKTtcclxuXHRcdH1cclxuXHJcblx0XHRsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnY2FydCcsIEpTT04uc3RyaW5naWZ5KGNhcnRBcnJheSkpXHJcblx0fVxyXG5cclxuXHRjb25zdCByZW5kZXJJdGVtcyA9IChkYXRhKSA9PiB7XHJcblx0XHRkYXRhLmZvckVhY2goKHsgZGVzY3JpcHRpb24sIGlkLCBpbWFnZSwgbmFtZSwgcHJpY2UgfSkgPT4ge1xyXG5cdFx0XHRjb25zdCBjYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcblxyXG5cdFx0XHRjYXJkLmNsYXNzTGlzdC5hZGQoJ2NhcmQnKVxyXG5cdFx0XHRjYXJkLmlubmVySFRNTCA9IGBcclxuICAgICAgICAgICAgPGltZyBzcmM9XCIgJHtpbWFnZX1cIiBhbHQ9XCIgICR7bmFtZX1cIiBjbGFzcz1cImNhcmQtaW1hZ2VcIiAvPlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiY2FyZC10ZXh0XCI+XHJcblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cImNhcmQtaGVhZGluZ1wiPlxyXG5cdFx0XHRcdFx0XHRcdFx0PGgzIGNsYXNzPVwiY2FyZC10aXRsZSBjYXJkLXRpdGxlLXJlZ1wiPiR7bmFtZX08L2gzPlxyXG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdDwhLS0gLy5jYXJkLWhlYWRpbmcgLS0+XHJcblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cImNhcmQtaW5mb1wiPlxyXG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cImluZ3JlZGllbnRzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJHtkZXNjcmlwdGlvbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdDwhLS0gLy5jYXJkLWluZm8gLS0+XHJcblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cImNhcmQtYnV0dG9uc1wiPlxyXG5cdFx0XHRcdFx0XHRcdFx0PGJ1dHRvbiBjbGFzcz1cImJ1dHRvbiBidXR0b24tcHJpbWFyeSBidXR0b24tYWRkLWNhcnRcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3M9XCJidXR0b24tY2FyZC10ZXh0XCI+0JIg0LrQvtGA0LfQuNC90YM8L3NwYW4+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzPVwiYnV0dG9uLWNhcnQtc3ZnXCI+PC9zcGFuPlxyXG5cdFx0XHRcdFx0XHRcdFx0PC9idXR0b24+XHJcblx0XHRcdFx0XHRcdFx0XHQ8c3Ryb25nIGNsYXNzPVwiY2FyZC1wcmljZS1ib2xkXCI+JHtwcmljZX08L3N0cm9uZz5cclxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcbiAgICBgXHJcblx0XHRcdGNhcmQucXVlcnlTZWxlY3RvcignLmJ1dHRvbi1jYXJkLXRleHQnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuXHRcdFx0XHRhZGRUb0NhcnQoeyBuYW1lLCBwcmljZSwgaWQsIGNvdXQ6IDEgfSlcclxuXHRcdFx0fSlcclxuXHJcblx0XHRcdGNhcmRzTWVudS5hcHBlbmQoY2FyZClcclxuXHRcdH0pO1xyXG5cdH1cclxuXHRpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Jlc3RhdXJhbnRzJykpIHtcclxuXHRcdGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndXNlcicpKSB7XHJcblx0XHRcdGNvbnN0IHJlc3RhdXJhbnQgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdyZXN0YXVyYW50cycpKTtcclxuXHRcdFx0Y2hhbmdlVGl0bGUocmVzdGF1cmFudCk7XHJcblx0XHRcdGNvbnNvbGUubG9nKHJlc3RhdXJhbnQpO1xyXG5cdFx0XHRmZXRjaChgLi9kYi8ke3Jlc3RhdXJhbnQucHJvZHVjdHN9YClcclxuXHRcdFx0XHQudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSlcclxuXHRcdFx0XHQudGhlbigoZGF0YSkgPT4ge1xyXG5cdFx0XHRcdFx0cmVuZGVySXRlbXMoZGF0YSlcclxuXHRcdFx0XHR9KVxyXG5cdFx0XHRcdC5jYXRjaCgoZXJyb3IpID0+IHtcclxuXHRcdFx0XHRcdGNvbnNvbGUubG9nKGVycm9yKTtcclxuXHRcdFx0XHR9KVxyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0YWxlcnQoXCLQktGLINC00L7Qu9C20L3RiyDQsdGL0YLRjCDQt9Cw0YDQtdCz0LXRgdGC0YDQuNGA0L7QstCw0L3Ri1wiKTtcclxuXHRcdFx0d2luZG93LmxvY2F0aW9uLmhyZWYgPSAnLydcclxuXHJcblxyXG5cclxuXHRcdH1cclxuXHR9IGVsc2Uge1xyXG5cdFx0d2luZG93LmxvY2F0aW9uLmhyZWYgPSAnLydcclxuXHR9XHJcblxyXG59XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgbWVudSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/modules/menu.js\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/menu.js");
/******/ 	
/******/ })()
;