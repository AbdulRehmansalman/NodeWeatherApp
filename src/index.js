const express = require('express');

const app = express();
const hbs = require('hbs');
const path = require('path');
const port = process.env.PORT ||8000;

// for urls
const staticUrl = path.join(__dirname, '../public');
const partialPath = path.join(__dirname, '../views/partials');

// //? Build IN Middleware: to serve static websites:
//* Template Engine Set:
app.set('view engine', 'hbs');

app.use(express.static(staticUrl));
hbs.registerPartials(partialPath);

app.get('/', (req, res) => {
  res.render('index');
});

app.get('/about', (req, res) => {
  res.render('about');
});

app.get('/weather', (req, res) => {
  res.render('weather');
});

app.all('*', (req, res) => {
  res.render('404page', {
    errorContent: 'Page Not Found',
  });
});
//* To listem the req on  port no :
app.listen(port, () => {
  console.log('Port Listenign on port no 8000');
});
