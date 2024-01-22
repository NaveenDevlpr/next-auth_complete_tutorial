"use client"

import { CardWrapper } from "./card-wrapper"
import { zodResolver } from "@hookform/resolvers/zod"
import { Form,FormControl,FormField,FormItem,FormLabel,FormMessage } from "../ui/form" 
import { useForm } from "react-hook-form"
import * as z from 'zod' 
import { LoginSchema } from "@/schemas"
import { Input } from "../ui/input"
import { Button } from "../ui/button"
import { FormError } from "../form-error"
import { FormSuccess } from "../form-success"
import { login } from "@/actions/login"
import { useState, useTransition } from "react"


export const LoginForm=()=>{

    const [error,setError]=useState<string>("")
    const [success,setSuccess]=useState<string>("")

    const [isPending,startTransition]=useTransition()

    const form=useForm<z.infer<typeof LoginSchema>>({
        resolver:zodResolver(LoginSchema),
        defaultValues:{
            email:'',
            password:''
        }
    })

    const onSubmit=(values:z.infer<typeof LoginSchema>)=>{
        startTransition(()=>{
            login(values)
            .then((data)=>{
                setError(data.error)
                setSuccess(data.success)
            })
        })
    }

    return(
        <CardWrapper headerLabel="Welcome back" backButtonLabel="Don't have an Account?" backButtonHref="/auth/register" showSocial>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-6"
                >
                    <div className="space-y-4">
                        <FormField 
                        control={form.control}
                        name='email'
                        render={({field})=>(
                            <FormItem>
                                <FormLabel>Email</FormLabel>
                                <FormControl>
                                    <Input {...field}
                                    disabled={isPending}
                                    placeholder="username@example.com"
                                    type="email"
                                    />
                                </FormControl>
                                <FormMessage/>
                            </FormItem>
                        )}
                        >

                        </FormField>

                        <FormField 
                        control={form.control}
                        name='password'
                        render={({field})=>(
                            <FormItem>
                                <FormLabel>Password</FormLabel>
                                <FormControl>
                                    <Input {...field}
                                    disabled={isPending}
                                    placeholder="*********"
                                    type="password"
                                    />
                                </FormControl>
                                <FormMessage/>
                            </FormItem>
                        )}
                        >

                        </FormField>
                    </div>
                    <FormError message={error}/>
                    <FormSuccess message={success}/>
                    <Button type="submit" className="w-full" disabled={isPending}>
                         Login
                    </Button>
                </form>
            </Form>
        </CardWrapper>
    )
}