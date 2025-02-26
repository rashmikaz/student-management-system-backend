import {PrismaClient} from "@prisma/client";
import {User} from "../model/User";

const prisma =new PrismaClient();

export async function UserAdd(u: User ){
    try{
        const newUser  = await prisma.user.create({
            data:{
                name: u.name,
                nic: u.nic,
                email: u.email,
                phone: u.phone,
                password:u.password,
            }

        })
        console.log('User Added :',newUser)
    }catch(err) {
        console.log("error adding user", err);
    }

}