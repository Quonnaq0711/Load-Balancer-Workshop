import express from 'express';

const app = express();

app.get('/', (req, res) => {
    res.send('Load Balancer server 2!')
});

const PORT = 3002;

app.listen(PORT, () => {
    console.log(`Server 2 listening on port ${PORT}`)
});

// TODO: Implement a simple Express sever and listen on port 3002