"use strict";
(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 575:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6197);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_2__]);
framer_motion__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



function Laws() {
    const { 0: open , 1: setOpen  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const x = (0,framer_motion__WEBPACK_IMPORTED_MODULE_2__.useMotionValue)(0);
    const variants_laws = {
        open: {
            opacity: 1,
            y: 0,
            x: 0,
            transition: {
                duration: 1
            },
            height: "auto"
        },
        close: {
            opacity: 0,
            y: "-100%",
            x: "100%",
            transition: {
                duration: 2
            },
            height: 0
        }
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        id: "content",
        className: "content-center items-center mt-4",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {
                drag: true,
                dragConstraints: {
                    top: 0,
                    left: 0,
                    bottom: 0,
                    right: 0
                },
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.button, {
                    onClick: ()=>setOpen((open)=>!open),
                    whileHover: {
                        scale: 1.1
                    },
                    className: "block uppercase font-mono text-center my-2 mx-auto text-3xl lg:text-5xl md:text-4xl p-2 w-auto tracking-widest",
                    children: "T\xf6rv\xe9nyeink"
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {
                animate: open ? "open" : "close",
                initial: "close",
                variants: variants_laws,
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ol", {
                    id: "laws",
                    className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center transition-all duration-500 mb-4 p-3",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                            className: "first-letter:text-2xl text-center p-2 text-lg md:text-xl lg:text-2xl ",
                            children: [
                                "1. A cserk\xe9sz ",
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("strong", {
                                    children: "h\xedven teljes\xedti k\xf6teless\xe9geit "
                                }),
                                ", amelyekkel ",
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("strong", {
                                    children: " Istennek "
                                }),
                                ",",
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("strong", {
                                    children: "haz\xe1j\xe1nak"
                                }),
                                "  \xe9s ",
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("strong", {
                                    children: "embert\xe1rsainak"
                                }),
                                "  tartozik."
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                            className: "first-letter:text-2xl text-center p-2 text-lg md:text-xl lg:text-2xl ",
                            children: [
                                "2. A cserk\xe9sz,",
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("strong", {
                                    children: "ahol tud"
                                }),
                                " ,",
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("strong", {
                                    children: "seg\xedt."
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                            className: "first-letter:text-2xl text-center p-2 text-lg md:text-xl lg:text-2xl ",
                            children: [
                                "3. A cserk\xe9sz ",
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("strong", {
                                    children: " minden cserk\xe9szt testv\xe9r\xe9nek tekint."
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                            className: "first-letter:text-2xl text-center p-2 text-lg md:text-xl lg:text-2xl ",
                            children: [
                                "4. A cserk\xe9sz ",
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("strong", {
                                    children: " m\xe1sokkal szemben gyeng\xe9d"
                                }),
                                ",",
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("strong", {
                                    children: " mag\xe1val szemben szigor\xfa."
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                            className: "first-letter:text-2xl text-center p-2 text-lg md:text-xl lg:text-2xl ",
                            children: [
                                "5. A cserk\xe9sz ",
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("strong", {
                                    children: " egyeneslelk\u0171 "
                                }),
                                "\xe9s felt\xe9tlen\xfcl ",
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("strong", {
                                    children: " igazat "
                                }),
                                " mond."
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                            className: "first-letter:text-2xl text-center p-2 text-lg md:text-xl lg:text-2xl ",
                            children: [
                                "6. A cserk\xe9sz ",
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("strong", {
                                    children: "szereti a term\xe9szetet"
                                }),
                                ",",
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("strong", {
                                    children: " j\xf3 az \xe1llatokhoz"
                                }),
                                ", \xe9s ",
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("strong", {
                                    children: "k\xedm\xe9li a n\xf6v\xe9nyeket."
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                            className: "first-letter:text-2xl text-center p-2 text-lg md:text-xl lg:text-2xl ",
                            children: [
                                "7. A cserk\xe9sz feljebbval\xf3inak ",
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("strong", {
                                    children: "j\xf3 l\xe9lekkel"
                                }),
                                " \xe9s ",
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("strong", {
                                    children: "k\xe9szs\xe9gesen engedelmeskedik."
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                            className: "first-letter:text-2xl text-center p-2 text-lg md:text-xl lg:text-2xl ",
                            children: [
                                "8. A cserk\xe9sz ",
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("strong", {
                                    children: "vid\xe1m"
                                }),
                                " \xe9s ",
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("strong", {
                                    children: "meggondolt."
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                            className: "first-letter:text-2xl text-center p-2 text-lg md:text-xl lg:text-2xl ",
                            children: [
                                "9. A cserk\xe9sz ",
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("strong", {
                                    children: "takar\xe9kos."
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                            className: "text-center p-2 text-lg md:text-xl lg:text-2xl ",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    className: "text-2xl",
                                    children: "10"
                                }),
                                ". A cserk\xe9sz ",
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("strong", {
                                    children: "testben"
                                }),
                                " \xe9s ",
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("strong", {
                                    children: "l\xe9lekben tiszta."
                                })
                            ]
                        })
                    ]
                })
            })
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Laws);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5570:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6197);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_1__]);
framer_motion__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



function Mates() {
    const variants = {
        left: {
            opacity: 0,
            y: "-150%",
            x: "-150%",
            transition: {
                duration: 2,
                delayChildren: 2
            }
        },
        open: {
            opacity: 1,
            y: 0,
            x: 0,
            transition: {
                duration: 2
            }
        },
        right: {
            opacity: 0,
            y: "-150%",
            x: "150%",
            transition: {
                duration: 2,
                delayChildren: 2
            }
        }
    };
    const { 0: direction , 1: setDirection  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)("left");
    const { 0: sw , 1: setsw  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0);
    const x = (0,framer_motion__WEBPACK_IMPORTED_MODULE_1__.useMotionValue)(0);
    const background = (0,framer_motion__WEBPACK_IMPORTED_MODULE_1__.useTransform)(x, [
        -200,
        0,
        100
    ], [
        "hsl(133, 74.2%, 32%)",
        "#ffff",
        "hsl(4, 87.3%, 30.8%)"
    ]);
    function handleChange() {
        if (direction != "open") {
            setDirection("open");
        } else {
            if (sw == 0) {
                setsw(1);
                setDirection("right");
            } else {
                setsw(0);
                setDirection("left");
            }
        }
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "mb-24",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "flex w-4/5 mx-auto ",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_1__.motion.button, {
                    style: {
                        background
                    },
                    onClick: ()=>handleChange(),
                    className: "relative inline-block h-auto bg-transparent z-0 w-full mx-auto justify-content-center mt-32 border-2 border-black md:rounded-full rounded-3xl",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_1__.motion.span, {
                        drag: "x",
                        dragConstraints: {
                            left: 0,
                            right: 0
                        },
                        style: {
                            x
                        },
                        whileHover: {
                            scale: 1.1
                        },
                        whileTap: {
                            scale: 0.9
                        },
                        className: "relative inline-block text-lg lg:text-3xl font-bold uppercase w-full px-4 py-5 tracking-widest ",
                        children: "Csapatunk tagjai"
                    })
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_1__.motion.div, {
                animate: direction,
                initial: "left",
                variants: variants,
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_1__.motion.li, {
                    transition: direction == "left" || direction == "right" ? {
                        delay: 1
                    } : {
                        delay: 0.5
                    },
                    animate: direction == "left" || direction == "right" ? {
                        display: "none"
                    } : {
                        display: "block"
                    },
                    initial: "grid",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_1__.motion.div, {
                            className: "grid grid-cols-[repeat(auto-fit,_minmax(180px,1fr))] place-items-center gap-5 m-10",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "mb-auto hover:opacity-100 opacity-70 transition-all duration-200 w-full",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                            className: " sm:text-2xl text-xl font-bold text-center",
                                            children: "Vidra \u0151rs"
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                            className: "grid place-items-center gap-2",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                    className: "team_mate",
                                                    children: "Hang Benj\xe1min "
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                    className: "team_mate",
                                                    children: "Nyisztor \xc1lmos"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                    className: "team_mate",
                                                    children: "Merics Imre   "
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                    className: "team_mate",
                                                    children: "Bod\xf3 Bendeg\xfaz "
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                    className: "team_mate",
                                                    children: "Puxler M\xe1ty\xe1s "
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                    className: "team_mate",
                                                    children: "Kernya Szilveszter"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                    className: "team_mate",
                                                    children: "Bocz Botond  "
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                    className: "team_mate",
                                                    children: "Stolcz Norbi "
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                    className: "team_mate",
                                                    children: "Csimszi \xc1kos "
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "mb-auto hover:opacity-100 opacity-70 transition-all duration-200 w-full",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                            className: "sm:text-2xl text-xl font-bold text-center",
                                            children: "V\xf6r\xf6s r\xf3ka \u0151rs"
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                            className: "grid place-items-center gap-2",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                    className: "team_mate",
                                                    children: "\u0150v: Piffk\xf3 D\xe1niel "
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                    className: "team_mate",
                                                    children: "Friedrich \xc1kos    "
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                    className: "team_mate",
                                                    children: "Friedrich Gerg\u0151   "
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                    className: "team_mate",
                                                    children: "Siker Andr\xe1s      "
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                    className: "team_mate",
                                                    children: "Siker Mih\xe1ly      "
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "mb-auto hover:opacity-100 opacity-70 transition-all duration-200 w-full",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                            className: "sm:text-2xl text-xl font-bold text-center",
                                            children: "Tigris \u0151rs"
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                            className: "grid place-items-center gap-2",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                    className: "team_mate",
                                                    children: "D\xe1kai Botond "
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                    className: "team_mate",
                                                    children: "G\xe1bor D\xe1niel "
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                    className: "team_mate",
                                                    children: "Hajd\xfa Kolos  "
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                    className: "team_mate",
                                                    children: "Ka\xe1li-Nagy Kopp\xe1ny "
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                    className: "team_mate",
                                                    children: "Kozm\xe1ry Fl\xf3ri\xe1n"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                    className: "team_mate",
                                                    children: "Meretei Soma "
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                    className: "team_mate",
                                                    children: "Szolga Mil\xe1n "
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                    className: "team_mate",
                                                    children: "Torm\xe1si Csan\xe1d "
                                                })
                                            ]
                                        })
                                    ]
                                })
                            ]
                        }),
                        " ",
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "grid grid-cols-[repeat(auto-fit,_minmax(180px,1fr))] place-items-center gap-5 m-10",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "mb-auto hover:opacity-100 opacity-70 transition-all duration-200 w-full",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                            className: "sm:text-2xl text-xl font-bold text-center",
                                            children: "Piszt\xe1cia \u0151rs"
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                            className: "grid place-items-center gap-2",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                    className: "team_mate",
                                                    children: "Kozm\xe1ry Kamilla  "
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                    className: "team_mate",
                                                    children: "Nyisztor Zselyke "
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                    className: "team_mate",
                                                    children: "Ka\xe1li Nagy Vill\u0151 Janka"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                    className: "team_mate",
                                                    children: "Bergauer Dorina  "
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                    className: "team_mate",
                                                    children: "Feh\xe9r Rebeka "
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                    className: "team_mate",
                                                    children: "J\xe1nosi Em\u0151ke "
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                    className: "team_mate",
                                                    children: "Piffk\xf3 Julianna "
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "mb-auto hover:opacity-100 opacity-70 transition-all duration-200 w-full",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                            className: "sm:text-2xl text-xl font-bold text-center",
                                            children: "Gr\xe1n\xe1talma \u0151rs"
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                            className: "grid place-items-center gap-2",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                    className: "team_mate",
                                                    children: "\u0150v: J\xe1nosi Kincs\u0151    "
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                    className: "team_mate",
                                                    children: "Bod\xf3 Csenge M\xe1ria    "
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                    className: "team_mate",
                                                    children: "Puxler Fl\xf3ra         "
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                    className: "team_mate",
                                                    children: "Reinhardt J\xfalia       "
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                    className: "team_mate",
                                                    children: "Merics Orsolya Ilona "
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                    className: "team_mate",
                                                    children: "Siker Katinka Kincs\u0151 "
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                    className: "team_mate",
                                                    children: "Asztalos Alexandra   "
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                    className: "team_mate",
                                                    children: "Z\xe1voczky Eszter      "
                                                })
                                            ]
                                        })
                                    ]
                                })
                            ]
                        }),
                        " ",
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "grid grid-cols-[repeat(auto-fit,_minmax(180px,1fr))] place-items-center gap-5 m-10",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "mb-auto hover:opacity-100 opacity-70 transition-all duration-200 w-full",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                            className: "sm:text-2xl text-xl font-bold text-center",
                                            children: "Avok\xe1d\xf3 \u0151rs"
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                            className: "grid place-items-center gap-2",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                    className: "team_mate",
                                                    children: "\u0150v: Bergauer Dorina, J\xe1nosi Em\u0151ke "
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                    className: "team_mate",
                                                    children: "Bertus Kata "
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                    className: "team_mate",
                                                    children: "Bod\xf3 Lilla"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                    className: "team_mate",
                                                    children: "Bojtos Lili  "
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                    className: "team_mate",
                                                    children: "Mezei Csenge "
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                    className: "team_mate",
                                                    children: "Piffk\xf3 Annam\xe1ria"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                    className: "team_mate",
                                                    children: "P\xf6l\xf6te Rebeka   "
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                    className: "team_mate",
                                                    children: "Szil\xe1gyi Bor\xf3ka"
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "mb-auto hover:opacity-100 opacity-70 transition-all duration-200 w-full",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                            className: "sm:text-2xl text-xl font-bold text-center",
                                            children: "Tavir\xf3zsa \u0151rs"
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                            className: "grid place-items-center gap-2",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                    className: "team_mate",
                                                    children: "\u0150v: Nyisztor Zselyke "
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                    className: "team_mate",
                                                    children: "\xc1gotai Gr\xe9ta "
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                    className: "team_mate",
                                                    children: "Bod\xf3 Szederke"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                    className: "team_mate",
                                                    children: "G\xe1bor Kata  "
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                    className: "team_mate",
                                                    children: "Hajd\xfa Tekla "
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                    className: "team_mate",
                                                    children: "J\xe1nosi Zeng\u0151"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                    className: "team_mate",
                                                    children: "Kis-Vid\xe9ki B\xedborka   "
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                    className: "team_mate",
                                                    children: "Schumann R\xe9ka"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                    className: "team_mate",
                                                    children: "T\xf3th Zs\xf3fia"
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "mb-auto hover:opacity-100 opacity-70 transition-all duration-200 w-full",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                            className: "sm:text-2xl text-xl font-bold text-center",
                                            children: "Levendula \u0151rs"
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                            className: "grid place-items-center gap-2",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                    className: "team_mate",
                                                    children: "\u0150v: Feh\xe9r Rebeka"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                    className: "team_mate",
                                                    children: "Bizse Kincs\u0151"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                    className: "team_mate",
                                                    children: "Bod\xf3 Cinka"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                    className: "team_mate",
                                                    children: "Cs\xe9nyi Frida"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                    className: "team_mate",
                                                    children: "F\xe1bos Eszter"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                    className: "team_mate",
                                                    children: "Herner Borb\xe1la"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                    className: "team_mate",
                                                    children: "Hoffer Ida"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                    className: "team_mate",
                                                    children: "Ol\xe1h Emese"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                    className: "team_mate",
                                                    children: "Schell No\xe9mi"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                    className: "team_mate",
                                                    children: "Vasv\xe1ri Lilla"
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "mb-auto hover:opacity-100 opacity-70 transition-all duration-200 w-full",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                            className: "sm:text-2xl text-xl font-bold text-center",
                                            children: "Hi\xfaz \u0151rs"
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                            className: "grid place-items-center gap-2",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                    className: "team_mate",
                                                    children: "\u0150v: Merics Orsolya, Reinhardt J\xfalia"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                    className: "team_mate",
                                                    children: "Auth B\xe1lint"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                    className: "team_mate",
                                                    children: "Latsch\xe1m Botond"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                    className: "team_mate",
                                                    children: "Luzsi M\xe1ty\xe1s"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                    className: "team_mate",
                                                    children: "Neukirchner Andr\xe1s Noel"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                    className: "team_mate",
                                                    children: "Sz\u0151ts M\xe1rton Soma"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                    className: "team_mate",
                                                    children: "Tisztl Mil\xe1n"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                    className: "team_mate",
                                                    children: "Vasv\xe1ri Gyula"
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "mb-auto hover:opacity-100 opacity-70 transition-all duration-200 w-full",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                            className: "sm:text-2xl text-xl font-bold text-center",
                                            children: "Cs\xedkos sz\xf6cskeeg\xe9r \u0151rs"
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                            className: "grid place-items-center gap-2",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                    className: "team_mate",
                                                    children: "\u0150v: Merics Imre, Bod\xf3 Bendeg\xfaz   "
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                    className: "team_mate",
                                                    children: "Gyurasics J\xe1nos    "
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                    className: "team_mate",
                                                    children: "Gr\xfcnfeld Bence    "
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                    className: "team_mate",
                                                    children: "J\xe1nosi \xd6rs L\xe1szl\xf3 "
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                    className: "team_mate",
                                                    children: "Lieber Csongor    "
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                    className: "team_mate",
                                                    children: "Lieber Soma    "
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                    className: "team_mate",
                                                    children: "Nyisztor Csan\xe1d   "
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                    className: "team_mate",
                                                    children: "Osztert\xe1k Bal\xe1zs  "
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                    className: "team_mate",
                                                    children: "Oszter\xe1k Marcell  "
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                    className: "team_mate",
                                                    children: "Vicze Nimr\xf3d      "
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                    className: "team_mate",
                                                    children: "Bar\xe1ti Z\xe9n\xf3"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                    className: "team_mate",
                                                    children: "Bertus Benedek"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                    className: "team_mate",
                                                    children: "Bertus Botond"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                    className: "team_mate",
                                                    children: "Szigeti Botond"
                                                })
                                            ]
                                        })
                                    ]
                                })
                            ]
                        }),
                        "      "
                    ]
                })
            })
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Mates);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6641:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_future_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1608);
/* harmony import */ var next_future_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_future_image__WEBPACK_IMPORTED_MODULE_1__);


