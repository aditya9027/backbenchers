const http = require('http');
const app = require('./app');

const port = process.env.PORT || 3000;


let server = http.createServer(app);


server.listen(port,(err)=>{
    if(err){
        console.log(err);
    }else{
        console.log("Server listen at port "+port);
    }

});