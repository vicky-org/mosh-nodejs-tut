const http = require('http');

const server = http.createServer((req, res) => {
    console.log('Request received:', req.method, req.url);
    
    if (req.url === '/') {
        res.write("Hello, World 2!\n");
        res.end()
    }

    if (req.url === '/api/courses') {
        res.write(JSON.stringify([1, 2, 3]));
        res.end()
    }
    
})

server.on('connection', (socket) => {
    console.log('New connection established');
});

server.listen(3000)

console.log('Server is listening on port 3000');
