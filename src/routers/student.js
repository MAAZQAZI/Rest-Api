const express=require('express');
const router=new express.Router();

const Student=require('../models/students');



router.post('/students',(req,res)=>{
    console.log(req.body);
   
    const user=new Student(req.body);
    user.save().then(()=>{
        console.log('Student added successfully');
    }
    ).catch((err)=>{
        console.log('Error:',err.message);
    }
    );
    res.send('Hello Students');
})
//read/get data from the database

router.get('/students', async(req,res)=>{

    try{
        const students=await Student.find();
        res.send(students);

    }
    catch(err){
        res.send(err);
    }
});

//
router.get('/students/:id', async(req,res)=>{

    try{
        const _id=req.params.id;
        const students=await Student.find({_id});
       if(!students){

             return res.status(404).send('Student not found');
         }
         else{
            res.send(students);
         }

    }
    catch(err){
        res.status(500).send(err);
    }
});
//update the data in the database

router.patch('/students/:id', async(req,res)=>{

    try{
        const _id=req.params.id;
        const students=await Student.findByIdAndUpdate(_id,req.body,{new:true});
        if(!students){

            return res.status(404).send('Student not found');
        }
        else{
            res.send(students);
        }

    }
    catch(err){
        res.status(500).send(err);
    }
});

//delete the data from the database

router.delete('/students/:id', async(req,res)=>{

    try{
        const _id=req.params.id;
        const students=await Student.findByIdAndDelete(_id);
        if(!students){

            return res.status(404).send('Student not found');
        }
        else{
            res.send(students);
        }

    }
    catch(err){
        res.status(500).send(err);
    }
}
);
module.exports=router;
