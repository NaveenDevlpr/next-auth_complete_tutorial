const AuthLayout = ({children}:{children:React.ReactNode}) => {
    return ( 
        <div className="h-full flex items-center justify-center bg-gradient-to-t from-violet-300 to-pink-200">
            {children}
        </div>
     );
}
 
export default AuthLayout;