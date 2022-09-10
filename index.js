const express = require('express');
const { engine } = require('express-handlebars');
const path = require('path')

let app = express();
const port = 5000;

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');

// serving static file on port.
app.use('/static', express.static(path.join(__dirname, 'public')))

app.use('/' , require('./routes/home'));
app.use('/' , require('./routes/about'));


app.listen(port, ()=>{
    console.log(`your app listing on port ${port}`)
});