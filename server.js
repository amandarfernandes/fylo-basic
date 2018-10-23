const staticServer = require('static-server');

const server = new staticServer({
    rootPath:'./public',
    port: 3030
});

server.start(()=>{
    console.log('server started on '+server.port);
})