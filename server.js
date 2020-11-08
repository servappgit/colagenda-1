const express = require ('express');
const app = express();
const path = require ('path');

app.use(express.static(__dirname + '/dist/webapp12mayo'));


// PATH LOCATION STATEGY
app.get('*', function(req, res){
    res.sendFile(path.join(__dirname + '/dist/webapp12mayo/index.html'));
});

app.listen(process.env.PORT || 7000 );
console.log('CONSOLE LISTENING ON PORT 7000');