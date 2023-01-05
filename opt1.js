'use strict';
const fs = require('fs');
class StringOperations {
    static strContainsOnlyDoubleEscapedChars(_0x22eaef) {
        if (_0x22eaef.match(/(?:\\x[0-9a-fA-F][0-9a-fA-F])+/)) {
            const _0x1f9411 = [..._0x22eaef.matchAll(/\\x([0-9a-fA-F][0-9a-fA-F])/g)];
            _0x1f9411.forEach(_0x41f7ed => {
                const _0x1a8ce0 = Number('0x' + _0x41f7ed);
                if (_0x1a8ce0 > 127) {
                    return false;
                }
            });
            return true;
        }
        return false;
    }
    static unescapeStrWithDoubleEscapedChars(_0x24c4b4) {
        return eval('"' + _0x24c4b4 + '"');
    }
    static isValidIdentifierName(_0x433c09) {
        if (_0x433c09.length == 0) {
            return false;
        }
        const _0x184ee7 = _0x433c09[0];
        if (_0x184ee7.toLowerCase() == _0x184ee7.toUpperCase() && _0x184ee7 != '$' && _0x184ee7 != '_') {
            return false;
        }
        if (_0x433c09.indexOf('-') != -1) {
            return false;
        }
        return true;
    }
}
class NumberOperations {
    static numberIsFloat(_0x4605ce) {
        return _0x4605ce.toString().indexOf('.') != -1;
    }
}
function writeTextFile(_0x28dd69, _0x14495c) {
    fs.writeFileSync(_0x28dd69, _0x14495c, { flag: 'w' });
}
module.exports = {
    StringOperations: StringOperations,
    NumberOperations: NumberOperations,
    writeTextFile: writeTextFile
};