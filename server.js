const express = require('express');
const cors = require('cors');
const { exec } = require('child_process');
const app = express();

app.use(cors());
app.use(express.json());

app.post('/', (req, res) => {
    let cmd = req.body.cmd;
    console.log(cmd);
    exec(cmd, (err, stdout, stderr) => {
        if (stderr) {
            res.send(stderr);
            console.log(stderr);
        } else {
            res.send(stdout);
            console.log(stdout);
        }
    });
});

const port = 1234;
app.listen(port, '0.0.0.0', () => {
    console.log("Server running...");
});
