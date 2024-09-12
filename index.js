require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const PORT = process.env.PORT || 4000;
const usersRoutes = require("./routes/usersRouter");


// middleware
app.use(express.json())

// route
app.get("/", (req,res)=>{
    res.status(200).json({message:"Welcome to Restful API"})
})
app.use("/api/v1/users", usersRoutes);

// error route
app.use((req,res)=>{
    res.status(404).json({message:"Route not found"})
})

const startServer=async()=>{
    try{
        await mongoose.connect(process.env.MONGO_URL, { dbName: "Restful" });
        app.listen(PORT,()=>    {
            console.log(`app running ...`);
        })

    }
    catch(error){
        console.log(error);
    }
}
startServer();