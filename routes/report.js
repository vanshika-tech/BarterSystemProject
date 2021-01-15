const express=require("express");
const router=express.Router();
const reportData=require("../models/report.js");

router.get('/',(req,res)=>{
    console.log("reported check");
    res.render("reportdata");
})

router.post('/',(req,res)=>{

    try {
        const {username,email,report_about,description}=req.body;
        console.log("username: "+username+" email:"+email+" report_about:"+report_about+" description:"+description);
        const newReport=new reportData({
           username:username,
           email:email,
           report_about:report_about,
           description:description
        });
    
        newReport.save()
        .then((value)=>{
            console.log(value);
        })
        .catch(value=>console.log(value));
    } catch (err) {
           res.status(400).send(err);
    }
});

module.exports=router;