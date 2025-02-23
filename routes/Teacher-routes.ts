import express from "express";
import {Teacher} from "../model/Teacher";
import {TeacherAdd, TeacherDelete, TeacherUpdate, getAllTeachers} from "../database/teacher-data-store";


const router = express.Router();

router.post('/add',async (req,res,next)=>{
    console.log(req.body);

    const teacher: Teacher= req.body;
    try{
        const addedTeacher = await TeacherAdd(teacher);
        res.send('Teacher Added')
    }catch(err){
        console.log("error adding teacher", err);
        res.status(400).send("error adding teacher");
    }
})

router.get('/view',async (req,res,next)=>{

    try{
        const teachers=  await getAllTeachers();
        res.json(teachers);
    }catch(err){
        console.log("error getting teachers", err);
    }

})
router.put('/update/:email',async (req,res,next)=>{
    const email: string = req.params.email;
    const teacher : Teacher = req.body;

    try{
        await TeacherUpdate(email, teacher);
        res.send('teacher Updated');
        console.log("teacher updated");

    }catch(err){
        console.log("error updating teacher", err);
    }

})
