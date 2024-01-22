"use client"
interface BackButtonProps{
    label:string
    href:string
}
import { Button } from "../ui/button"
import Link from "next/link"

export const BackButton=({label,href}:BackButtonProps)=>{
    return(
        <Button variant={'link'} className="font-medium w-full" size='sm' asChild>
            <Link href={href}>
                {label}
            </Link>
        </Button>
    )
}