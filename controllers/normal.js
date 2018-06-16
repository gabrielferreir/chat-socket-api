const fs = require('fs');
const filename = '../api/files/normal.txt';

function readFile() {
    return new Promise((resolve, reject) => {
        fs.readFile(filename, 'utf8', (err, data) => {
            if (err) throw err;
            else return resolve(data);
        })
    })
}

function read(req, res) {
        readFile().then((result) => {
            var content = [];
            const lines = result.split('\n');
            lines.forEach((line) => {
                line = line.split(' ');
                const groupLine = [];
                line.forEach((g, index) => {
                    if(index) {
                        g.replace('r', '');
                        groupLine.push(g)
                    }
                })
                content.push(groupLine);
            });
            return res.status(200).json({message: 'Sucesso', content: content});
        })
}

module.exports = {
    read
};