import express from "express";
import {Student} from "../model/Student";
import {StudentAdd, StudentDelete, StudentUpdate, getAllStudents} from "../database/student-data-store";

const router = express.Router();

router.post('/add',async (req,res,next)=>{
    console.log(req.body);

    const student: Student= req.body;
    try{
        const addedStudent = await StudentAdd(student);
        res.send('Student Added')
    }catch(err){
        console.log("error adding student", err);
        res.status(400).send("error adding student");
    }
})

router.get('/view',async (req,res,next)=>{

    try{
        const students=  await getAllStudents();
        res.json(students);
    }catch(err){
        console.log("error getting students", err);
    }

})

router.put('/update/:email',async (req,res,next)=>{
    const email: string = req.params.email;
    const student : Student = req.body;

    try{
        await StudentUpdate(email, student);
        res.send('student Updated');
        console.log("student updated");

    }catch(err){
        console.log("error updating student", err);
    }

})

router.delete('/delete/:email',async (req,res,next)=>{

    const email  = req.params.email;
    try{
        await StudentDelete(email);
        res.send('Student Deleted');
        console.log("student updated");

    }catch(err){
        console.log("error deleting student", err);
    }
})

export default router;