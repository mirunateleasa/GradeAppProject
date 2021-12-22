const req = require("express/lib/request");

//to connect to express:
const express = require ('express')
const app = express()
const port = 3000

//this is an endpoint:
app.get ('/', (req, res) => res.send('Hello World'))

//this is another endpoint:
app.get ('/newEndpoint', (req, res) => res.send('This is new endpoint'))

//get the projects in the database:
app.get("/displayProjects", (req, res) => {});
app.listen(port, () => console.log(`App listening on port ${port}`))