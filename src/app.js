const express = require("express");
const connect = require("./db/conn");
const mensRanking = require("./models/mens");
const {router}=require("./routes/men")

connect();
const app = express();
app.use(express.json());
const port = process.env.PORT || 3000;


app.use("/api",router)

// app.get("/", async (req, res) => {
//   res.send("hello from the thapa");
// });

// listen
app.listen(port, () => {
  console.log(`connection is live at port ${port}`);
});
