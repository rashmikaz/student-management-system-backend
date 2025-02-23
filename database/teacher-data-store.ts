import {PrismaClient} from "@prisma/client";
import {Teacher} from "../model/Teacher";

const prisma =new PrismaClient();

export async function TeacherAdd(t: Teacher ){
    try{
        const newTeacher  = await prisma.teacher.create({
            data:{
                name: t.name,
                nic: t.nic,
                email: t.email,
                phone: t.phone,
                address:t.address,
                subject:t.subject
            }

        })
        console.log('Teacher Added :',newTeacher)
    }catch(err) {
        console.log("error adding teacher", err);
    }

}
