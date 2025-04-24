const express = require("express");
const fs = require("fs");
const path = require("path");
const cors = require("cors");

const app = express();
app.use(express.json()); // for parsing JSON request bodies
app.use(cors())
const FILE_PATH = path.join(__dirname, "data", "tasks.json");
console.log('filepath',FILE_PATH)
// Ensure tasks.json exists
if (!fs.existsSync(FILE_PATH)) {
  fs.writeFileSync(FILE_PATH, JSON.stringify([]));
}

// POST /tasks → add a new task
app.post("/tasks", (req, res) => {
    console.log('request',req.body)
  const newTask = req.body && req.body.task;

  fs.readFile(FILE_PATH, "utf-8", (err, data) => {
    if (err) return res.status(500).send("Error reading file");

    const tasks = JSON.parse(data);
    console.log('data',tasks)
    tasks.push({task : newTask});
   console.log('tasks',tasks)
    fs.writeFile(FILE_PATH, JSON.stringify(tasks, null, 2), (err) => {
      if (err) return res.status(500).send("Error writing file");
      res.status(201).json({ message: "Task added", tasks });
    });
  });
});

// GET /tasks → fetch tasks
app.get("/tasks", (req, res) => {
  fs.readFile(FILE_PATH, "utf-8", (err, data) => {
    if (err) return res.status(500).send("Error reading file");

    const tasks = JSON.parse(data);
    res.json(tasks);
  });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
