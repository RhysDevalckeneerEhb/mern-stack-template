// index.js
const bodyParser = require('body-parser');
const express = require('express');
const cors = require('cors')
require('dotenv').config()



const app = express();
const port = process.env.PORT || 1337;

app.use(express.static('public'));
app.use(bodyParser.json());
app.use(cors());


// basic route
app.get('/', (req, res) => {
    res.status(300).redirect('/info.html');
})


app.listen(port, () => {
  console.log(`API is listening at http://localhost:${port}`)
})