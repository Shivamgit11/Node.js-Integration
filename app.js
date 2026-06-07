//http, https,fs,path,os
const http = require('http');

const server = http.createServer((req,res) => {
    console.log(res)//
    process.exit()
});

server.listen(4000)
