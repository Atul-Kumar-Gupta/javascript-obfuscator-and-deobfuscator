var fs = require("fs");


var jsobfuscator = require("javascript-obfuscator");

fs.readFile('./index.js','UTF-8',function(error,code){
    if (error)
    {
        throw error;
    }
    var  obfuscateResult = jsobfuscator.obfuscate(code);

    fs.writeFile('./index-Obfuscated.js',obfuscateResult.getObfuscatedCode(),function(fsError){
        if(fsError)
        {
            console.log(fsError);
        }
        console.log("Your Obfuscated file is ready")
    });
});