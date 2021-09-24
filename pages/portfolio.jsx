import router, { useRouter } from 'next/router';
import {IoArrowBackSharp} from 'react-icons/io5';
import Footer from '../components/Footer';
export default function Portfolio(){

const websites = [
    {name:"Markaz Knowledge City", img:"mkc.png", link:"https://mkc.ziqx.in"},
    {name:"Scorpion Finance", img:"scorp.png", link:"https://scorpion-finance.com/"},
    {name:"Qeats", img:"qeats.png", link:"http://qeats.in/"},
    {name:"Bolster Girls Campus", img:"bolster.png", link:"https://bolstercampus.in/"},
    {name:"Dihliz World School", img:"dihliz.png", link:"https://dihlizworldschool.com/"},
    {name:"Ziqx", img:"ziqx.png", link:"https://ziqx.in/"},
    {name:"Glocal Media", img:"glocal.png", link:"https://glocal.markazgarden.org/"},
    {name:"Katib Journal", img:"katib.png", link:"https://katib.in"},
    {name:"Markaz Garden", img:"garden.png", link:"https://markazgarden.org/"},
    {name:"Smart People", img:"smartpeople.png", link:"http://smartpeoplere.com/"},
    {name:"Manzil Media", img:"manzil.png", link:"https://manzilmedia.net/"},
    {name:"Zaimart Shopping", img:"zaimart.png", link:"http://zaimart.in/"},
    {name:"Zinga Messenger", img:"zinga.png", link:"http://zinga.deta.dev/"},
    {name:"Markaz Coorg", img:"markazcoorg.png", link:"https://markazcoorg.com/"},
];
const router = useRouter()
return (
    <div
    className="absolute top-0"
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
>Portfolio</h1>
<p
className="mx-4 text-gray-400 mb-4"
>Following is a list of websites developed by me.</p>
        <section className="lg:grid lg:grid-cols-2">
            {
                websites.map(web=>(
                    <div key={web.name}
                    className="m-4"
                    onClick={()=>{
                        window.open(web.link, "_blank");
                    }}
                    data-aos="fade-up"
                    data-aos-delay={(websites.indexOf(web)+1)*100}
                    >
                        <div className="rounded portfolio-card pb-5 mb-6 lg:mb-0 
                        bg-white
                        ">
                            <img src={"/portfolio/"+web.img}
                            className="rounded portfolio-img"
                            />
                            <h3
                            className="text-center mt-4 font-bold"
                            >{web.name}</h3>
                        </div>
                    </div>
                ))
            }
           
        </section></div>
       <Footer/>
        </div>
);
}