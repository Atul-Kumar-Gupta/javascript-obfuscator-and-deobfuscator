var fs = require("fs");


var jsobfuscator = require("javascript-obfuscator");


function obfuscate(input, output) {


    fs.readFile(input, 'UTF-8', function (error, code) {
        if (error) {
            throw error;
        }
        var obfuscateResult = jsobfuscator.obfuscate(code);

        fs.writeFile(output, obfuscateResult.getObfuscatedCode(), function (fsError) {
            if (fsError) {
                console.log(fsError);
            }
            console.log("Your Obfuscated file is ready")
        });
    });
}

module.exports = { obfuscate }