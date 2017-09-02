'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _dexie = require('dexie');

var _dexie2 = _interopRequireDefault(_dexie);

var _search = require('./components/search');

var _search2 = _interopRequireDefault(_search);

var _historico = require('./components/historico');

var _historico2 = _interopRequireDefault(_historico);

var _db = require('./db');

var _db2 = _interopRequireDefault(_db);

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_Component) {
	_inherits(App, _Component);

	function App(props) {
		_classCallCheck(this, App);

		var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

		_this.state = {
			linhas: []
		};

		return _this;
	}

	_createClass(App, [{
		key: 'adicionarLinha',
		value: function adicionarLinha(valor) {
			if (valor == '') return;
			var date = new Date();
			var timestamp = date;
			var row = {
				convite: valor,
				time: new Date(),
				sync: false
			};
			_db2.default.table("convites").add(row);

			this.refresh();
		}
	}, {
		key: 'refresh',
		value: function refresh() {
			var _this2 = this;

			_db2.default.table('convites').toArray().then(function (convites) {
				_this2.setState({ linhas: convites });
			});
		}
	}, {
		key: 'sync',
		value: function sync() {
			var _this3 = this;

			var usuario = prompt("Informe seu nome:");
			if (usuario == null || usuario == "") return;

			_db2.default.table('convites').toArray().then(function (convites) {
				var c = convites.map(function (element) {
					element.usuario = usuario;
					element.time = element.time.valueOf();
					if (element.sync == false) //filter
						return element;
				});
				var retorno;
				_jquery2.default.ajax({
					method: "POST",
					async: false,
					url: "/api/sync",
					data: { convites: c }
				}).done(function (msg) {
					retorno = _jquery2.default.parseJSON(msg);
				});
				retorno = retorno.map(function (element) {
					element.time = new Date(element.time);
					if (element.sync == 1) element.sync = ture;else element.sync = false;
					console.log(element);
					return element;
				});
				_this3.setState({ linhas: retorno });
			});
		}
	}, {
		key: 'render',
		value: function render() {
			var _this4 = this;

			this.refresh();
			return _react2.default.createElement(
				'div',
				{ className: 'section' },
				_react2.default.createElement(_search2.default, { action: function action(i) {
						return _this4.adicionarLinha(i);
					}, sync: function sync(i) {
						return _this4.sync(i);
					}, closeModal: function closeModal(i) {
						return _this4.closeModal(i);
					} }),
				_react2.default.createElement(
					'h2',
					{ className: 'subtitle' },
					'Hist\xF3rico'
				),
				_react2.default.createElement(_historico2.default, { linhas: this.state.linhas })
			);
		}
	}]);

	return App;
}(_react.Component);

_reactDom2.default.render(_react2.default.createElement(App, null), document.getElementById('inputBox'));