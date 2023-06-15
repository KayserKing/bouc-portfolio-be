require('dotenv').config();
const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose');
const routes = require('./routes');
const cors = require('cors');

const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
const port = process.env.PORT || 3000;

app.use(cors({
    origin: '*'
}));


// DB connection

async function main() {
    const connectDB = await mongoose.connect(process.env.DB_URL);
    connectDB && console.log('DB Connected Succesfully!');
}

main().catch(err => {
    console.log(err)
    return err;
});

// routes

app.use('/v1/api', routes)

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
