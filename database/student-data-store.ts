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