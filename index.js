const express = require("express");

const app = express();
const PORT = 8000;

//Routes
app.get("/restaurants", (req, res) => {
  return res.json({ status: "OK" });
});

app.listen(PORT, () => {
  console.log(`Server started at PORT: ${PORT}`);
});
