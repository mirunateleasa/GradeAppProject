// Express Initialisation
const express = require("express");
const app = express();
const port = 8080;
const cors = require("cors")

app.use(
    cors({
        origin: 'http://localhost:3000',
        credentials: true,
    })
);

const sequelize = require("./sequelize");

const Project = require("./models/Project");
const Account = require ("./models/Account");
const Grade = require("./models/Grade");
Account.hasMany(Project);
Project.hasMany(Grade);

app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());

app.listen(port, () => {
  console.log("The server is running on http://localhost:" + port);
});

app.use((err, req, res, next) => {
  console.error("[ERROR]:" + err);
  res.status(500).json({ message: "500 - Server Error" });
});

app.get("/create", async (req, res, next) => {
  try {
    await sequelize.sync({ force: true });
    res.status(201).json({ message: "Database created with the models." });
  } catch (err) {
    next(err);
  }
});

app.get("/projects", async (req, res, next) => {  // GET all the projects
    try {
      const projects = await Project.findAll();
      res.status(200).json(projects);
    } catch (err) {
      next(err);
    }
  });

  app.get("/projects/:projectId", async(req, res, next) => //GET a project by id
  {
    try {
      console.log("wtf")
      const project = await Project.findByPk(req.params.projectId);
      if (project)
      {
        res.status(200).json(project);
      }
      else
      {
        res.status(404).json(`404 - No Project Found for id ${req.params.projectId}`);
      }
    }
    catch (err)
    {
      next(err)
    }
  })

  app.post("accounts/:username/projects/:projectId/gradesprojects", async (req, res, next) => { //POST a grade in a project by id (Grade Project)
    try {
      const project = await Project.findByPk(req.params.projectId);
      if (project) {
        console.log(req.body);
        const grade = new Grade(req.body);
        grade.projectId = project.id;
        await grade.save();
        res.status(201).json({ message: "Grade added" });
      } else {
        res.status(404).json({ message: "404 - Projecct Not Found!" });
      }
    } catch (err) {
      next(err);
    }
  });

app.get("/accounts/:username/projects", async(req, res, next) =>  //GET the projects corresponding to a username (My Projects)
{
  try {
    const account = await Account.findByPk(req.params.username, {
      include: [Project]
    });
    if (account) {
      console.log(account.projects)
      if (account.projects)
      {
        res.status(200).json(account.projects);
        console.log(projects);
      }
      else
      {
        res.status(400).json({ message: "400 - Projects Not Found!" });
      }
    } else {
      res.status(404).json({ message: "404 - Account Not Found!" });
    }
  } catch (err) {
    next(err);
  }
})

app.get("/accounts/:username/gradeProjects", async(req, res, next) =>  //GET the projects that are NOT corresponding to a username (Display Projects)
{
  try {
    const projects = await Project.findAll();
    const newProjects =[];
    console.log("HERE");
    projects.forEach(element => {
      if (element.accountUsername !== req.params.username)
      {
        newProjects.push(element);
      }
    });
    if (newProjects.length == 0)
    {
      res.status(404).json("404 - NO PROJECTS FOUND");
    }
    else
    {
      res.status(200).json(newProjects);
    }
  } catch (err) {
    next(err);
  }
})

app.post("/accounts/:username/projects", async (req, res, next) => {  //POST a new project for a new username (Add Project)
  try {
    const account = await Account.findByPk(req.params.username);
    if (account) {
      const project = new Project(req.body);
      project.accountUsername = req.params.username;
      await project.save();
      console.log(project);
      res.status(201).json({ message: "Project created" });
    } else {
      res.status(404).json({ message: "404 - Account Not Found!" });
    }
  } catch (err) {
    next(err);
  }
  });
  
app.post("/newAccount", async (req, res, next) => { //POST new account (sign up)
  try {
    console.log (req.body)
    await Account.create(req.body);
    res.status(201).json({ message: "New Account created!" });
  } catch (err) {
    next(err);
  }
});

app.get("/accounts/:accountId/:password", async (req, res, next) => { //GET the account by the username and password (log in)
  try {
    const account = await Account.findByPk(req.params.accountId);
    if (account) {
      if (account.password == req.params.password)
      {
        res.status(200).json({message: "AICI"});
      }
      else 
      {
        res.status(404);
      }
    } else {
      res.status(404).json({message: "NOT AICI"});
      console.log("NOT OK");
    }
  } catch (err) {
    next(err);
  }
});
