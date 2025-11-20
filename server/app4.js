import express from "express"
import dotenv from"dotenv"
dotenv.config()
const app=express();
const port=process.env.PORT

app.use(express.json());

app.post("/login",(req,res)=>{
    try {
        let email=req.body.email;
        let password=req.body.pass;
        if(password.length<3){
            return res.status(405).json({mss:`pass is to short`})
        }
        let outermassage=`mera email ${email} mera pass ${password}`
        res.status(200).json({msg:outermassage})


    } catch (error) {
        console.log(error);
        res.status(500).json({msg:error})
        
    }
})
app.listen(port,()=>{
        console.log(`server start hogayaa http://localhost:${port}`);
    }) 