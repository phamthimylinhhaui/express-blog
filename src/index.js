const { log } = require('console');
const express = require('express');
const morgan = require('morgan');
const exphbs = require('express-handlebars').create();
const path = require('path');

const app = express();

// static public
app.use(express.static(path.join(__dirname, 'public')));

// http logger
app.use(morgan('combined'));

// template engine
app.engine('handlebars', exphbs.engine);
app.set('view engine', 'handlebars');

// path
app.set('views', path.join(__dirname, 'resources/views'));

const port = 3000

app.get('/', (req, res) => {
  res.render('home')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
