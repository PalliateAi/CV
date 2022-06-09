"use strict";
exports.id = 4716;
exports.ids = [4716];
exports.modules = {

/***/ 8636:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


class Split extends (react__WEBPACK_IMPORTED_MODULE_1___default().Component) {
    target = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().createRef();
    split = ()=>{
        if (this.target.current) {
            Splitting({
                target: this.target.current
            });
        }
    };
    componentDidMount = this.split;
    componentDidUpdate = this.split;
    render() {
        return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            ref: this.target,
            children: this.props.children
        }));
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Split);


/***/ }),

/***/ 2254:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Navbar_navbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5895);
/* harmony import */ var _components_Footer_footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3391);
/* harmony import */ var _layouts_Dark__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2532);
/* harmony import */ var _components_Freelancre_intro_freelancre_intro__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(463);
/* harmony import */ var _components_Works_style4_works_style4__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6054);
/* harmony import */ var _components_Full_testimonials_full_testimonials__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3825);
/* harmony import */ var _components_s_contact_form_s_contact_form__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(5781);
/* harmony import */ var _components_Clients_clients__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(5770);










const HomepageMain = ()=>{
    const navbarRef = react__WEBPACK_IMPORTED_MODULE_1___default().useRef(null);
    const logoRef = react__WEBPACK_IMPORTED_MODULE_1___default().useRef(null);
    react__WEBPACK_IMPORTED_MODULE_1___default().useEffect(()=>{
        var navbar = navbarRef.current;
        if (window.pageYOffset > 300) {
            navbar.classList.add("nav-scroll");
        } else {
            navbar.classList.remove("nav-scroll");
        }
        window.addEventListener("scroll", ()=>{
            if (window.pageYOffset > 300) {
                navbar.classList.add("nav-scroll");
            } else {
                navbar.classList.remove("nav-scroll");
            }
        });
    }, [
        navbarRef
    ]);
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_layouts_Dark__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Navbar_navbar__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                nr: navbarRef,
                lr: logoRef
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Freelancre_intro_freelancre_intro__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Works_style4_works_style4__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Footer_footer__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
            })
        ]
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HomepageMain);


/***/ })

};
;