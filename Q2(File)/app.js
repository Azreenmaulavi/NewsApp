// 2.Create a Node.js file that opens the requested file and returns the content to the client. If anything goes wrong, throw a 404 err

const http = require('http');
const fs = require('fs');
const path = require('path');

// Create the server
http.createServer((req, res) => {
    // Get the requested file path from the URL (default to index.html)
    let filePath = '.' + req.url;
    if (filePath === './') {
        filePath = './index.html'; // default file to serve
    }

    // Get the file extension
    const extname = String(path.extname(filePath)).toLowerCase();
    const mimeTypes = {
        '.html': 'text/html',
        '.js': 'text/javascript',
        '.css': 'text/css',
        '.json': 'application/json',
        '.png': 'image/png',
        '.jpg': 'image/jpg',
        '.wav': 'audio/wav'
    };

    const contentType = mimeTypes[extname] || 'application/octet-stream';

    // Read the requested file from the file system
    fs.readFile(filePath, (error, content) => {
        if (error) {
            if (error.code === 'ENOENT') {
                // File not found
                fs.readFile('./404.html', (err, errorContent) => {
                    if (err) {
                        res.writeHead(500);
                        res.end('500 - Internal Server Error');
                    } else {
                        res.writeHead(404, { 'Content-Type': 'text/html' });
                        res.end(errorContent, 'utf-8');
                    }
                });
            } else {
                // Other errors
                res.writeHead(500);
                res.end('500 - Internal Server Error');
            }
        } else {
            // File found and served
            res.writeHead(200, { 'Content-Type': contentType });
            res.end(content, 'utf-8');
        }
    });
}).listen(3000, () => {
    console.log('Server running at http://localhost:3000/');
});
