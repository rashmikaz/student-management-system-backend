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
