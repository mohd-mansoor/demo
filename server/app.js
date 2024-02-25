const express = require('express')
const connectDB = require('./connect')
const app = express()
const port = 8081
const userRouter = require('./router/user')
const cors = require('cors');
app.use(cors());

app.use(express.json());

app.use('/user',userRouter)

app.get('/',(req,res)=>{
    res.send('hello world')
})

connectDB();
app.listen(port,()=>{
    console.log("listening at http://localhost:8081")
});
