import express from "express";

const app = express();
const port = process.env.port || 3000
app.get('/', (req,res) => {
    console.log('New request from hHom');
    res.send('Test');
});

app.listen(port, () => {
    console.log('erver is up:' + {port});
});