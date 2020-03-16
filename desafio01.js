const express = require('express');
const server = express();


const projects = [];

server.get('/projects', (req, res) => {
  return res.json(projects);
});

server.post('/projects', (req, res) => {
  const { id, title } = req.body;
  const project = {
    id,
    title,
    task: []
  };

  projects.push(project);
  return res.json(project);

});

server.post('/projects/:id/tasks', (req, res) => {
    const { id } = req.params;
    const { title } = req.body;

  return 
});
server.put('/projects/:id', (req, res) => {
  return 
});

server.delete('/projects/:id', (req, res) => {
  return 
});


server.listen(3000);
