require("dotenv").config();

const express = require("express")
const connectDb = require("./config/dbConnection")
const cors = require("cors")

const {registerUser, loginUser, refreshToken } = require("./controller/authControl")

const app = express();

connectDb();

const port = 3000;

app.use(cors());
app.use(express.json());

// Login
app.get('/login', (req, res)=>{
    res.send('User is ready to login !');
})
app.post('/login', loginUser);

// SignUp
app.get('/signup', (req, res) => {
    console.log('User is ready to SignUp !');
})
app.post('/signup', registerUser);

app.listen(port, (req, res)=>{
    console.log(`Server is running at port: ${port}`);
})