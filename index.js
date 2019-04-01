const http = require('http');
const hostname = '127.0.0.1';
const port = 3000;

const TvShows = require('./models/tvApp')

const server = http.createServer(async(req,res)=>{
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/JSON');
    let response = '';
    const reqURL = req.url.split('/');
    console.log(reqURL[2])
    const method = req.method;
    if(req.url.startsWith('/shows')){
        if (method === 'GET'){
            if (reqURL.length === 2){
                response = await TvShows.getAll();
                response = JSON.stringify(response);
            }else if (reqURL.length === 3){
                response = await TvShows.getByStatus(reqURL[2]);

                response = JSON.stringify(response);
            };
        };
    };
    

    res.end(response);

});
server.listen(port, hostname, ()=>{
    console.log(`listening on http://${hostname}:${port}`)
});