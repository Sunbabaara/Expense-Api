const express= require("express");
const dotenv =require("dotenv");
const morgan = require("morgan");
const connectDB = require("./config/connectDB");
const accountsRoute =require("./routes/accountsRoute");
const userRoute =require("./routes/userRoute");

dotenv.config();

const app = express();

connectDB();


//middlewares
app.use(express.json());
app.use(morgan("dev"));

//routes
app.use("/api/v1/accounts", accountsRoute)
app.use("/api/v1/users", userRoute)



//home 
app.get ("/", (req, res)=> {
    res.send("welcome to our income and expense accounts");
})

const port =process.env.PORT || 8000


app.listen(port, ()=>
console.log (`server is running ${port}`))
