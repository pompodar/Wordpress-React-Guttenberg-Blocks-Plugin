/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/blocks/my-new-block-course2/my-new-block-course2.js":
/*!*****************************************************************!*\
  !*** ./src/blocks/my-new-block-course2/my-new-block-course2.js ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);

const {
  registerBlockType
} = wp.blocks;
const {
  Component
} = wp.element;
const {
  RichText,
  InspectorControls,
  BlockControls,
  AlignmentToolbar
} = wp.blockEditor;
const {
  ToggleControl,
  PanelBody,
  PanelRow,
  CheckboxControl,
  SelectControl,
  ColorPicker,
  Toolbar,
  IconButton
} = wp.components;

class FirstBlockEdit extends Component {
  render() {
    const {
      attributes,
      setAttributes
    } = this.props;
    const alignmentClass = attributes.textAlignment != null ? "has-text-align-" + attributes.textAlignment : "";
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: alignmentClass
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(InspectorControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(PanelBody, {
      title: "Most awesome settings ever",
      initialOpen: true
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(ToggleControl, {
      label: "Toggle me",
      checked: attributes.toggle,
      onChange: newval => setAttributes({
        toggle: newval
      })
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(SelectControl, {
      label: "What's your favorite animal?",
      value: attributes.favoriteAnimal,
      options: [{
        label: "Dogs",
        value: "dogs"
      }, {
        label: "Cats",
        value: "cats"
      }, {
        label: "Something else",
        value: "weird_one"
      }],
      onChange: newval => setAttributes({
        favoriteAnimal: newval
      })
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(ColorPicker, {
      color: attributes.favoriteColor,
      onChangeComplete: newval => {
        setAttributes({
          favoriteColor: newval.hex
        });
      },
      disableAlpha: true
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(CheckboxControl, {
      label: "Activate lasers?",
      checked: attributes.activateLasers,
      onChange: newval => setAttributes({
        activateLasers: newval
      })
    })))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(BlockControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(AlignmentToolbar, {
      value: attributes.textAlignment,
      onChange: newalign => setAttributes({
        textAlignment: newalign
      })
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Toolbar, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(IconButton, {
      label: "My very own custom button",
      icon: "edit",
      className: "my-custom-button",
      onClick: () => console.log("pressed button")
    }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(RichText, {
      tagName: "h2",
      placeholder: "Write your heading here",
      value: attributes.myRichHeading,
      onChange: newtext => setAttributes({
        myRichHeading: newtext
      })
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(RichText, {
      tagName: "p",
      placeholder: "Write your paragraph here",
      value: attributes.myRichText,
      onChange: newtext => setAttributes({
        myRichText: newtext
      })
    }));
  }

}

registerBlockType("course-block/my-new-block-course2", {
  title: "my-new-block-course2",
  category: "common",
  icon: "smiley",
  description: "Learning in progress",
  keywords: ["my-new-block-course2"],
  attributes: {
    myRichHeading: {
      type: "string"
    },
    myRichText: {
      type: "string"
    },
    textAlignment: {
      type: "string"
    },
    toggle: {
      type: "boolean",
      default: true
    },
    favoriteAnimal: {
      type: "string",
      default: "dogs"
    },
    favoriteColor: {
      type: "string",
      default: "#DDDDDD"
    },
    activateLasers: {
      type: "boolean",
      default: false
    }
  },
  supports: {
    align: ["wide", "full"]
  },
  edit: FirstBlockEdit,
  save: props => {
    return null; // const { attributes } = props;
    // const alignmentClass =
    //     attributes.textAlignment != null
    //         ? "has-text-align-" + attributes.textAlignment
    //         : "";
    // return (
    //     <div className={alignmentClass}>
    //         <RichText.Content
    //             tagName="h2"
    //             value={attributes.myRichHeading}
    //         />
    //         <RichText.Content tagName="p" value={attributes.myRichText} />
    //         {attributes.activateLasers && (
    //             <div className="lasers">Lasers activated</div>
    //         )}
    //     </div>
    // );
  }
});

/***/ }),

