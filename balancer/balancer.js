import http from 'http';
import httpProxy from 'http-proxy';

const proxy = httpProxy.createProxyServer({});
const servers = ['http://localhost:3001', 'http://localhost:3002', 'http://localhost:3003'];

let i = 0;

const server = http.createServer((req, res) => {
    // TODO: Implement Round-Robin Load Balancing Strategy
    // const target = servers[i % servers.length];
    // i++;

    // console.log(`Routing request to ${target}`);
    // proxy.web(req, res, { target });
    // TODO: Implement Connection Based Load Balancing Strategy
    const servers = [
        { target: 'http://localhost:3001',activeRequest: 0 },
        { target: 'http://localhost:3002', activeRequest: 0 },
        { target: 'http://localhost:3003', activeRequest: 0 },
    ];

    const sever = http.createServer((req, res) => {
        const activeServer = servers.reduce((prev, curr) => {
            prev.activeRequest <= curr.activeRequest ? prev : curr
        });
        activeServer.activeRequest++;

        proxy.web(req, res, { target: activeServer.target, activeRequest: activeServer.activeRequest })
    });
    res.on('finish', () => {
        console.log('Active rewuest finished', activeServer)
        activeServer.activeRequest--;
    });

    console.log(`Routing to ${activeServer.target}`);   

});

server.listen(8000, () => {
    console.log('Load balancer listening on port 8000');
});
