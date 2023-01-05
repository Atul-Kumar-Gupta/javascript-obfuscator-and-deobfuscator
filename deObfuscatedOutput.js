'use strict';
const fs = require('fs');
class StringOperations {
    static strContainsOnlyDoubleEscapedChars(_0x44001d) {
        if (_0x44001d.match(/(?:\\x[0-9a-fA-F][0-9a-fA-F])+/)) {
            const _0x30a5b8 = [..._0x44001d.matchAll(/\\x([0-9a-fA-F][0-9a-fA-F])/g)];
            _0x30a5b8.forEach(_0x4649d9 => {
                const _0x19ddb2 = Number('0x' + _0x4649d9);
                if (_0x19ddb2 > 127) {
                    return false;
                }
            });
            return true;
        }
        return false;
    }
    static unescapeStrWithDoubleEscapedChars(_0x2fdd99) {
        return eval('"' + _0x2fdd99 + '"');
    }
    static isValidIdentifierName(_0x485356) {
        if (_0x485356.length == 0) {
            return false;
        }
        const _0x2bf253 = _0x485356[0];
        if (_0x2bf253.toLowerCase() == _0x2bf253.toUpperCase() && _0x2bf253 != '$' && _0x2bf253 != '_') {
            return false;
        }
        if (_0x485356.indexOf('-') != -1) {
            return false;
        }
        return true;
    }
}
class NumberOperations {
    static numberIsFloat(_0x494f60) {
        return _0x494f60.toString().indexOf('.') != -1;
    }
}
function writeTextFile(_0x1130ca, _0x57228d) {
    fs.writeFileSync(_0x1130ca, _0x57228d, { flag: 'w' });
}
module.exports = {
    StringOperations: StringOperations,
    NumberOperations: NumberOperations,
    writeTextFile: writeTextFile
};