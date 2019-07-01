import express from 'express';
import http from 'http';
import bodyParser from 'body-parser';
import path from 'path';

const port = 4000;
const app = express();
app.use(express.static(path.join(__dirname, '/../public')));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.listen(port, ()=> {
    console.log(`Server listening on port: ${port}`);
});


