'use strict';

Object.defineProperty(exports, "__esModule", {
		value: true
});

var _dexie = require('dexie');

var _dexie2 = _interopRequireDefault(_dexie);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var db = new _dexie2.default('churrasco');
db.version(1).stores({
		convites: "++id, convite, time, sync"
});

exports.default = db;