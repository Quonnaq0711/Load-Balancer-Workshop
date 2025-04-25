import http from 'http';
import httpProxy from 'http-proxy';

const proxy = httpProxy.createProxyServer({});
const servers = ['http://localhost:3001', 'http://localhost:3002', 'http://localhost:3003'];

const server = http.createServer((req, res) => {
    // TODO: Implement Round-Robin Load Balancing Strategy
    // TODO: Implement Connection Based Load Balancing Strategy
});

server.listen(8000, () => {
    console.log('Load balancer listening on port 8000');
});
