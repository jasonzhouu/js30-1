import express from 'express';

var port = process.env.PORT || 3000;
var app = express();

app.use(express.static(path.join(__dirname, '/build')));

app.get(`/`, (req, res) => res.sendFile(path.join(__dirname+'/build/index.html')));

app.listen(port, () => console.log(`Example app listening on port !`));
