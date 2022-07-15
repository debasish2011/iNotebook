const connectMongo = require('./database');
const express = require('express');

connectMongo();

const app = express();
const port = 3000;

// app.get('/',(req, res)=>{
//     res.send('ok')
// })
// app.get('/api/v1/login',(req, res)=>{
//     res.send('login')
// })
// app.get('/api/v1/signup',(req, res)=>{
//     res.send('signup')
// })

app.use('/api/auth', require('./routes/auth'))
app.use('/api/notes', require('./routes/notes'))


app.listen(port,()=>{
    console.log(`Example app listening at http://localhost:${port}`);
})