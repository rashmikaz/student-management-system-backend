import {PrismaClient} from "@prisma/client";
import {Module} from "../model/Module";

const prisma =new PrismaClient();

export async function ModuleAdd(m: Module ){
    try{
        const newModule  = await prisma.module.create({
            data:{
                name: m.name,
                teacher: m.teacher
            }

        })
        console.log('Teacher Added :',newModule)
    }catch(err) {
        console.log("error adding teacher", err);
    }

}

export async function getAllModules(){
    try{
        return await prisma.module.findMany();
    }catch(err){
        console.log("error getting modules from prisma data",err);
    }
}

export async function ModuleDelete(name: string) {
    try{
        await prisma.module.delete({
            where: {name: name}
        });
        console.log('module deleted :',name);
    }catch(err){
        console.log("error deleting module", err);
    }
}
