const express=require("express");
const cors = require("cors");
const port = 3000;
const app = express();
app.use(cors());

app.post("/authenticate",async(req,res)=>{
    const {username} = req.body;
    return res.json({
        username:username,
        secret:"sha256..."
    })
})


app.listen(port,()=>{
    console.log(`Server Running on Port:${port}`);
})