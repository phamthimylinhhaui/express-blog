const express = require('express');
const morgan = require('morgan');
const exphbs = require('express-handlebars').create();

const app = express();

// http logger
app.use(morgan('combined'));

// template engine
app.engine('handlebars', exphbs.engine);
app.set('view engine', 'handlebars');
app.set('views', './views');

const port = 3000

app.get('/', (req, res) => {
  res.render('home')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})