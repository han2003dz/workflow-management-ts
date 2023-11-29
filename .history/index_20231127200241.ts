import express, { Express } from "express";
const app: Ex = express();
const port = 3000;
app.get("/tasks", (req, res) => {
  res.send("Danh sách công việc");
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
