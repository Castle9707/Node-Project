// console.log(process.env.DB_HOST);
// console.log(process.env.DB_USER);

import express from "express";

const app = express();

app.get('/', (req, res) => {
  res.send(`<h2>哈囉哈</h2>`); //send預設輸出是HTML
});

const port = process.env.WEB_PORT || 3002; // 若沒有設定，預設為3002
app.listen(port, () => {
  console.log(`Server start: port ${port}`);
});