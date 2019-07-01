const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const path = require('path');

const port = 4000;
const app = express();
app.use(express.static(path.join(__dirname, '/../public')));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.listen(port, ()=> {
    console.log(`Server listening on port: ${port}`);
});


