import express from "express";
import {Program} from "../model/Program";
import {ProgramAdd, ProgramDelete, ProgramUpdate, getAllPrograms} from "../database/program-data-store";


const router = express.Router();

router.post('/add',async (req,res,next)=>{
    console.log(req.body);

    const student: Program= req.body;
    try{
        const addedProgram = await ProgramAdd(Program);
        res.send('Program Added')
    }catch(err){
        console.log("error adding program", err);
        res.status(400).send("error adding program");
    }
})

router.get('/view',async (req,res,next)=>{

    try{
        const programs=  await getAllPrograms();
        res.json(programs);
    }catch(err){
        console.log("error getting programs", err);
    }

})

router.put('/update/:email',async (req,res,next)=>{
    const email: string = req.params.email;
    const program : Program = req.body;

    try{
        await ProgramUpdate(email, program);
        res.send('program Updated');
        console.log("program updated");

    }catch(err){
        console.log("error updating program", err);
    }

})

router.delete('/delete/:email',async (req,res,next)=>{

    const email  = req.params.email;
    try{
        await ProgramDelete(email);
        res.send('Program Deleted');
        console.log("program updated");

    }catch(err){
        console.log("error deleting program", err);
    }
})

export default router;