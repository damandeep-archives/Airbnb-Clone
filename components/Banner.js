import { useSession } from 'next-auth/client';
import Image from 'next/image';

function Banner() {

    const [session]=useSession();


    return (
        <div className='relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px]'>
            <Image src='https://links.papareact.com/0fm'
            layout="fill"
            objectFit="cover"/>

            <div className='absolute top-1/2 w-full text-center'>
                
                <div className='text-xl font-bold mb-2'>Welcome, {session?.user?.name}</div>
                <p className='text-sm sm:text-lg '>Not sure where to go? Perfect.</p>


               <button className='text-purple-500 bg-white px-10 py-4 shadow-md rounded-full font-bold my-3 hover:shadow-xl active:scale-90 transition duration-150'>I'm flexible</button> 
            </div>   
        </div>
     
    )
}

export default Banner