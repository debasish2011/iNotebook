const mongoose = require('mongoose');
const url = 'mongodb://localhost:27017/';

const connectMongo = ()=>{
    mongoose.connect(url,()=>{
        console.log('Connected....');
    })
};

module.exports = connectMongo;

