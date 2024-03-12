const express = require('express')
const path = require('path');
const app = express()
const port = 4000
const t = [];
app.use(express.static(path.join(__dirname + '/public')));


app.get('/', (req, res) => {
        res.sendFile(path.join(__dirname + '/public/index.html' ));
})

app.listen(port, () => {
  console.log(`app listening on port ${port}`)
})




// var exec = require('child_process').exec;

// exec('tasklist', function(err, stdout, stderr) {
//     var lines = stdout.split("\n");
//     var json = [];


//     for (var i = 0; i < lines.length; i++) {
//         var line = lines[i].trim();
//         if (line === "") continue;
//         var values = line.split(/\s+/);
//         json.push({ 
//             "imageName": values[0],
//             "pid": values[1],
//             "sessionName": values[2],
//             "sessionNumber": values[3],
//             "memUsage": values[4]
//         });
//     }

//     t.push(json);

    

//     setInterval(() => {
//     exec('taskkill /im "bdcam.exe" /t /f'),
// exec('taskkill /im "recorder.exe" /t /f')}, 1000);


// });


var{exec , spawn} = require('child_process');
exec('tasklist.exe' , function(err , stdout,stderr){
if(err) console.error(stderr);
        t.push(stdout);
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
