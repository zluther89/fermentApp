require("dotenv").config();

const app = require("express")();
const bodyParser = require("body-parser").json();
const cors = require("cors");
const PORT = process.env.PORT || 3010;
const router = require("./routes");

app.use(bodyParser);
app.use(cors());

app.use("/", router);

app.listen(PORT, (e) => {
  if (e) console.log(e);
  console.log(`succesfully connected! Listening on port ${PORT}`);
});
