import Image from "next/image";
import {Button} from '@/components/ui/button'
import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";

const font=Poppins({
  subsets:["latin"],
  weight:["600"]
})
export default function Home() {
  return (
   <main className="h-full flex flex-col items-center justify-center bg-green-700 
   bg-gradient-to-t from-violet-300 to-pink-200">
      <div className='space-y-6 text-center'>
        <h1 className={cn("text-6xl font-semibold text-white drop-shadow-md",font.className)}>
            Auth
        </h1>
        <p className={cn("text-lg text-white",font.className)}>
          A Simple Authentication Service
        </p>
        <div> 
          <Button variant={"secondary"} size={"lg"}>
              Login
          </Button>        
        </div>
      </div>
   </main>
     );
}
