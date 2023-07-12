const connectMongo = require('./database');
const express = require('express');
const cors = require('cors')
require('dotenv').config( {path: './.env'}  );

connectMongo();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors())
app.use(express.json())

app.use('/api/auth', require('./routes/auth'))
app.use('/api/notes', require('./routes/notes'))


app.listen(port,()=>{
    console.log(`Example app listening at http://localhost:${port}`);
})