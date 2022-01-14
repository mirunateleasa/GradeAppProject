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

app.get("/projects", async (req, res, next) => {
    try {
      const projects = await Project.findAll();
      res.status(200).json(projects);
    } catch (err) {
      next(err);
    }
  });

app.post("/newProject", async (req, res, next) => {
    try {
      console.log (req.body)
      await Project.create(req.body);
      res.status(201).json({ message: "Project Created!" });
    } catch (err) {
      next(err);
    }
  });

  
app.post("/newAccount", async (req, res, next) => {
  try {
    console.log (req.body)
    await Account.create(req.body);
    res.status(201).json({ message: "New Account created!" });
  } catch (err) {
    next(err);
  }
});

app.get("/accounts/:accountId/:password", async (req, res, next) => {
  try {
    const account = await Account.findByPk(req.params.accountId);
    if (account) {
      if (account.password == req.params.password)
      {
        res.status(200);
        console.log("OK");
      }
      else 
      {
        res.status(404);
        console.log("NOT OK")
      }
    } else {
      res.status(404);
      console.log("NOT OK");
    }
  } catch (err) {
    next(err);
  }
});
