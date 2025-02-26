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

export async function getAllUserss(){
    try{
        return await prisma.user.findMany();
    }catch(err){
        console.log("error getting users from prisma data",err);
    }
}

export async function UserUpdate(email: string, u: User){
    try{
        await prisma.user.update({
            where:{ email : u.email},
            data:{
                name: u.name,
                nic: u.nic,
                email: u.email,
                phone: u.phone,
                password :u.password

            }
        })
    }catch(err){
        console.log("error updating user", err);
    }
}
export async function UserDelete(email: string) {
    try{
        await prisma.user.delete({
            where: {email: email}
        });
        console.log('user deleted :',email);
    }catch(err){
        console.log("error deleting user", err);
    }
}
