const fs = require("fs");
const minifier = require("html-minifier").minify;

const exists = path => {
  try {
    fs.accessSync(path);
    return true;
  } catch {
    return false;
  }
};

const html = fs.readFileSync(`src/index.html`, "utf-8");
const minified = minifier(html, {
  collapseWhitespace: true,
  decodeEntities: true,
  minifyCSS: true,
  minifyJS: true,
  removeAttributeQuotes: true,
  sortAttributes: true,
  sortClassName: true
});

if (!exists("docs")) {
  fs.mkdirSync("docs");
}
fs.writeFileSync("docs/index.html", minified);
