const express = require("express");
const cors = require("cors");
const sequelize = require("./config/database");
const userRoutes = require("./routes/user");
require("dotenv").config();
const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => res.send("##Server is running"));
app.use("/users", userRoutes);

const port = process.env.PORT || 5001;
sequelize.sync().then(() => {
  app.listen(port, () => console.log("##Server listening on port 5000"));
});
