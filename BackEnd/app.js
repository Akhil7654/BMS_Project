const Express=require("express")
const Bodyparser=require("body-parser")
const Mongoose=require("mongoose")
const Cors=require("cors")
const {register}=require("./src/model/studRegister")


const app=Express()
app.use(Cors())
app.use(Bodyparser.urlencoded({extended:true}))
app.use (Bodyparser.json())





app.get("/",(req,res)=>{
    res.render("register")
})

app.get("/home",(req,res)=>{
    register.find(
        (error,data)=>{
            if(error){
                res.send(error)
                
            }
            else{
                res.send(data)
            }
        }
    )
})

app.post("/register",(req,res)=>{
    const data=req.body
    const ob=new register(data)
    ob.save(
        (error,data)=>{
            if(error){
                res.send(error)
            }
            else{
                res.send(data)
            }
        }
    )
})

app.delete('/delete/:id',function(req,res){
    const id = req.params.id;
    register.findByIdAndDelete(id,(error,data)=>{
       if(error){
        res.send(error)
       }else{
        res.status(200).json({
            msg:data
        })
       }
    })
})

  app.put('/update/:id',function(req,res){
    
    const id = req.params.id,
    name=req.body.name,
    registerNumber=req.body.registerNumber,
    address=req.body.address,
    department=req.body.department,
    semester=req.body.semester,
    email=req.body.email,
    boardingPoint=req.body.boardingPoint,
    amount=req.body.amount,
    status=req.body.status

    register.findByIdAndUpdate({"_id":id},
    {$set:{"name":name,
    "registerNumber":registerNumber,
    "address":address,
    "department":department,
    "semester":semester,
    "email":email,
    "boardingPoint":boardingPoint,
    "amount":amount,
    "status":status
}}).then(function(){
    register.find(
        (error,data)=>{
            if(error){
                res.send(error)
                
            }
            else{
                res.status(200).json({
                    msg:data
                })
            }
        }
    )})
  })

app.listen(3000,()=>{
    console.log("Successfully running on http://localhost:3000")
})