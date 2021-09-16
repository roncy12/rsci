(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[14],{

/***/ "./assets/js/theme/search.js":
/*!***********************************!*\
  !*** ./assets/js/theme/search.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Search; });
/* harmony import */ var _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @bigcommerce/stencil-utils */ "./node_modules/@bigcommerce/stencil-utils/src/main.js");
/* harmony import */ var _catalog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./catalog */ "./assets/js/theme/catalog.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _common_faceted_search__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./common/faceted-search */ "./assets/js/theme/common/faceted-search.js");
/* harmony import */ var _global_compare_products__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./global/compare-products */ "./assets/js/theme/global/compare-products.js");
/* harmony import */ var _common_url_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./common/url-utils */ "./assets/js/theme/common/url-utils.js");
/* harmony import */ var url__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! url */ "./node_modules/url/url.js");
/* harmony import */ var url__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(url__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _common_collapsible__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./common/collapsible */ "./assets/js/theme/common/collapsible.js");
/* harmony import */ var jstree__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! jstree */ "./node_modules/jstree/dist/jstree.min.js");
/* harmony import */ var jstree__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(jstree__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _common_nod__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./common/nod */ "./assets/js/theme/common/nod.js");
function _createForOfIteratorHelperLoose(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (it) return (it = it.call(o)).next.bind(it); if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; return function () { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }












var Search = /*#__PURE__*/function (_CatalogPage) {
  _inheritsLoose(Search, _CatalogPage);

  function Search() {
    return _CatalogPage.apply(this, arguments) || this;
  }

  var _proto = Search.prototype;

  _proto.formatCategoryTreeForJSTree = function formatCategoryTreeForJSTree(node) {
    var _this = this;

    var nodeData = {
      text: node.data,
      id: node.metadata.id,
      state: {
        selected: node.selected
      }
    };

    if (node.state) {
      nodeData.state.opened = node.state === 'open';
      nodeData.children = true;
    }

    if (node.children) {
      nodeData.children = [];
      node.children.forEach(function (childNode) {
        nodeData.children.push(_this.formatCategoryTreeForJSTree(childNode));
      });
    }

    return nodeData;
  };

  _proto.showProducts = function showProducts(navigate) {
    if (navigate === void 0) {
      navigate = true;
    }

    this.$productListingContainer.removeClass('u-hiddenVisually');
    this.$facetedSearchContainer.removeClass('u-hiddenVisually');
    this.$contentResultsContainer.addClass('u-hiddenVisually');
    jquery__WEBPACK_IMPORTED_MODULE_2___default()('[data-content-results-toggle]').removeClass('navBar-action-color--active');
    jquery__WEBPACK_IMPORTED_MODULE_2___default()('[data-content-results-toggle]').addClass('navBar-action');
    jquery__WEBPACK_IMPORTED_MODULE_2___default()('[data-product-results-toggle]').removeClass('navBar-action');
    jquery__WEBPACK_IMPORTED_MODULE_2___default()('[data-product-results-toggle]').addClass('navBar-action-color--active');

    if (!navigate) {
      return;
    }

    var searchData = jquery__WEBPACK_IMPORTED_MODULE_2___default()('#search-results-product-count span').data();
    var url = searchData.count > 0 ? searchData.url : _common_url_utils__WEBPACK_IMPORTED_MODULE_5__["default"].replaceParams(searchData.url, {
      page: 1
    });
    _common_url_utils__WEBPACK_IMPORTED_MODULE_5__["default"].goToUrl(url);
  };

  _proto.showContent = function showContent(navigate) {
    if (navigate === void 0) {
      navigate = true;
    }

    this.$contentResultsContainer.removeClass('u-hiddenVisually');
    this.$productListingContainer.addClass('u-hiddenVisually');
    this.$facetedSearchContainer.addClass('u-hiddenVisually');
    jquery__WEBPACK_IMPORTED_MODULE_2___default()('[data-product-results-toggle]').removeClass('navBar-action-color--active');
    jquery__WEBPACK_IMPORTED_MODULE_2___default()('[data-product-results-toggle]').addClass('navBar-action');
    jquery__WEBPACK_IMPORTED_MODULE_2___default()('[data-content-results-toggle]').removeClass('navBar-action');
    jquery__WEBPACK_IMPORTED_MODULE_2___default()('[data-content-results-toggle]').addClass('navBar-action-color--active');

    if (!navigate) {
      return;
    }

    var searchData = jquery__WEBPACK_IMPORTED_MODULE_2___default()('#search-results-content-count span').data();
    var url = searchData.count > 0 ? searchData.url : _common_url_utils__WEBPACK_IMPORTED_MODULE_5__["default"].replaceParams(searchData.url, {
      page: 1
    });
    _common_url_utils__WEBPACK_IMPORTED_MODULE_5__["default"].goToUrl(url);
  };

  _proto.onReady = function onReady() {
    var _this2 = this;

    Object(_global_compare_products__WEBPACK_IMPORTED_MODULE_4__["default"])(this.context.urls);
    var $searchForm = jquery__WEBPACK_IMPORTED_MODULE_2___default()('[data-advanced-search-form]');
    var $categoryTreeContainer = $searchForm.find('[data-search-category-tree]');
    var url = url__WEBPACK_IMPORTED_MODULE_6___default.a.parse(window.location.href, true);
    var treeData = [];
    this.$productListingContainer = jquery__WEBPACK_IMPORTED_MODULE_2___default()('#product-listing-container');
    this.$facetedSearchContainer = jquery__WEBPACK_IMPORTED_MODULE_2___default()('#faceted-search-container');
    this.$contentResultsContainer = jquery__WEBPACK_IMPORTED_MODULE_2___default()('#search-results-content'); // Init faceted search

    if (jquery__WEBPACK_IMPORTED_MODULE_2___default()('#facetedSearch').length > 0) {
      this.initFacetedSearch();
    } else {
      this.onSortBySubmit = this.onSortBySubmit.bind(this);
      _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_0__["hooks"].on('sortBy-submitted', this.onSortBySubmit);
    } // Init collapsibles


    Object(_common_collapsible__WEBPACK_IMPORTED_MODULE_7__["default"])();
    jquery__WEBPACK_IMPORTED_MODULE_2___default()('[data-product-results-toggle]').on('click', function (event) {
      event.preventDefault();

      _this2.showProducts();
    });
    jquery__WEBPACK_IMPORTED_MODULE_2___default()('[data-content-results-toggle]').on('click', function (event) {
      event.preventDefault();

      _this2.showContent();
    });

    if (this.$productListingContainer.find('li.product').length === 0 || url.query.section === 'content') {
      this.showContent(false);
    } else {
      this.showProducts(false);
    }

    var validator = this.initValidation($searchForm).bindValidation($searchForm.find('#search_query_adv'));
    this.context.categoryTree.forEach(function (node) {
      treeData.push(_this2.formatCategoryTreeForJSTree(node));
    });
    this.categoryTreeData = treeData;
    this.createCategoryTree($categoryTreeContainer);
    $searchForm.on('submit', function (event) {
      var selectedCategoryIds = $categoryTreeContainer.jstree().get_selected();

      if (!validator.check()) {
        return event.preventDefault();
      }

      $searchForm.find('input[name="category\[\]"]').remove();

      for (var _iterator = _createForOfIteratorHelperLoose(selectedCategoryIds), _step; !(_step = _iterator()).done;) {
        var categoryId = _step.value;
        var input = jquery__WEBPACK_IMPORTED_MODULE_2___default()('<input>', {
          type: 'hidden',
          name: 'category[]',
          value: categoryId
        });
        $searchForm.append(input);
      }
    });
  };

  _proto.loadTreeNodes = function loadTreeNodes(node, cb) {
    var _this3 = this;

    jquery__WEBPACK_IMPORTED_MODULE_2___default.a.ajax({
      url: '/remote/v1/category-tree',
      data: {
        selectedCategoryId: node.id,
        prefix: 'category'
      },
      headers: {
        'x-xsrf-token': window.BCData && window.BCData.csrf_token ? window.BCData.csrf_token : ''
      }
    }).done(function (data) {
      var formattedResults = [];
      data.forEach(function (dataNode) {
        formattedResults.push(_this3.formatCategoryTreeForJSTree(dataNode));
      });
      cb(formattedResults);
    });
  };

  _proto.createCategoryTree = function createCategoryTree($container) {
    var _this4 = this;

    var treeOptions = {
      core: {
        data: function data(node, cb) {
          // Root node
          if (node.id === '#') {
            cb(_this4.categoryTreeData);
          } else {
            // Lazy loaded children
            _this4.loadTreeNodes(node, cb);
          }
        },
        themes: {
          icons: true
        }
      },
      checkbox: {
        three_state: false
      },
      plugins: ['checkbox']
    };
    $container.jstree(treeOptions);
  };

  _proto.initFacetedSearch = function initFacetedSearch() {
    var _this5 = this;

    var $productListingContainer = jquery__WEBPACK_IMPORTED_MODULE_2___default()('#product-listing-container');
    var $contentListingContainer = jquery__WEBPACK_IMPORTED_MODULE_2___default()('#search-results-content');
    var $facetedSearchContainer = jquery__WEBPACK_IMPORTED_MODULE_2___default()('#faceted-search-container');
    var $searchHeading = jquery__WEBPACK_IMPORTED_MODULE_2___default()('#search-results-heading');
    var $searchCount = jquery__WEBPACK_IMPORTED_MODULE_2___default()('#search-results-product-count');
    var $contentCount = jquery__WEBPACK_IMPORTED_MODULE_2___default()('#search-results-content-count');
    var productsPerPage = this.context.searchProductsPerPage;
    var requestOptions = {
      template: {
        productListing: 'search/product-listing',
        contentListing: 'search/content-listing',
        sidebar: 'search/sidebar',
        heading: 'search/heading',
        productCount: 'search/product-count',
        contentCount: 'search/content-count'
      },
      config: {
        product_results: {
          limit: productsPerPage
        }
      },
      showMore: 'search/show-more'
    };
    this.facetedSearch = new _common_faceted_search__WEBPACK_IMPORTED_MODULE_3__["default"](requestOptions, function (content) {
      $searchHeading.html(content.heading);
      var url = url__WEBPACK_IMPORTED_MODULE_6___default.a.parse(window.location.href, true);

      if (url.query.section === 'content') {
        $contentListingContainer.html(content.contentListing);
        $contentCount.html(content.contentCount);

        _this5.showContent(false);
      } else {
        $productListingContainer.html(content.productListing);
        $facetedSearchContainer.html(content.sidebar);
        $searchCount.html(content.productCount);

        _this5.showProducts(false);
      }

      jquery__WEBPACK_IMPORTED_MODULE_2___default()('body').triggerHandler('compareReset');
      jquery__WEBPACK_IMPORTED_MODULE_2___default()('html, body').animate({
        scrollTop: 0
      }, 100);
    });
  };

  _proto.initValidation = function initValidation($form) {
    this.$form = $form;
    this.validator = Object(_common_nod__WEBPACK_IMPORTED_MODULE_9__["default"])({
      submit: $form
    });
    return this;
  };

  _proto.bindValidation = function bindValidation($element) {
    if (this.validator) {
      this.validator.add({
        selector: $element,
        validate: 'presence',
        errorMessage: $element.data('errorMessage')
      });
    }

    return this;
  };

  _proto.check = function check() {
    if (this.validator) {
      this.validator.performCheck();
      return this.validator.areAll('valid');
    }

    return false;
  };

  return Search;
}(_catalog__WEBPACK_IMPORTED_MODULE_1__["default"]);



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvdGhlbWUvc2VhcmNoLmpzIl0sIm5hbWVzIjpbIlNlYXJjaCIsImZvcm1hdENhdGVnb3J5VHJlZUZvckpTVHJlZSIsIm5vZGUiLCJub2RlRGF0YSIsInRleHQiLCJkYXRhIiwiaWQiLCJtZXRhZGF0YSIsInN0YXRlIiwic2VsZWN0ZWQiLCJvcGVuZWQiLCJjaGlsZHJlbiIsImZvckVhY2giLCJjaGlsZE5vZGUiLCJwdXNoIiwic2hvd1Byb2R1Y3RzIiwibmF2aWdhdGUiLCIkcHJvZHVjdExpc3RpbmdDb250YWluZXIiLCJyZW1vdmVDbGFzcyIsIiRmYWNldGVkU2VhcmNoQ29udGFpbmVyIiwiJGNvbnRlbnRSZXN1bHRzQ29udGFpbmVyIiwiYWRkQ2xhc3MiLCIkIiwic2VhcmNoRGF0YSIsInVybCIsImNvdW50IiwidXJsVXRpbHMiLCJyZXBsYWNlUGFyYW1zIiwicGFnZSIsImdvVG9VcmwiLCJzaG93Q29udGVudCIsIm9uUmVhZHkiLCJjb21wYXJlUHJvZHVjdHMiLCJjb250ZXh0IiwidXJscyIsIiRzZWFyY2hGb3JtIiwiJGNhdGVnb3J5VHJlZUNvbnRhaW5lciIsImZpbmQiLCJVcmwiLCJwYXJzZSIsIndpbmRvdyIsImxvY2F0aW9uIiwiaHJlZiIsInRyZWVEYXRhIiwibGVuZ3RoIiwiaW5pdEZhY2V0ZWRTZWFyY2giLCJvblNvcnRCeVN1Ym1pdCIsImJpbmQiLCJob29rcyIsIm9uIiwiY29sbGFwc2libGVGYWN0b3J5IiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInF1ZXJ5Iiwic2VjdGlvbiIsInZhbGlkYXRvciIsImluaXRWYWxpZGF0aW9uIiwiYmluZFZhbGlkYXRpb24iLCJjYXRlZ29yeVRyZWUiLCJjYXRlZ29yeVRyZWVEYXRhIiwiY3JlYXRlQ2F0ZWdvcnlUcmVlIiwic2VsZWN0ZWRDYXRlZ29yeUlkcyIsImpzdHJlZSIsImdldF9zZWxlY3RlZCIsImNoZWNrIiwicmVtb3ZlIiwiY2F0ZWdvcnlJZCIsImlucHV0IiwidHlwZSIsIm5hbWUiLCJ2YWx1ZSIsImFwcGVuZCIsImxvYWRUcmVlTm9kZXMiLCJjYiIsImFqYXgiLCJzZWxlY3RlZENhdGVnb3J5SWQiLCJwcmVmaXgiLCJoZWFkZXJzIiwiQkNEYXRhIiwiY3NyZl90b2tlbiIsImRvbmUiLCJmb3JtYXR0ZWRSZXN1bHRzIiwiZGF0YU5vZGUiLCIkY29udGFpbmVyIiwidHJlZU9wdGlvbnMiLCJjb3JlIiwidGhlbWVzIiwiaWNvbnMiLCJjaGVja2JveCIsInRocmVlX3N0YXRlIiwicGx1Z2lucyIsIiRjb250ZW50TGlzdGluZ0NvbnRhaW5lciIsIiRzZWFyY2hIZWFkaW5nIiwiJHNlYXJjaENvdW50IiwiJGNvbnRlbnRDb3VudCIsInByb2R1Y3RzUGVyUGFnZSIsInNlYXJjaFByb2R1Y3RzUGVyUGFnZSIsInJlcXVlc3RPcHRpb25zIiwidGVtcGxhdGUiLCJwcm9kdWN0TGlzdGluZyIsImNvbnRlbnRMaXN0aW5nIiwic2lkZWJhciIsImhlYWRpbmciLCJwcm9kdWN0Q291bnQiLCJjb250ZW50Q291bnQiLCJjb25maWciLCJwcm9kdWN0X3Jlc3VsdHMiLCJsaW1pdCIsInNob3dNb3JlIiwiZmFjZXRlZFNlYXJjaCIsIkZhY2V0ZWRTZWFyY2giLCJjb250ZW50IiwiaHRtbCIsInRyaWdnZXJIYW5kbGVyIiwiYW5pbWF0ZSIsInNjcm9sbFRvcCIsIiRmb3JtIiwibm9kIiwic3VibWl0IiwiJGVsZW1lbnQiLCJhZGQiLCJzZWxlY3RvciIsInZhbGlkYXRlIiwiZXJyb3JNZXNzYWdlIiwicGVyZm9ybUNoZWNrIiwiYXJlQWxsIiwiQ2F0YWxvZ1BhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0lBRXFCQSxNOzs7Ozs7Ozs7U0FDakJDLDJCLEdBQUEscUNBQTRCQyxJQUE1QixFQUFrQztBQUFBOztBQUM5QixRQUFNQyxR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M0YsbURBQUMsQ0FBQyxZQUFELENBQUQsQ0FBZ0I0RixPQUFoQixDQUF3QjtBQUNwQkMsaUJBQVMsRUFBRTtBQURTLE9BQXhCLEVBRUcsR0FGSDtBQUdILEtBcEJvQixDQUFyQjtBQXFCSCxHOztTQUVEM0QsYyxHQUFBLHdCQUFlNEQsS0FBZixFQUFzQjtBQUNsQixTQUFLQSxLQUFMLEdBQWFBLEtBQWI7QUFDQSxTQUFLN0QsU0FBTCxHQUFpQjhELDJEQUFHLENBQUM7QUFDakJDLFlBQU0sRUFBRUY7QUFEUyxLQUFELENBQXBCO0FBSUEsV0FBTyxJQUFQO0FBQ0gsRzs7U0FFRDNELGMsR0FBQSx3QkFBZThELFFBQWYsRUFBeUI7QUFDckIsUUFBSSxLQUFLaEUsU0FBVCxFQUFvQjtBQUNoQixXQUFLQSxTQUFMLENBQWVpRSxHQUFmLENBQW1CO0FBQ2ZDLGdCQUFRLEVBQUVGLFFBREs7QUFFZkcsZ0JBQVEsRUFBRSxVQUZLO0FBR2ZDLG9CQUFZLEVBQUVKLFFBQVEsQ0FBQ2xILElBQVQsQ0FBYyxjQUFkO0FBSEMsT0FBbkI7QUFLSDs7QUFFRCxXQUFPLElBQVA7QUFDSCxHOztTQUVEMkQsSyxHQUFBLGlCQUFRO0FBQ0osUUFBSSxLQUFLVCxTQUFULEVBQW9CO0FBQ2hCLFdBQUtBLFNBQUwsQ0FBZXFFLFlBQWY7QUFDQSxhQUFPLEtBQUtyRSxTQUFMLENBQWVzRSxNQUFmLENBQXNCLE9BQXRCLENBQVA7QUFDSDs7QUFFRCxXQUFPLEtBQVA7QUFDSCxHOzs7RUF4UStCQyxnRCIsImZpbGUiOiJ0aGVtZS1idW5kbGUuY2h1bmsuMTQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBob29rcyB9IGZyb20gJ0BiaWdjb21tZXJjZS9zdGVuY2lsLXV0aWxzJztcclxuaW1wb3J0IENhdGFsb2dQYWdlIGZyb20gJy4vY2F0YWxvZyc7XHJcbmltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XHJcbmltcG9ydCBGYWNldGVkU2VhcmNoIGZyb20gJy4vY29tbW9uL2ZhY2V0ZWQtc2VhcmNoJztcclxuaW1wb3J0IGNvbXBhcmVQcm9kdWN0cyBmcm9tICcuL2dsb2JhbC9jb21wYXJlLXByb2R1Y3RzJztcclxuaW1wb3J0IHVybFV0aWxzIGZyb20gJy4vY29tbW9uL3VybC11dGlscyc7XHJcbmltcG9ydCBVcmwgZnJvbSAndXJsJztcclxuaW1wb3J0IGNvbGxhcHNpYmxlRmFjdG9yeSBmcm9tICcuL2NvbW1vbi9jb2xsYXBzaWJsZSc7XHJcbmltcG9ydCAnanN0cmVlJztcclxuaW1wb3J0IG5vZCBmcm9tICcuL2NvbW1vbi9ub2QnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2VhcmNoIGV4dGVuZHMgQ2F0YWxvZ1BhZ2Uge1xyXG4gICAgZm9ybWF0Q2F0ZWdvcnlUcmVlRm9ySlNUcmVlKG5vZGUpIHtcclxuICAgICAgICBjb25zdCBub2RlRGF0YSA9IHtcclxuICAgICAgICAgICAgdGV4dDogbm9kZS5kYXRhLFxyXG4gICAgICAgICAgICBpZDogbm9kZS5tZXRhZGF0YS5pZCxcclxuICAgICAgICAgICAgc3RhdGU6IHtcclxuICAgICAgICAgICAgICAgIHNlbGVjdGVkOiBub2RlLnNlbGVjdGVkLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGlmIChub2RlLnN0YXRlKSB7XHJcbiAgICAgICAgICAgIG5vZGVEYXRhLnN0YXRlLm9wZW5lZCA9IG5vZGUuc3RhdGUgPT09ICdvcGVuJztcclxuICAgICAgICAgICAgbm9kZURhdGEuY2hpbGRyZW4gPSB0cnVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKG5vZGUuY2hpbGRyZW4pIHtcclxuICAgICAgICAgICAgbm9kZURhdGEuY2hpbGRyZW4gPSBbXTtcclxuICAgICAgICAgICAgbm9kZS5jaGlsZHJlbi5mb3JFYWNoKChjaGlsZE5vZGUpID0+IHtcclxuICAgICAgICAgICAgICAgIG5vZGVEYXRhLmNoaWxkcmVuLnB1c2godGhpcy5mb3JtYXRDYXRlZ29yeVRyZWVGb3JKU1RyZWUoY2hpbGROb2RlKSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIG5vZGVEYXRhO1xyXG4gICAgfVxyXG5cclxuICAgIHNob3dQcm9kdWN0cyhuYXZpZ2F0ZSA9IHRydWUpIHtcclxuICAgICAgICB0aGlzLiRwcm9kdWN0TGlzdGluZ0NvbnRhaW5lci5yZW1vdmVDbGFzcygndS1oaWRkZW5WaXN1YWxseScpO1xyXG4gICAgICAgIHRoaXMuJGZhY2V0ZWRTZWFyY2hDb250YWluZXIucmVtb3ZlQ2xhc3MoJ3UtaGlkZGVuVmlzdWFsbHknKTtcclxuICAgICAgICB0aGlzLiRjb250ZW50UmVzdWx0c0NvbnRhaW5lci5hZGRDbGFzcygndS1oaWRkZW5WaXN1YWxseScpO1xyXG5cclxuICAgICAgICAkKCdbZGF0YS1jb250ZW50LXJlc3VsdHMtdG9nZ2xlXScpLnJlbW92ZUNsYXNzKCduYXZCYXItYWN0aW9uLWNvbG9yLS1hY3RpdmUnKTtcclxuICAgICAgICAkKCdbZGF0YS1jb250ZW50LXJlc3VsdHMtdG9nZ2xlXScpLmFkZENsYXNzKCduYXZCYXItYWN0aW9uJyk7XHJcblxyXG4gICAgICAgICQoJ1tkYXRhLXByb2R1Y3QtcmVzdWx0cy10b2dnbGVdJykucmVtb3ZlQ2xhc3MoJ25hdkJhci1hY3Rpb24nKTtcclxuICAgICAgICAkKCdbZGF0YS1wcm9kdWN0LXJlc3VsdHMtdG9nZ2xlXScpLmFkZENsYXNzKCduYXZCYXItYWN0aW9uLWNvbG9yLS1hY3RpdmUnKTtcclxuXHJcbiAgICAgICAgaWYgKCFuYXZpZ2F0ZSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBzZWFyY2hEYXRhID0gJCgnI3NlYXJjaC1yZXN1bHRzLXByb2R1Y3QtY291bnQgc3BhbicpLmRhdGEoKTtcclxuICAgICAgICBjb25zdCB1cmwgPSAoc2VhcmNoRGF0YS5jb3VudCA+IDApID8gc2VhcmNoRGF0YS51cmwgOiB1cmxVdGlscy5yZXBsYWNlUGFyYW1zKHNlYXJjaERhdGEudXJsLCB7XHJcbiAgICAgICAgICAgIHBhZ2U6IDEsXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHVybFV0aWxzLmdvVG9VcmwodXJsKTtcclxuICAgIH1cclxuXHJcbiAgICBzaG93Q29udGVudChuYXZpZ2F0ZSA9IHRydWUpIHtcclxuICAgICAgICB0aGlzLiRjb250ZW50UmVzdWx0c0NvbnRhaW5lci5yZW1vdmVDbGFzcygndS1oaWRkZW5WaXN1YWxseScpO1xyXG4gICAgICAgIHRoaXMuJHByb2R1Y3RMaXN0aW5nQ29udGFpbmVyLmFkZENsYXNzKCd1LWhpZGRlblZpc3VhbGx5Jyk7XHJcbiAgICAgICAgdGhpcy4kZmFjZXRlZFNlYXJjaENvbnRhaW5lci5hZGRDbGFzcygndS1oaWRkZW5WaXN1YWxseScpO1xyXG5cclxuICAgICAgICAkKCdbZGF0YS1wcm9kdWN0LXJlc3VsdHMtdG9nZ2xlXScpLnJlbW92ZUNsYXNzKCduYXZCYXItYWN0aW9uLWNvbG9yLS1hY3RpdmUnKTtcclxuICAgICAgICAkKCdbZGF0YS1wcm9kdWN0LXJlc3VsdHMtdG9nZ2xlXScpLmFkZENsYXNzKCduYXZCYXItYWN0aW9uJyk7XHJcblxyXG4gICAgICAgICQoJ1tkYXRhLWNvbnRlbnQtcmVzdWx0cy10b2dnbGVdJykucmVtb3ZlQ2xhc3MoJ25hdkJhci1hY3Rpb24nKTtcclxuICAgICAgICAkKCdbZGF0YS1jb250ZW50LXJlc3VsdHMtdG9nZ2xlXScpLmFkZENsYXNzKCduYXZCYXItYWN0aW9uLWNvbG9yLS1hY3RpdmUnKTtcclxuXHJcbiAgICAgICAgaWYgKCFuYXZpZ2F0ZSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBzZWFyY2hEYXRhID0gJCgnI3NlYXJjaC1yZXN1bHRzLWNvbnRlbnQtY291bnQgc3BhbicpLmRhdGEoKTtcclxuICAgICAgICBjb25zdCB1cmwgPSAoc2VhcmNoRGF0YS5jb3VudCA+IDApID8gc2VhcmNoRGF0YS51cmwgOiB1cmxVdGlscy5yZXBsYWNlUGFyYW1zKHNlYXJjaERhdGEudXJsLCB7XHJcbiAgICAgICAgICAgIHBhZ2U6IDEsXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHVybFV0aWxzLmdvVG9VcmwodXJsKTtcclxuICAgIH1cclxuXHJcbiAgICBvblJlYWR5KCkge1xyXG4gICAgICAgIGNvbXBhcmVQcm9kdWN0cyh0aGlzLmNvbnRleHQudXJscyk7XHJcblxyXG4gICAgICAgIGNvbnN0ICRzZWFyY2hGb3JtID0gJCgnW2RhdGEtYWR2YW5jZWQtc2VhcmNoLWZvcm1dJyk7XHJcbiAgICAgICAgY29uc3QgJGNhdGVnb3J5VHJlZUNvbnRhaW5lciA9ICRzZWFyY2hGb3JtLmZpbmQoJ1tkYXRhLXNlYXJjaC1jYXRlZ29yeS10cmVlXScpO1xyXG4gICAgICAgIGNvbnN0IHVybCA9IFVybC5wYXJzZSh3aW5kb3cubG9jYXRpb24uaHJlZiwgdHJ1ZSk7XHJcbiAgICAgICAgY29uc3QgdHJlZURhdGEgPSBbXTtcclxuICAgICAgICB0aGlzLiRwcm9kdWN0TGlzdGluZ0NvbnRhaW5lciA9ICQoJyNwcm9kdWN0LWxpc3RpbmctY29udGFpbmVyJyk7XHJcbiAgICAgICAgdGhpcy4kZmFjZXRlZFNlYXJjaENvbnRhaW5lciA9ICQoJyNmYWNldGVkLXNlYXJjaC1jb250YWluZXInKTtcclxuICAgICAgICB0aGlzLiRjb250ZW50UmVzdWx0c0NvbnRhaW5lciA9ICQoJyNzZWFyY2gtcmVzdWx0cy1jb250ZW50Jyk7XHJcblxyXG4gICAgICAgIC8vIEluaXQgZmFjZXRlZCBzZWFyY2hcclxuICAgICAgICBpZiAoJCgnI2ZhY2V0ZWRTZWFyY2gnKS5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaW5pdEZhY2V0ZWRTZWFyY2goKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLm9uU29ydEJ5U3VibWl0ID0gdGhpcy5vblNvcnRCeVN1Ym1pdC5iaW5kKHRoaXMpO1xyXG4gICAgICAgICAgICBob29rcy5vbignc29ydEJ5LXN1Ym1pdHRlZCcsIHRoaXMub25Tb3J0QnlTdWJtaXQpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gSW5pdCBjb2xsYXBzaWJsZXNcclxuICAgICAgICBjb2xsYXBzaWJsZUZhY3RvcnkoKTtcclxuXHJcbiAgICAgICAgJCgnW2RhdGEtcHJvZHVjdC1yZXN1bHRzLXRvZ2dsZV0nKS5vbignY2xpY2snLCBldmVudCA9PiB7XHJcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIHRoaXMuc2hvd1Byb2R1Y3RzKCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICQoJ1tkYXRhLWNvbnRlbnQtcmVzdWx0cy10b2dnbGVdJykub24oJ2NsaWNrJywgZXZlbnQgPT4ge1xyXG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICB0aGlzLnNob3dDb250ZW50KCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLiRwcm9kdWN0TGlzdGluZ0NvbnRhaW5lci5maW5kKCdsaS5wcm9kdWN0JykubGVuZ3RoID09PSAwIHx8IHVybC5xdWVyeS5zZWN0aW9uID09PSAnY29udGVudCcpIHtcclxuICAgICAgICAgICAgdGhpcy5zaG93Q29udGVudChmYWxzZSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5zaG93UHJvZHVjdHMoZmFsc2UpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgdmFsaWRhdG9yID0gdGhpcy5pbml0VmFsaWRhdGlvbigkc2VhcmNoRm9ybSlcclxuICAgICAgICAgICAgLmJpbmRWYWxpZGF0aW9uKCRzZWFyY2hGb3JtLmZpbmQoJyNzZWFyY2hfcXVlcnlfYWR2JykpO1xyXG5cclxuICAgICAgICB0aGlzLmNvbnRleHQuY2F0ZWdvcnlUcmVlLmZvckVhY2goKG5vZGUpID0+IHtcclxuICAgICAgICAgICAgdHJlZURhdGEucHVzaCh0aGlzLmZvcm1hdENhdGVnb3J5VHJlZUZvckpTVHJlZShub2RlKSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMuY2F0ZWdvcnlUcmVlRGF0YSA9IHRyZWVEYXRhO1xyXG4gICAgICAgIHRoaXMuY3JlYXRlQ2F0ZWdvcnlUcmVlKCRjYXRlZ29yeVRyZWVDb250YWluZXIpO1xyXG5cclxuICAgICAgICAkc2VhcmNoRm9ybS5vbignc3VibWl0JywgZXZlbnQgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBzZWxlY3RlZENhdGVnb3J5SWRzID0gJGNhdGVnb3J5VHJlZUNvbnRhaW5lci5qc3RyZWUoKS5nZXRfc2VsZWN0ZWQoKTtcclxuXHJcbiAgICAgICAgICAgIGlmICghdmFsaWRhdG9yLmNoZWNrKCkpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAkc2VhcmNoRm9ybS5maW5kKCdpbnB1dFtuYW1lPVwiY2F0ZWdvcnlcXFtcXF1cIl0nKS5yZW1vdmUoKTtcclxuXHJcbiAgICAgICAgICAgIGZvciAoY29uc3QgY2F0ZWdvcnlJZCBvZiBzZWxlY3RlZENhdGVnb3J5SWRzKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBpbnB1dCA9ICQoJzxpbnB1dD4nLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ2hpZGRlbicsXHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2NhdGVnb3J5W10nLFxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiBjYXRlZ29yeUlkLFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgJHNlYXJjaEZvcm0uYXBwZW5kKGlucHV0KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGxvYWRUcmVlTm9kZXMobm9kZSwgY2IpIHtcclxuICAgICAgICAkLmFqYXgoe1xyXG4gICAgICAgICAgICB1cmw6ICcvcmVtb3RlL3YxL2NhdGVnb3J5LXRyZWUnLFxyXG4gICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICBzZWxlY3RlZENhdGVnb3J5SWQ6IG5vZGUuaWQsXHJcbiAgICAgICAgICAgICAgICBwcmVmaXg6ICdjYXRlZ29yeScsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgICd4LXhzcmYtdG9rZW4nOiB3aW5kb3cuQkNEYXRhICYmIHdpbmRvdy5CQ0RhdGEuY3NyZl90b2tlbiA/IHdpbmRvdy5CQ0RhdGEuY3NyZl90b2tlbiA6ICcnLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH0pLmRvbmUoZGF0YSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGZvcm1hdHRlZFJlc3VsdHMgPSBbXTtcclxuXHJcbiAgICAgICAgICAgIGRhdGEuZm9yRWFjaCgoZGF0YU5vZGUpID0+IHtcclxuICAgICAgICAgICAgICAgIGZvcm1hdHRlZFJlc3VsdHMucHVzaCh0aGlzLmZvcm1hdENhdGVnb3J5VHJlZUZvckpTVHJlZShkYXRhTm9kZSkpO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIGNiKGZvcm1hdHRlZFJlc3VsdHMpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGNyZWF0ZUNhdGVnb3J5VHJlZSgkY29udGFpbmVyKSB7XHJcbiAgICAgICAgY29uc3QgdHJlZU9wdGlvbnMgPSB7XHJcbiAgICAgICAgICAgIGNvcmU6IHtcclxuICAgICAgICAgICAgICAgIGRhdGE6IChub2RlLCBjYikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIFJvb3Qgbm9kZVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChub2RlLmlkID09PSAnIycpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2IodGhpcy5jYXRlZ29yeVRyZWVEYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBMYXp5IGxvYWRlZCBjaGlsZHJlblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxvYWRUcmVlTm9kZXMobm9kZSwgY2IpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB0aGVtZXM6IHtcclxuICAgICAgICAgICAgICAgICAgICBpY29uczogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGNoZWNrYm94OiB7XHJcbiAgICAgICAgICAgICAgICB0aHJlZV9zdGF0ZTogZmFsc2UsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHBsdWdpbnM6IFtcclxuICAgICAgICAgICAgICAgICdjaGVja2JveCcsXHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgJGNvbnRhaW5lci5qc3RyZWUodHJlZU9wdGlvbnMpO1xyXG4gICAgfVxyXG5cclxuICAgIGluaXRGYWNldGVkU2VhcmNoKCkge1xyXG4gICAgICAgIGNvbnN0ICRwcm9kdWN0TGlzdGluZ0NvbnRhaW5lciA9ICQoJyNwcm9kdWN0LWxpc3RpbmctY29udGFpbmVyJyk7XHJcbiAgICAgICAgY29uc3QgJGNvbnRlbnRMaXN0aW5nQ29udGFpbmVyID0gJCgnI3NlYXJjaC1yZXN1bHRzLWNvbnRlbnQnKTtcclxuICAgICAgICBjb25zdCAkZmFjZXRlZFNlYXJjaENvbnRhaW5lciA9ICQoJyNmYWNldGVkLXNlYXJjaC1jb250YWluZXInKTtcclxuICAgICAgICBjb25zdCAkc2VhcmNoSGVhZGluZyA9ICQoJyNzZWFyY2gtcmVzdWx0cy1oZWFkaW5nJyk7XHJcbiAgICAgICAgY29uc3QgJHNlYXJjaENvdW50ID0gJCgnI3NlYXJjaC1yZXN1bHRzLXByb2R1Y3QtY291bnQnKTtcclxuICAgICAgICBjb25zdCAkY29udGVudENvdW50ID0gJCgnI3NlYXJjaC1yZXN1bHRzLWNvbnRlbnQtY291bnQnKTtcclxuICAgICAgICBjb25zdCBwcm9kdWN0c1BlclBhZ2UgPSB0aGlzLmNvbnRleHQuc2VhcmNoUHJvZHVjdHNQZXJQYWdlO1xyXG4gICAgICAgIGNvbnN0IHJlcXVlc3RPcHRpb25zID0ge1xyXG4gICAgICAgICAgICB0ZW1wbGF0ZToge1xyXG4gICAgICAgICAgICAgICAgcHJvZHVjdExpc3Rpbmc6ICdzZWFyY2gvcHJvZHVjdC1saXN0aW5nJyxcclxuICAgICAgICAgICAgICAgIGNvbnRlbnRMaXN0aW5nOiAnc2VhcmNoL2NvbnRlbnQtbGlzdGluZycsXHJcbiAgICAgICAgICAgICAgICBzaWRlYmFyOiAnc2VhcmNoL3NpZGViYXInLFxyXG4gICAgICAgICAgICAgICAgaGVhZGluZzogJ3NlYXJjaC9oZWFkaW5nJyxcclxuICAgICAgICAgICAgICAgIHByb2R1Y3RDb3VudDogJ3NlYXJjaC9wcm9kdWN0LWNvdW50JyxcclxuICAgICAgICAgICAgICAgIGNvbnRlbnRDb3VudDogJ3NlYXJjaC9jb250ZW50LWNvdW50JyxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgY29uZmlnOiB7XHJcbiAgICAgICAgICAgICAgICBwcm9kdWN0X3Jlc3VsdHM6IHtcclxuICAgICAgICAgICAgICAgICAgICBsaW1pdDogcHJvZHVjdHNQZXJQYWdlLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgc2hvd01vcmU6ICdzZWFyY2gvc2hvdy1tb3JlJyxcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICB0aGlzLmZhY2V0ZWRTZWFyY2ggPSBuZXcgRmFjZXRlZFNlYXJjaChyZXF1ZXN0T3B0aW9ucywgKGNvbnRlbnQpID0+IHtcclxuICAgICAgICAgICAgJHNlYXJjaEhlYWRpbmcuaHRtbChjb250ZW50LmhlYWRpbmcpO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgdXJsID0gVXJsLnBhcnNlKHdpbmRvdy5sb2NhdGlvbi5ocmVmLCB0cnVlKTtcclxuICAgICAgICAgICAgaWYgKHVybC5xdWVyeS5zZWN0aW9uID09PSAnY29udGVudCcpIHtcclxuICAgICAgICAgICAgICAgICRjb250ZW50TGlzdGluZ0NvbnRhaW5lci5odG1sKGNvbnRlbnQuY29udGVudExpc3RpbmcpO1xyXG4gICAgICAgICAgICAgICAgJGNvbnRlbnRDb3VudC5odG1sKGNvbnRlbnQuY29udGVudENvdW50KTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2hvd0NvbnRlbnQoZmFsc2UpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgJHByb2R1Y3RMaXN0aW5nQ29udGFpbmVyLmh0bWwoY29udGVudC5wcm9kdWN0TGlzdGluZyk7XHJcbiAgICAgICAgICAgICAgICAkZmFjZXRlZFNlYXJjaENvbnRhaW5lci5odG1sKGNvbnRlbnQuc2lkZWJhcik7XHJcbiAgICAgICAgICAgICAgICAkc2VhcmNoQ291bnQuaHRtbChjb250ZW50LnByb2R1Y3RDb3VudCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNob3dQcm9kdWN0cyhmYWxzZSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICQoJ2JvZHknKS50cmlnZ2VySGFuZGxlcignY29tcGFyZVJlc2V0Jyk7XHJcblxyXG4gICAgICAgICAgICAkKCdodG1sLCBib2R5JykuYW5pbWF0ZSh7XHJcbiAgICAgICAgICAgICAgICBzY3JvbGxUb3A6IDAsXHJcbiAgICAgICAgICAgIH0sIDEwMCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgaW5pdFZhbGlkYXRpb24oJGZvcm0pIHtcclxuICAgICAgICB0aGlzLiRmb3JtID0gJGZvcm07XHJcbiAgICAgICAgdGhpcy52YWxpZGF0b3IgPSBub2Qoe1xyXG4gICAgICAgICAgICBzdWJtaXQ6ICRmb3JtLFxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBiaW5kVmFsaWRhdGlvbigkZWxlbWVudCkge1xyXG4gICAgICAgIGlmICh0aGlzLnZhbGlkYXRvcikge1xyXG4gICAgICAgICAgICB0aGlzLnZhbGlkYXRvci5hZGQoe1xyXG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6ICRlbGVtZW50LFxyXG4gICAgICAgICAgICAgICAgdmFsaWRhdGU6ICdwcmVzZW5jZScsXHJcbiAgICAgICAgICAgICAgICBlcnJvck1lc3NhZ2U6ICRlbGVtZW50LmRhdGEoJ2Vycm9yTWVzc2FnZScpLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIGNoZWNrKCkge1xyXG4gICAgICAgIGlmICh0aGlzLnZhbGlkYXRvcikge1xyXG4gICAgICAgICAgICB0aGlzLnZhbGlkYXRvci5wZXJmb3JtQ2hlY2soKTtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMudmFsaWRhdG9yLmFyZUFsbCgndmFsaWQnKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9