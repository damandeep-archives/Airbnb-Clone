import Image from "next/image";

import {signIn, useSession} from 'next-auth/client';
import { useRouter } from 'next/router';
function Login() {
    const router=useRouter();
    const [session]=useSession();
    
    if(session)
    {
        router.replace("/index")
    }

    return (
        <div className='mx-auto flex flex-col mt-20 w-80 '>
   
            <div className='relative h-20'>
            <Image
          src="https://links.papareact.com/qd3"
          layout="fill"
          objectFit="contain"
         
        />
           
          </div>  
         <button className='bg-red-400 mt-5 w-62 hover:bg-red-400 text-white font-bold py-2 px-4 rounded' onClick={signIn}>Login</button>
         </div>
    )
}

export default Login