function About({ data  }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            role: "main",
            className: "inline-block",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "block mx-auto",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_future_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                        src: "https://viiudujcvsyrgxwatpxm.supabase.co/storage/v1/object/public/images/Nyakkendo_ACCpwPT98_Bg-1E9R_P.png",
                        width: "100vw",
                        height: "12vh",
                        className: "mx-auto w-full",
                        priority: true
                    })
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "w-full mx-auto text-justify items-center text-lg",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            className: "m-4 px-4",
                            children: " A 682. sz\xe1m\xfa V\xe1czi Jen\u0151 cserk\xe9sz csapat hivatalosan 2020. okt\xf3ber\xe9ben alakult meg Hossz\xfahet\xe9nyben. Val\xf3j\xe1ban viszont m\xe1r 2011 \xf3ta folyik cserk\xe9sz munka a faluban. Kezdetben a 673. sz. Pius \xe9s a 47. sz. Szent L\xe1szl\xf3 cserk\xe9sz csapat \u0151rsvezet\u0151i foglalkoztak a helyi gyerekekkel. Majd a 47-es csapat het\xe9nyi raj\xe1ba tartoztak a k\xe9s\u0151bbi csapat tagjai."
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            className: "m-4 px-4",
                            children: "Az alakul\xe1sakor csapatunk n\xe9vad\xf3j\xe1nak V\xe1cz Jen\u0151t v\xe1lasztottuk, aki egy jezsuita atya volt. Sok \xe9vet szolg\xe1lt P\xfcsp\xf6kszentl\xe1szl\xf3n, az \xc9letrendez\xe9s H\xe1z\xe1nak l\xe9trehoz\xe1sa az \u0151 nev\xe9hez f\u0171z\u0151dik. Csapatunkb\xf3l egy \xf6reg cserk\xe9sz ismerete az aty\xe1t szem\xe9lyesen. V\xe1czi Jen\u0151 olyan ember volt, akihez  k\xf6zel \xe1llt a J\xf3isten \xe9s az embert\xe1rsai is. Sz\xe1munkra p\xe9lda, az \u0151 k\xf6zben j\xe1r\xe1s\xe1t k\xe9rj\xfck a csapat\xe9rt \xe9s tagjai\xe9rt."
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            className: "m-4 px-4",
                            children: "A csapatsz\xe1mnak szint\xe9n fontos jelent\xe9se van sz\xe1munkra. A 682-es sz\xe1mot az\xe9rt v\xe1lasztottuk, mert ez megegyezik a falu k\xf6zel\xe9ben tal\xe1lhat\xf3 Zeng\u0151 hegy magass\xe1g\xe1val. Csapatunknak jelenleg k\xf6r\xfclbel\xfcl 80 akt\xedv tagja van. Els\u0151 oszt\xe1lyos gyerekekt\u0151l kezdve az egyetemist\xe1kig. Emellett sz\xe1mos helyi \xf6reg cserk\xe9sz is t\xe1mogat benn\xfcnket. A gyerekeknek az \u0151rsvezet\u0151k hetente tartanak foglalkoz\xe1sokat. Emellett \xe9vk\xf6zben sz\xe1mos programunk van: kir\xe1ndul\xe1sok, porty\xe1k, csapat kar\xe1csony, farsang, ny\xe1ron pedig nom\xe1d t\xe1bort tartunk."
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "grid xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-2 place-items-center w-auto mx-1",
                            children: data?.map((image)=>{
                                if (image?.tags.includes("Csapatunk ny\xe1rit\xe1bor\xe1ban")) return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_future_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                                    width: 450,
                                    height: 275,
                                    quality: 100,
                                    src: image.imageScr,
                                    title: image.tags,
                                    alt: image.tags,
                                    className: "rounded-lg m-6 w-full "
                                }, image.id);
                            })
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                            className: "m-4 px-4",
                            children: [
                                "Alapvet\u0151 \xe9rt\xe9keink a kereszt\xe9nys\xe9g, a hazaszeretet, term\xe9szet szeretet. A k\xf6z\xf6ss\xe9gben \xe9s a term\xe9szetben megtapasztalhatjuk a J\xf3isten ir\xe1ntunk val\xf3 szeretet\xe9t \xe9s az ebb\u0151l fakad\xf3 \xf6r\xf6met. Ezt szeretn\xe9nk megosztani a helyi gyerekekkel \xe9s fiatalokkal. Hiszen a cserk\xe9szet alap\xedt\xf3j\xe1nak, Bi-Pi-nek a szavaival \xe9lve: ",
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("strong", {
                                    children: ' "Hiszem, hogy Isten az\xe9rt helyezett benn\xfcnket ebbe a vil\xe1gba, hogy boldogok legy\xfcnk \xe9s \xf6r\xfclj\xfcnk az \xe9letnek." '
                                })
                            ]
                        })
                    ]
                })
            ]
        })
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (About);


