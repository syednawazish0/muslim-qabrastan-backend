const express = require('express');
const dbConnect = require("./config/dbConnect");
const dotenv = require("dotenv").config();
dbConnect();
const app = express();

//Middleware
app.use(express.json());

//Routes

//Start server
const PORT = process.env.PORT || 7072
app.listen(PORT, () => {
    console.log(`Server streaming on port ${PORT}`);
});
    