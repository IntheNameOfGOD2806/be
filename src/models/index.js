'use strict';var _0x2e5d08=_0x98a3;(function(_0x2235f9,_0x291fc2){var _0x1fdcba=_0x98a3,_0x9f45fc=_0x2235f9();while(!![]){try{var _0x2829d4=-parseInt(_0x1fdcba(0xa5))/0x1+parseInt(_0x1fdcba(0xb2))/0x2*(parseInt(_0x1fdcba(0xb9))/0x3)+-parseInt(_0x1fdcba(0xa3))/0x4+-parseInt(_0x1fdcba(0xb4))/0x5+parseInt(_0x1fdcba(0xaf))/0x6+parseInt(_0x1fdcba(0x9e))/0x7+parseInt(_0x1fdcba(0xa1))/0x8;if(_0x2829d4===_0x291fc2)break;else _0x9f45fc['push'](_0x9f45fc['shift']());}catch(_0x429513){_0x9f45fc['push'](_0x9f45fc['shift']());}}}(_0x10f5,0xbab9d));function _0x98a3(_0x5f9fc3,_0x1edc82){var _0x10f581=_0x10f5();return _0x98a3=function(_0x98a3ae,_0x5501a6){_0x98a3ae=_0x98a3ae-0x99;var _0x81906f=_0x10f581[_0x98a3ae];return _0x81906f;},_0x98a3(_0x5f9fc3,_0x1edc82);}require('dotenv')[_0x2e5d08(0xab)]();function _0x10f5(){var _0x26061e=['development','forEach','NODE_ENV','8374758UtiEXt','.js','true','8467336WKHlWB','filter','5698076qniOIS','DB_PORT','267575ccyqpc','keys','DB_USERNAME','indexOf','associate','DB_PASSWORD','config','readdirSync','DB_DATABASE_NAME','DataTypes','4106382cBEBbo','DB_DIALECT','DB_HOST','2vwSGLD','name','3509275hWyyZI','slice','sequelize','basename','join','658710wrmnUS','env','Sequelize'];_0x10f5=function(){return _0x26061e;};return _0x10f5();}var fs=require('fs'),path=require('path'),Sequelize=require(_0x2e5d08(0xb6)),basename=path[_0x2e5d08(0xb7)](__filename),env=process[_0x2e5d08(0x99)][_0x2e5d08(0x9d)]||_0x2e5d08(0x9b),db={},customizeConfig={'host':process[_0x2e5d08(0x99)][_0x2e5d08(0xb1)],'dialect':process[_0x2e5d08(0x99)][_0x2e5d08(0xb0)],'port':process[_0x2e5d08(0x99)][_0x2e5d08(0xa4)],'logging':!0x1,'dialectOptions':_0x2e5d08(0xa0)===process[_0x2e5d08(0x99)]['DB_SSL']?{'ssl':{'require':!0x0,'rejectUnauthorized':!0x1}}:{},'timezone':'+07:00','define':{'freezeTableName':!0x0}},sequelize=new Sequelize(process['env'][_0x2e5d08(0xad)],process[_0x2e5d08(0x99)][_0x2e5d08(0xa7)],process[_0x2e5d08(0x99)][_0x2e5d08(0xaa)],customizeConfig);fs[_0x2e5d08(0xac)](__dirname)[_0x2e5d08(0xa2)](function(_0x5c79b8){var _0x289b10=_0x2e5d08;return 0x0!==_0x5c79b8[_0x289b10(0xa8)]('.')&&_0x5c79b8!==basename&&_0x289b10(0x9f)===_0x5c79b8[_0x289b10(0xb5)](-0x3);})['forEach'](function(_0x413b3f){var _0x1ecf82=_0x2e5d08;_0x413b3f=require(path[_0x1ecf82(0xb8)](__dirname,_0x413b3f))(sequelize,Sequelize[_0x1ecf82(0xae)]),db[_0x413b3f[_0x1ecf82(0xb3)]]=_0x413b3f;}),Object[_0x2e5d08(0xa6)](db)[_0x2e5d08(0x9c)](function(_0x2f6e33){var _0xc25ce6=_0x2e5d08;db[_0x2f6e33][_0xc25ce6(0xa9)]&&db[_0x2f6e33]['associate'](db);}),db[_0x2e5d08(0x9a)]=Sequelize,db[_0x2e5d08(0xb6)]=sequelize,module['exports']=db;