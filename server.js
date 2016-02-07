import express from 'express'; // ES6 syntax 

let app = express();

app.get('/', (req, res) => res.send('hello express'));

app.listern(3000);