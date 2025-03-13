const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
require('./db');
dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const signUpRouter = require('./Routers/SignUp');
app.use('/signup', signUpRouter);



app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});
