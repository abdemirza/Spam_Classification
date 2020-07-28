const express = require("express");
const app = express();
const port = 3000;
const bodyParser = require("body-parser");
const spawn = require("child_process").spawn;
// To get post params
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.get("/", function (req, res) {
  res.render("index.ejs",{'output':-1});
});
app.post("/", function (req, res) {
  var process = spawn("python", ["bayesModel.py", req.body.email]);

  process.stdout.on("data", function (data) {
     res.render('index.ejs',{'output':data.toString()})
  });
});
app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);
