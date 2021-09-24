import  { useRouter } from 'next/router';
import { useState } from 'react';
import {IoArrowBackSharp} from 'react-icons/io5';
var qs = require('qs');


export default function GetQuote(){

const router = useRouter()
const inputClass= "py-3 px-3 w-full outline-none bg-gray-200 my-1 focus:border-black border-2 rounded";

const [name, setName] = useState();
const [email, setEmail] = useState();
const [contact, setContact] = useState();
const [requirements, setRequirements] = useState();
const QUOTEURL = "https://ziqx.in/portfolio/fathah/quote.php";
const [isSent, setIsSent] = useState(false);
const [isLoading, setIsLoading] = useState(false);
const sendQuote = () => {
    console.log("done");
    fetch(QUOTEURL,
        {
          method: 'POST', 
          body:
          qs.stringify({
              "api":"88572a636fec095b2be3cdde678c2097",
              "name": name,
              "email": email,
              'contact':contact,
              'req':requirements
            })
          ,
          headers: { 
            'Accept': 'application/json',
            "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
        }
        }
        )
      .then(res => {
        setIsSent(true);
        setIsLoading(false);
       
    });
}



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
className="mx-4 text-gray-400 mb-1"
>Fill your requirements and will contact you soon.</p>
<p
className={!isSent?"mb-3 mx-4  px-4 py-2 rounded  lg:8/12 xl:w-6/12":"mb-3 mx-4  px-4 py-2 rounded  lg:8/12 xl:w-6/12 text-green-800 bg-green-900 bg-opacity-20"}
>
{isSent?"Your quote is sent. We will contact you soon.":" "}
</p>
<section className="mx-4 lg:8/12 xl:w-6/12">
    <form onSubmit={(e)=>{
         console.log("prevented");
e.preventDefault();
console.log("calling method");
setIsLoading(true);
sendQuote();
e.target.reset()

    }}
    className="w-full"
    >
        <div><input type="text" className={inputClass} placeholder="Name" onChange={(e)=>setName(e.target.value)} 
        autoComplete="off"
        required
        /></div>
        <div><input type="text" className={inputClass} placeholder="Email" onChange={(e)=>setEmail(e.target.value)} 
        autoComplete="off"
        required
        /></div>
        <div><input type="number" className={inputClass} placeholder="Contact" onChange={(e)=>setContact(e.target.value)} 
        autoComplete="off"
        required
        /></div>
        <div><textarea className={inputClass} placeholder="Requirements" onChange={(e)=>setRequirements(e.target.value)}
        rows="5"
        required
        ></textarea></div>
    
   <div className="flex justify-end">
       <input type="submit" value={isLoading?"Sending Quote..":"Submit"} 
       className="px-5 py-2 bg-gray-700 focus:bg-gray-900 hover:bg-gray-800 text-white rounded" /></div>
       </form>
       <div style={{height:"16vh"}}></div>
</section>
        </div>
     
        </div>
);
}