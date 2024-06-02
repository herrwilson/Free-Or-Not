const express = require("express");
const app = express();

const PORT = 3002;

app.use(express.json());

app.post("/test", (req, res) => {
  console.log(req.method);
  console.log(req.headers);
  console.log(req.body);
  res.sendStatus(200);
});

app.get("/test", (req, res) => {
  console.log(req.method);
  console.log(req.headers);
  res.sendStatus(200);
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