/***/ }),

/***/ 5075:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_index_About__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6641);
/* harmony import */ var _utils_supabase__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4648);
/* harmony import */ var _components_Team_TeamMates__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5570);
/* harmony import */ var _components_Team_Laws__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(575);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_Team_TeamMates__WEBPACK_IMPORTED_MODULE_4__, _components_Team_Laws__WEBPACK_IMPORTED_MODULE_5__]);
([_components_Team_TeamMates__WEBPACK_IMPORTED_MODULE_4__, _components_Team_Laws__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);






async function getStaticProps() {
    const { data: data  } = await _utils_supabase__WEBPACK_IMPORTED_MODULE_3__/* ["default"].from */ .Z.from("Camp").select("*").order("id");
    return {
        props: {
            data
        }
    };
}
function Home({ data  }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                        children: "682 V\xe1cz Jen\u0151"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "viewport",
                        content: "width=device-width, initial-scale=1.0"
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_index_About__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                data: data
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Team_Laws__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Team_TeamMates__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {})
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4648:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _supabase_supabase_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2885);
/* harmony import */ var _supabase_supabase_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_supabase_supabase_js__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_supabase_supabase_js__WEBPACK_IMPORTED_MODULE_0__.createClient)("https://viiudujcvsyrgxwatpxm.supabase.co" || 0, "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZpaXVkdWpjdnN5cmd4d2F0cHhtIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NDkwMDIyNTYsImV4cCI6MTk2NDU3ODI1Nn0.yOWK_nzu2oPXaTlsh3ajoW1e_fkg3b6A-9MsbCVhKlY" || 0));


/***/ }),

/***/ 2885:
/***/ ((module) => {

module.exports = require("@supabase/supabase-js");

/***/ }),

/***/ 4957:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 6197:
/***/ ((module) => {

module.exports = import("framer-motion");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [608], () => (__webpack_exec__(5075)));
module.exports = __webpack_exports__;

})();