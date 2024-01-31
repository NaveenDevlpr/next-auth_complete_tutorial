"use server"

import * as z from 'zod'
import { LoginSchema, RegisterSchema } from '@/schemas'
import bcrypt from 'bcrypt'
import { db } from '@/lib/db'
import { getUserbyEmail } from '@/data/user'

export const register=async(values:z.infer<typeof RegisterSchema>)=>{
    const validatedFields=RegisterSchema.safeParse(values)

    if(!validatedFields.success){
        return{error:"Invalid fields"}
    }

    const {name,email,password}=validatedFields.data 

    const hashedPassword=await bcrypt.hash(password,10)

    const eixstinguser=await getUserbyEmail(email)

    if(eixstinguser){
        return {error:"Email already in use"}
    }

    await db.user.create({
        data:{
            name,
            email,
            password:hashedPassword
        }
    })



    return {success:"User created"}
}