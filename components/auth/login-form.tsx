import { CardWrapper } from "./card-wrapper"

export const LoginForm=()=>{
    return(
        <CardWrapper headerLabel="Welcome back" backButtonLabel="Dont have an Account" backButtonHref="/auth/register" showSocial>
            Login Form
        </CardWrapper>
    )
}