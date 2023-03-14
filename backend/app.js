const express = require("express");
const pdfRoute = require("./routes/pdfRouter");
const cors = require("cors");
const app = express();
const bodyParser = require("body-parser");

//Body Parser
app.use(bodyParser.urlencoded({ limit: "200mb", extended: true }));

app.use(cors());

//JSON
app.use(express.json());

app.listen(8000, "localhost", () => {
  console.log("server running..!!");
});

app.use("/send", pdfRoute);
