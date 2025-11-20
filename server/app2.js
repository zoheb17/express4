import express, { application } from "express"
import dotenv from"dotenv"
dotenv.config()
const app=express();
const port=process.env.PORT

app.use(express.json())

app.post("/home",(req,res)=>{
   try {
     let data=req.body
     console.log(data);
    res.status(200).json({msg:data})   
    
   } catch (error) {
    console.log(error);
     res.status(500).json({msg:error})
    
   }
})
 app.listen(port,()=>{
        console.log(`server start hogayaa http://localhost:${port}`);
    }) 
