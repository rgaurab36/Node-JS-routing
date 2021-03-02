const http = require('http');
const fs = require('fs');
const port  =3000;
const hostname = 'localhost';

const server = http.createServer((req,res)=>{
    //console.log('request url:',req.url)
    //console.log('request method:',req.method)
    res.setHeader('Content-type','text/html');
    let route = "./views/";
switch(req.url){
    case '/': route += 'index.html';
    break;
    case '/contact': route += 'contact.html';
    break;
    default: route += '404.html';
    break;
}
    fs.readFile(route,(err,data)=>{
        if(err)
        {console.log(err); res.end();
        }else{
            res.write(data);
            res.end();
        }
    })
    
})

server.listen(port,hostname,()=>{
    console.log(`Listening on port ${port}`)
})