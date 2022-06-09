"use strict";
exports.id = 5770;
exports.ids = [5770];
exports.modules = {

/***/ 5770:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _data_sections_clients_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8004);
/* harmony import */ var _Split__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8636);

/* eslint-disable @next/next/no-img-element */ 


const Clients = ({ theme  })=>{
    var first = _data_sections_clients_json__WEBPACK_IMPORTED_MODULE_2__.slice(0, _data_sections_clients_json__WEBPACK_IMPORTED_MODULE_2__.length / 2);
    var second = _data_sections_clients_json__WEBPACK_IMPORTED_MODULE_2__.slice(4, _data_sections_clients_json__WEBPACK_IMPORTED_MODULE_2__.length);
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
        className: "clients section-padding",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "container",
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "row",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "col-lg-4 valign md-mb50",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "sec-head mb-0",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h6", {
                                    className: "wow fadeIn",
                                    "data-wow-delay": ".5s",
                                    children: "Best Features"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                    className: "wow mb-20 color-font",
                                    children: "My Skills"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    children: "Tools, methodologies, software and frameworks"
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "col-lg-8",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "row bord",
                                    children: first.map((item)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "col-md-3 col-6 brands",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "item wow fadeIn",
                                                "data-wow-delay": `${item.id == 1 ? ".3" : item.id == 2 ? ".6" : item.id == 3 ? ".8" : item.id == 4 ? ".3" : ""}s`,
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "img",
                                                    children: [
                                                        theme === "light" ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                            src: item.lightImage,
                                                            alt: ""
                                                        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                            src: item.darkImage,
                                                            alt: ""
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Split__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                href: "#0",
                                                                className: "link words chars splitting",
                                                                "data-splitting": true,
                                                                children: item.url
                                                            })
                                                        })
                                                    ]
                                                })
                                            })
                                        }, item.id)
                                    )
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "row",
                                    children: second.map((item)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: `${item.id == 5 ? "col-md-3 col-6 brands sm-mb30" : item.id == 6 ? "col-md-3 col-6 brands sm-mb30" : item.id == 7 ? "col-md-3 col-6 brands" : item.id == 8 ? "col-md-3 col-6 brands" : ""}`,
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "item wow fadeIn",
                                                "data-wow-delay": `${item.id == 1 ? ".4" : item.id == 2 ? ".7" : item.id == 3 ? ".5" : item.id == 4 ? ".3" : ""}s`,
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "img",
                                                    children: [
                                                        theme === "light" ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                            src: item.lightImage,
                                                            alt: ""
                                                        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                            src: item.darkImage,
                                                            alt: ""
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Split__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                href: "#0",
                                                                className: "link words chars splitting",
                                                                "data-splitting": true,
                                                                children: item.url
                                                            })
                                                        })
                                                    ]
                                                })
                                            })
                                        }, item.id)
                                    )
                                })
                            ]
                        })
                    })
                ]
            })
        })
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Clients);


/***/ })

};
;