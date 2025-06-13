import express from 'express';

const app = express();


app.get('/', (req, res) => {
    res.send('Load Balancer server 3!')
});

const PORT = 3003;

app.listen(PORT, () => {
    console.log(`Server 3 listening on port ${PORT}`)
});

// TODO: Implement a simple Express sever and listen on port 3003