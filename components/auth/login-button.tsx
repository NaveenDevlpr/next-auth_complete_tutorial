"use client"

interface LoginButtonProps{
    children:React.ReactNode;
    mode?:"modal"|"redirect";
    asChild:boolean

}

const onClick=()=>{
    console.log("LOGIN_BUTTON_CLICKED")
}
export const LoginButton=({children,mode="redirect",asChild}:LoginButtonProps)=>{
    return (
        <span className="cursor-pointer" onClick={onClick}>
            {children}
        </span>
    )
}