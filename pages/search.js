import Header from "../components/Header"
import Footer from "../components/Footer"
import { useRouter } from "next/dist/client/router"
import {format} from "date-fns";
import InfoCard from "../components/InfoCard";
import Map from '../components/Map';
import { getSession, useSession } from "next-auth/client";
import Login from "../components/Login";

function Search({searchResults}) {

 


    const router=useRouter();   
    const {location,startDate,endDate,noOfGuests}=router.query;

    const formattedStartDate= format(new Date(startDate),"dd MMMM yy")
    const formattedEndDate= format(new Date(endDate),"dd MMMM yy")
    const range=`${formattedStartDate} - ${formattedEndDate}`;
    const [session]=useSession();
    
    
    if(!session)
    return <Login/>

    return (
        <div>
            <Header placeholder={`${location} `}/>
    
         

            <main className='flex'>
               <section className='flex-grow pt-14 px-6'>
                    <p className='text-xs'>500+ Stays - {range} - for {noOfGuests} guests</p>
                    <h1 className='text-3xl font-semibold mt-2 mb-6'>Stays in {location}</h1>


                    <div className=' hidden lg:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap'>
                        <p className='button'>Cancellation Flexibility</p>
                        <p className='button'>Type of Place</p>
                        <p className='button'>Price</p>
                        <p className='button'>Rooms and Filters</p>
                        <p className='button'>More filters</p>
                    </div>

                    <div className='flex flex-col'>
                    {searchResults.map((item)=>(
                        <InfoCard 
                        key={item.img}
                            img={item.img}
                            location={item.location}
                            title={item.title}
                            price={item.price}
                            star={item.price}
                            total={item.total}
                            description={item.description}

                        />
                    ))}
                    </div>
               </section>


               <section className='hidden xl:inline-flex xl:min-w-[600px]'>
                        <Map searchResults={searchResults}/>
               </section>

              
               
            </main>

            <div className='mt-5 flex h-96 mx-5 sm:hidden'> 
       <section className=' flex-grow '>
                        <Map searchResults={searchResults}/>
               </section>
               </div>
    
           
            <Footer/>

           
        </div>
        
    )
}

export default Search


export async function getServerSideProps(context){
    const searchResults= await fetch("https://links.papareact.com/isz").then(res=>res.json());
    
    const session= await getSession(context);

    return{
      props:{
        searchResults,
        session
        
      }
    }
  }