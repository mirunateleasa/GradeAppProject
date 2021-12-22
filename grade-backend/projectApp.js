const express = require('express');
const cors = require('cors');

const app = express();

//used cors to share resources with the front end
app.use(
    cors({
        origin: 'http://localhost:3001',
        credentials: true,
    })
);

app.use(express.json());
app.use(express.urlencoded({
    extended: false
}));

//#region PROJECTS
let projects = [];

app.get('/home', function(req, res) {
    console.log('Inside Home Login');
    console.log('Projects : ', JSON.stringify(projects));
    res.end(JSON.stringify(projects));
});

app.post('/newProject', function(req, res) {
    const newProject = {
        name: req.body.name,
        subject: req.body.subject,
        noPartials: req.body.noPartials
    };
    projects.push(newProject);
});
//#endregion

//#region credentials
let accounts = [];
app.post('/login', function(req, res) {
    const newAccount = {
        username: req.body.username,
        password: req.body.password
    }
    accounts.push(newAccount);
});

app.get("/accounts/:account", (req, res) => //it doesn't matter if the path is the same with the put one, the only thing that matters is the verb 
        {
            let selectedStudent = students.find((student) => student.id === Number(req.params.studentId));
            const index = students.indexOf(selectedStudent);

            students.splice(index, 1);

            return res.json(students);
        })
    //#endregion

app.listen(8080, () => {
    console.log('Server Listening on port 8080');
});