const express = require('express');
require('dotenv').config();
const dbString = process.env.DATABASE_URL;
const app = express();

app.use(express.json());


app.listen(3001, () => {
    console.log('listening on http://localhost:3001');
    return "Hello, world!";
})


