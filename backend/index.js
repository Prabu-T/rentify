import express from "express"
import mysql from "mysql"
import cors from "cors"
const app=express()
app.use(express.json())
app.use(cors())
const db=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"Prabut463@",
    database:"rentify_db"
})

app.get("/",(req,res)=>{
    res.json("Hello this the backend")
});

app.get("/users",(req,res)=>{
    const q="SELECT * FROM users"
    db.query(q,(err,data)=>{
        if(err) return res.json(err)
        return res.json(data)
    })
})
app.get("/properties",(req,res)=>{
    const q="SELECT * FROM properties"
    db.query(q,(err,data)=>{
        if(err) return res.json(err)
        return res.json(data)
    })
})

app.get("/searchproperties/:selectedAreas/:selectedPropertyTypes/:selectedFlatTypes",(req,res)=>{
    const q = "SELECT * FROM properties where area IN (?) AND bhk IN (?) AND property_type IN (?)";
    const val1 = req.params.selectedAreas.split(',');
    const val2 = req.params.selectedPropertyTypes.split(',');
    const val3 = req.params.selectedFlatTypes.split(',');

    db.query(q,[val1,val2,val3],(err,data)=>{
        if(err) return res.json(err);
        return res.json(data);
    });
});


app.get("/area",(req,res)=>{
    const q="SELECT DISTINCT area FROM properties"
    db.query(q,(err,data)=>{
        if(err) return res.json(err)
        return res.json(data)
    })
})

app.listen(8800,()=>{
    console.log("Connected to backend");
});