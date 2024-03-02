const express = require('express');
const app = express();
require('dotenv').config()

app.get('/',function(req ,res){
    res.send('helloworld');
});

app.listen(process.env.PORT , console.log('the server is runing on http://localhost:3000/'))