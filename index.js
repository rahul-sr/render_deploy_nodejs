const express = require("express");
const app = express();

app.get("/api", (req, res) => {
  res.json({
    data: [
      {
        id: 1,
        name: "Iphone",
      },
    ],
  });
});

app.listen(3000, () => {
  console.log("App is running");
});
