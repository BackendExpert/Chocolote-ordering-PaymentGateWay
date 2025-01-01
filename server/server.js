const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const cors = require('cors');
const path = require('path'); 
const bodyParser = require('body-parser');
const ConnectDB = require('./Config/DB');

// routes
const AuthRoute = require('./Route/AuthRoute')
const userRoute = require('./Route/UserRoute')
const productRoute = require('./Route/ProductRoute')

const app = express();
const PORT = process.env.PORT || 5000;

ConnectDB();
  
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/auth', AuthRoute)
app.use('/product', productRoute)

// test
app.use('/user', userRoute)

app.get('/', (req, res) => {
    res.send(`Server running on port ${PORT}`);
});


app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});