/***/ "./src/blocks/my-new-block-course/my-new-block-course.js":
/*!***************************************************************!*\
  !*** ./src/blocks/my-new-block-course/my-new-block-course.js ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);


/**
 * BLOCK: react-lifecycle-block
 *
 * Registering a basic block with Gutenberg.
 * Simple block, renders and saves the same content without any interactivity.
 */
//  Import CSS.
// import "./style.scss";
// import "./editor.scss";
const {
  __
} = wp.i18n; // Import __() from wp.i18n

const {
  registerBlockType
} = wp.blocks; // Import registerBlockType() from wp.blocks

const {
  Component
} = wp.element; // Import the Component base class from the React.js abstraction

/**
 * Register: aa Gutenberg Block.
 *
 * Registers a new block provided a unique name and an object defining its
 * behavior. Once registered, the block is made editor as an option to any
 * editor interface where blocks are implemented.
 *
 * @link https://wordpress.org/gutenberg/handbook/block-api/
 * @param  {string}   name     Block name.
 * @param  {Object}   settings Block settings.
 * @return {?WPBlock}          The block, if it has been successfully
 *                             registered; otherwise `undefined`.
 */

registerBlockType("course-block/my-new-block-course", {
  // Block name. Block names must be string that contains a namespace prefix. Example: my-plugin/my-custom-block.
  title: __("new course block - CGB Block"),
  // Block title.
  icon: "shield",
  // Block icon from Dashicons → https://developer.wordpress.org/resource/dashicons/.
  category: "common",
  // Block category — Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.
  keywords: [__("new course block — CGB Block"), __("CGB Example"), __("create-guten-block")],
  attributes: {
    categories: {
      type: "object"
    },
    selectedCategory: {
      type: "string"
    }
  },

  /**
   * The edit function describes the structure of your block in the context of the editor.
   * This represents what the editor will render when the block is used.
   *
   * The "edit" property must be a valid function.
   *
   * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/
   */
  edit: props => {
    let cats = [];
    let selectedCat;
    wp.apiFetch({
      url: "/wp-json/wp/v2/categories"
    }).then(categories => {
      props.setAttributes({
        categories: categories
      });
    });

    if (props.attributes.categories) {
      cats = props.attributes.categories;
      selectedCat = props.attributes.selectedCategory;
    }

    console.log(props.attributes);

    function updateCategory(e) {
      props.setAttributes({
        selectedCategory: e.target.value
      });
    }

    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("select", {
      onChange: updateCategory,
      value: selectedCat
    }, cats.map(cat => {
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
        value: cat.id,
        key: cat.id
      }, cat.name);
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
      type: "text",
      placeholder: "n0"
    }));
  },

  /**
   * The save function defines the way in which the different attributes should be combined
   * into the final markup, which is then serialized by Gutenberg into post_content.
   *
   * The "save" property must be specified and must be a valid function.
   *
   * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/
   */
  save: function (props) {
    return null;
  }
});

/***/ }),

/***/ "./src/blocks/my-new-block-course2/my-new-block-course2.scss":
/*!*******************************************************************!*\
  !*** ./src/blocks/my-new-block-course2/my-new-block-course2.scss ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/blocks/my-new-block-course/my-new-block-course.scss":
/*!*****************************************************************!*\
  !*** ./src/blocks/my-new-block-course/my-new-block-course.scss ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ (function(module) {

module.exports = window["wp"]["element"];

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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _blocks_my_new_block_course_my_new_block_course_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./blocks/my-new-block-course/my-new-block-course.js */ "./src/blocks/my-new-block-course/my-new-block-course.js");
/* harmony import */ var _blocks_my_new_block_course_my_new_block_course_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./blocks/my-new-block-course/my-new-block-course.scss */ "./src/blocks/my-new-block-course/my-new-block-course.scss");
/* harmony import */ var _blocks_my_new_block_course2_my_new_block_course2_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./blocks/my-new-block-course2/my-new-block-course2.js */ "./src/blocks/my-new-block-course2/my-new-block-course2.js");
/* harmony import */ var _blocks_my_new_block_course2_my_new_block_course2_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./blocks/my-new-block-course2/my-new-block-course2.scss */ "./src/blocks/my-new-block-course2/my-new-block-course2.scss");




}();
/******/ })()
;
//# sourceMappingURL=index.js.map