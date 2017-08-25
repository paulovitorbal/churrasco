'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Historico = function (_Component) {
    _inherits(Historico, _Component);

    function Historico() {
        _classCallCheck(this, Historico);

        return _possibleConstructorReturn(this, (Historico.__proto__ || Object.getPrototypeOf(Historico)).apply(this, arguments));
    }

    _createClass(Historico, [{
        key: 'render',
        value: function render() {
            var rows = [];
            this.props.linhas.reverse().forEach(function (val, index) {
                rows.push(_react2.default.createElement(
                    'tr',
                    null,
                    _react2.default.createElement(
                        'td',
                        null,
                        val.id
                    ),
                    _react2.default.createElement(
                        'td',
                        null,
                        val.time.toLocaleTimeString()
                    ),
                    _react2.default.createElement(
                        'td',
                        null,
                        val.convite
                    ),
                    _react2.default.createElement(
                        'td',
                        null,
                        val.sync ? 'sim' : 'não'
                    )
                ));
            });
            return _react2.default.createElement(
                'div',
                { className: 'box' },
                _react2.default.createElement(
                    'div',
                    { className: 'content' },
                    _react2.default.createElement(
                        'table',
                        { className: 'table' },
                        _react2.default.createElement(
                            'thead',
                            null,
                            _react2.default.createElement(
                                'tr',
                                null,
                                _react2.default.createElement(
                                    'th',
                                    null,
                                    _react2.default.createElement(
                                        'abbr',
                                        { title: 'Sequencial' },
                                        'Seq'
                                    )
                                ),
                                _react2.default.createElement(
                                    'th',
                                    null,
                                    _react2.default.createElement(
                                        'abbr',
                                        { title: 'Hora' },
                                        'Hr'
                                    )
                                ),
                                _react2.default.createElement(
                                    'th',
                                    null,
                                    _react2.default.createElement(
                                        'abbr',
                                        { title: 'C\xF3digo' },
                                        'Cod'
                                    )
                                ),
                                _react2.default.createElement(
                                    'th',
                                    null,
                                    _react2.default.createElement(
                                        'abbr',
                                        { title: 'Sincronizado' },
                                        'Sinc'
                                    )
                                )
                            )
                        ),
                        _react2.default.createElement(
                            'tbody',
                            null,
                            rows
                        )
                    )
                )
            );
        }
    }]);

    return Historico;
}(_react.Component);

exports.default = Historico;