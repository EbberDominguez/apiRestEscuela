
var express=require('express');
const port=3002;
const bodyParser=require('body-parser');
const routes=require('./routes/routes');
var app=express();
//Usar nodejs body parsing middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended:true,
}));

routes(app);

const server =app.listen(port,(error)=>{
    if(error)return console.log(`Error:${error}`)

    console.log(`El servidor se escucha en servidor ${server.address().port}`);
});

