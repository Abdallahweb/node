const express = require('express')
const path = require('path');
const app = express()
const port = 4000
const t = [];
app.use(express.static(path.join(__dirname + '/public')));


const exec = require('child_process').exec;
const request = require('request');
const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());


const isRunning = (query, cb) => {
    let platform = process.platform;
    let cmd = '';
    switch (platform) {
        case 'win32' : cmd = `tasklist`; break;
        case 'darwin' : cmd = `ps -ax | grep ${query}`; break;
        case 'linux' : cmd = `ps -A`; break;
        default: break;
    }
    exec(cmd, (err, stdout, stderr) => {
        cb(stdout.toLowerCase().indexOf(query.toLowerCase()) > -1);
    });
}



    
app.get("/process" , (req,res)=>{
    isRunning('chrome.exe', (status) => {

        res.send(status)
        });

});




app.listen(3700);




app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`app listening on port ${port}`)
})


var exec = require('child_process').exec;

exec('tasklist', function(err, stdout, stderr) {
    var lines = stdout.split("\n");
    var json = [];


    for (var i = 0; i < lines.length; i++) {
        var line = lines[i].trim();
        if (line === "") continue;
        var values = line.split(/\s+/);
        json.push({ 
            "imageName": values[0],
            "pid": values[1],
            "sessionName": values[2],
            "sessionNumber": values[3],
            "memUsage": values[4]
        });
    }

    t.push(json);

    

//     setInterval(() => {
//     exec('taskkill /im "bdcam.exe" /t /f'),
// exec('taskkill /im "recorder.exe" /t /f')}, 1000);


});
//     setInterval(() => {
//     exec('taskkill /im "bdcam.exe" /t /f'),
// exec('taskkill /im "recorder.exe" /t /f')}, 1000);





    


    app.get('/list', (req, res) => {
        res.send(t);
        // res.json([{"name":"tt"},{"name":"gg"}]);
    });
    
    app.get('/param', (req, res) => {
        res.sendFile(path.join(__dirname + '/public/param.html' ));
    
    });
