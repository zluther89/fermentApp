const app = require("express")();
const bodyParser = require("body-parser").json();
const PORT = process.env.PORT || 3010;

app.get("/", (req, res) => {
  res.send("congrats! its hooked up");
});

app.listen(PORT, (e) => {
  if (e) console.log(e);
  console.log(`succesfully connected! Listening on port ${PORT}`);
});
