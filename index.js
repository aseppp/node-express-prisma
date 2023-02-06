const express = require("express");
const cors = require("cors");
const app = express();
app.use(express.json());

const router = require("./routes/index");
app.use("/api", router);

app.use(
  cors({
    origin: ["http://localhost:3000"],
  })
);
app.get("/", (req, res) => {
  res.json("Server working properly!");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`
🚀 Server ready at: http://localhost:5000`);
});
