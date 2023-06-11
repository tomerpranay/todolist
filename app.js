const express=require('express');
const bodyparser=require('body-parser');
let item=["eat","sleep","study"];
let workitems=[];

const app=express();
app.set('view engine', 'ejs');
app.use(bodyparser.urlencoded({extended:true}));
app.use(express.static(__dirname + "/public/"));

 app.get("/",(req,res)=>{
    res.sendFile(__dirname + "/index.html");
 })
 app.post("/",(req,res)=>{
    let c=req.body.choose;
    if(c==="Work"){
        res.redirect("/work");
    }
    else{
        res.redirect("/home");
    }
 });
app.get("/home",(req,res)=>{
   var today = new Date();
   const option={
    weekday: 'long',
    month: 'long',
    day: 'numeric' 
   }
   var day=today.toLocaleDateString("en-US",option);
   res.render(__dirname+"/public/views/list",{listTitle:day,itemlist:item});
});
app.post("/home",(req,res)=>{
    let tem = req.body.itemadd;
    if(req.body.list==="work"){
        workitems.push(tem);
        res.redirect("/work");
    } 
    else{
    item.push(tem);
    res.redirect("/home");
    }
});

app.get("/work",(req,res)=>{
    res.render(__dirname+"/public/views/list",{listTitle:"work List",itemlist:workitems});
});
app.post("/work",(req,res)=>{
    let w=req.body.itemadd;
    workitems.push(w);
    res.redirect("/work")
});

app.listen(3000,()=>{item:item
    console.log(3000);
});