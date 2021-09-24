import  { useRouter } from 'next/router';
import {IoArrowBackSharp} from 'react-icons/io5';
import Footer from '../components/footer';



export default function GetQuote(){

const router = useRouter()
const inputClass= "py-3 px-3 w-full outline-none bg-gray-200 my-1 focus:border-black border-2 rounded";
return (
    <div
    className="absolute top-0 w-full min-h-full "
    style={{
        background:"url('/pattern.png')"
    }}
    >
   <div className="mx-10 lg:mx-36 xl:mx-64 "
   
   >
       <div 
       className="mx-4 mt-10 text-2xl bg-gray-200 hover:bg-gray-300 
       inline-block p-2 rounded-full"
       onClick={()=>router.back()}
       >
       <IoArrowBackSharp
       className="text-2xl"
       />
       </div>
       
<h1
className="font-extrabold text-4xl mx-4 mt-4 "
>Get Quote</h1>
<p
className="mx-4 text-gray-400 mb-4 "
>Fill your requirements and will contact you soon.</p>
<section className="mx-4 lg:8/12 xl:w-6/12">
    <form action="" method="post" onSubmit={()=>{

    }}
    className="w-full"
    >
        <div><input type="text" className={inputClass} placeholder="Name" onChange={()=>{}} 
        autocomplete={Math.random()}
        /></div>
        <div><input type="text" className={inputClass} placeholder="Email" onChange={()=>{}} 
        autocomplete={Math.random()}
        /></div>
        <div><input type="text" className={inputClass} placeholder="Contact" onChange={()=>{}} 
        autocomplete={Math.random()}
        /></div>
        <div><textarea className={inputClass} placeholder="Requirements" onChange={()=>{}}
        rows="5"
        ></textarea></div>
    </form>
   <div className="flex justify-end">
       <input type="submit" value="Submit" className="px-5 py-2 bg-gray-800 text-white rounded" /></div>
       <div style={{height:"16vh"}}></div>
</section>
        </div>
       <Footer/>
        </div>
);
}