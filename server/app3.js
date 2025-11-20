import express, { application } from "express"
import dotenv from"dotenv"
dotenv.config()
const app=express();
const port=process.env.PORT

app.use(express.json());
 
// post api 
// reason :to take data from user 
// 
// how to make a post api 
// 1.add this line on top 
// app.use(express.json())
// use req code 
// let userdata = req .data 


app.post("/reg",(req,res)=>{
    try {
        let data=req.body;
        res.status(200).json({msg:data})
        
    } catch (error) {
        console.log(error);
        res.status(500).json({msg:error})
        
    }
})
 app.listen(port,()=>{
        console.log(`server start hogayaa http://localhost:${port}`);
    }) 

