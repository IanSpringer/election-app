const express = require('express');
const session = require('express-session');
const app = express();
const logger = require('morgan');
const router = express.Router();
const routes = require('./routes/mainRoutes');
const path = require('path');
const bodyParser = require('body-parser');
const key = process.env.API_KEY;

//Configure view engine to render EJS templates
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.use(express.static(__dirname + '/public'));
app.use(logger('dev')) ;





app.use('/', routes)

app.listen(3000, () => console.log("Listening on port 3000"));

// const express = require('express')
// const app = express()

// app.get('/', (req, res) => res.send('Hello World!'))

// app.listen(3000, () => console.log('Example app listening on port 3000!'))
