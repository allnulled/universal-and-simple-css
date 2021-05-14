const fs = require("fs");
const ejs = require("ejs");

ejs.renderFile(__dirname + "/test.ejs").then(dump => {
    fs.writeFileSync(__dirname + "/test.html", dump, "utf8");
});