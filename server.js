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
// app.post("/tasks", (req, res) => {
   
//   const newTask = req.body && req.body.task ;
//   const newId= req.body && req.body.id;
   
//   fs.readFile(FILE_PATH, "utf-8", (err, data) => {
//     if (err) return res.status(500).send("Error reading file");

//     const tasks = JSON.parse(data);
    
//     tasks.push({task : newTask,id:newId});
//     console.log('tasks',tasks)
//     fs.writeFile(FILE_PATH, JSON.stringify(tasks, null, 2), (err) => {
//       if (err) return res.status(500).send("Error writing file");
//       res.status(201).json({ message: "Task added", tasks });
//     });
//   });
// });

app.post("/tasks", (req, res) => {
  const { task, id } = req.body;
  console.log('received tasks ',task,id)
  if (!task || !id) {
    return res.status(400).send("Task and ID are required");
  }

  fs.readFile(FILE_PATH, "utf-8", (err, data) => {
    console.log('file found')
    if (err) return res.status(500).send("Error reading file");

    const tasks = JSON.parse(data);

    // Push both task and id
    tasks.push({ task, id });
    console.log('tasks pusged',tasks)
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
    console.log('res in get',tasks)
    res.json(tasks);
  });
});

// delete taks

app.delete('/tasks/:id', (req, res) => {

  fs.readFile(FILE_PATH, "utf-8", (err, data) => {
    if (err) return res.status(500).send("Error reading file");

    const tasks = JSON.parse(data);
    const taskId = parseInt(req.params.id);
    const newTasks= tasks.filter((task)=> task.id !=taskId)
    if(tasks.length==newTasks.length)
      return res.status(404).json({ error: 'Task not found' });
     
    fs.writeFile(FILE_PATH, JSON.stringify(newTasks, null, 2), (err) => {
      if (err) return res.status(500).send("Error writing file");
      res.status(201).json({ message: "Task deleted", newTasks });
    });

  });



  
 // tasks = tasks.filter(task => task.id !== taskId);
  
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
