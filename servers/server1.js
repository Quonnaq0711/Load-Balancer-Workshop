import express from 'express';

const app = express();

app.get('/', (req, res) => {
    res.send('Load Balancer server 1!')
});

const PORT = 3001;

app.listen(PORT, () => {
    console.log(`Server 1 listening on port ${PORT}`)
})

// TODO: Implement a simple Express sever and listen on port 3001