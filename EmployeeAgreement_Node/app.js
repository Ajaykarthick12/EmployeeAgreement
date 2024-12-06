const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const {
  createAgreement,
  getAgreement,
  updateAgreement,
  deleteAgreement,
  listAgreements,
} = require("./controllers");
const app = express();

app.use(bodyParser.json());
app.use(cors());

app.post("/employeeagreement/add", createAgreement);
app.get("/employeeagreement/get/:id", getAgreement);
app.put("/employeeagreement/update/:id", updateAgreement);
app.delete("/employeeagreement/delete/:id", deleteAgreement);
app.get("/employeeagreement/list", listAgreements);

app.listen(3000, () => {
  console.log("Server is Running at 3000");
});
