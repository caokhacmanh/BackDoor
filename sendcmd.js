const readline = require('readline');

function cmd(lenh) {
    lenh = 'powershell -Command ' + lenh;
    let data = {
        cmd: lenh
    }
    fetch('http://localhost:1234/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(response => response.text())
        .then(data => {
            console.log(data);
        });
};

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', (input) => {
    cmd(input);
});
