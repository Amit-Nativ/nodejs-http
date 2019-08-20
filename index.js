const http = require('http');
const fs = require('fs');
const PORT = 9090;

try {
    http.createServer((req, res) => {
        const readStream = fs.createReadStream('./index.html');

        readStream.on('open', function () {
            readStream.pipe(res);
        });

        readStream.on('error', function(err) {
            res.end(err);
        });
    }).listen(PORT, () => console.log(`server listens on port ${PORT}`));
} catch (ex) {
    console.log(ex);
}


