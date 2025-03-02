import express from "express";
import {Module} from "../model/Module";
import { ModuleAdd, ModuleDelete, getAllModules } from "../database/Module-data-store";

const router = express.Router();

router.post('/add',async (req,res,next)=>{
    console.log(req.body);

    const module: Module = req.body;
    try{
        const addedModule = await ModuleAdd(module);
        res.send('Module Added')
    }catch(err){
        console.log("error adding module", err);
        res.status(400).send("error adding module");
    }
})

router.get('/view',async (req,res,next)=>{

    try{
        const modules=  await getAllModules();
        res.json(modules);
    }catch(err){
        console.log("error getting modules", err);
    }

})

router.delete('/delete/:name',async (req,res,next)=>{

    const email  = req.params.name;
    try{
        await ModuleDelete(email);
        res.send('Module Deleted');
        console.log("module updated");

    }catch(err){
        console.log("error deleting module", err);
    }
})

export default router;
