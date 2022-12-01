const Terser = require('terser');
var fs = require("fs");
var path = require("path");


function getAllFiles(dirPath, arrayOfFiles) {
    let files = fs.readdirSync(dirPath);
  
    arrayOfFiles = arrayOfFiles || [];
  
    files.forEach(function(file) {
      if (fs.statSync(dirPath + "/" + file).isDirectory()) {
        arrayOfFiles = getAllFiles(dirPath + "/" + file, arrayOfFiles);
      } else {
        arrayOfFiles.push(path.join( path.resolve(__dirname, "../"),dirPath, "/", file));
      }
    });
  

    return arrayOfFiles.filter(path => path.match(/\.js$/));
  }

async function minifyFiles(filePaths) {
    await Promise.all(filePaths.map(async (filePath) => {
        fs.writeFileSync(
            filePath,
            (await Terser.minify(fs.readFileSync(filePath, "utf8"))).code
        );
    }));
}
const files = getAllFiles("./dist/js");

minifyFiles(files).then(r => r);