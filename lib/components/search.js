"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SearchBar = function (_Component) {
    _inherits(SearchBar, _Component);

    function SearchBar() {
        _classCallCheck(this, SearchBar);

        return _possibleConstructorReturn(this, (SearchBar.__proto__ || Object.getPrototypeOf(SearchBar)).apply(this, arguments));
    }

    _createClass(SearchBar, [{
        key: "render",
        value: function render() {
            var _this2 = this;

            return _react2.default.createElement(
                "div",
                { className: "box" },
                _react2.default.createElement(
                    "div",
                    { className: "field" },
                    _react2.default.createElement(
                        "div",
                        { className: "control" },
                        _react2.default.createElement("input", {
                            className: "input",
                            placeholder: "N\xFAmero do convite",
                            type: "number",
                            id: "entrada"
                        })
                    )
                ),
                _react2.default.createElement(
                    "div",
                    { className: "field has-addons" },
                    _react2.default.createElement(
                        "div",
                        { className: "control" },
                        _react2.default.createElement(
                            "a",
                            { className: "button is-info", id: "adicionar",
                                onClick: function onClick() {
                                    return _this2.props.action(document.getElementById('entrada').value);
                                }
                            },
                            "Adicionar"
                        )
                    ),
                    _react2.default.createElement(
                        "div",
                        { className: "control" },
                        _react2.default.createElement(
                            "a",
                            { className: "button is-success", id: "sincronizar"
                            },
                            "Sincronizar"
                        )
                    )
                )
            );
        }
    }]);

    return SearchBar;
}(_react.Component);

exports.default = SearchBar;