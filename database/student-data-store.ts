import {PrismaClient} from "@prisma/client";
import {Student} from "../model/Student";

const prisma =new PrismaClient();

export async function StudentAdd(c: Student ){
    try{
        const newStudent  = await prisma.student.create({
            data:{
                name: c.name,
                nic: c.nic,
                email: c.email,
                phone: c.phone
            }

        })
        console.log('Student Added :',newStudent)
    }catch(err) {
        console.log("error adding student", err);
    }

}

export async function getAllStudents(){
    try{
        return await prisma.student.findMany();
    }catch(err){
        console.log("error getting students from prisma data",err);
    }
}
export async function StudentUpdate(email: string, c: Student){
    try{
        await prisma.student.update({
            where:{ email : c.email},
            data:{
                name: c.name,
                nic: c.nic,
                email: c.email,
                phone: c.phone

            }
        })
    }catch(err){
        console.log("error updating student", err);
    }
}
export async function StudentDelete(email: string) {
    try{
        await prisma.student.delete({
            where: {email: email}
        });
        console.log('student deleted :',email);
    }catch(err){
        console.log("error deleting student", err);
    }
}
