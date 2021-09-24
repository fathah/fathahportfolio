import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Social from '../components/Social'
import Skills from '../components/Skills'
import HomeParticles from '../components/HomeParticles'
import { useRouter } from 'next/router'
import Footer from '../components/Footer';

export default function Home() {
  const router = useRouter();
  return (
    <>
     <Head>
        <title>Fathah</title>
        <meta name="description" content="Full Stack Software Developer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
     <div style={{
       backgroundColor:"#313131",
       zIndex:"-200",
       width:"100vw",
       height:"100vh",
       position:"fixed"
     }}></div>
    <div style={{
      width:"100vw",
      cursor: "move",
    }}
    className="overflow-x-hidden"
    >
        <img src="/assets/bg.png"
        className="fixed top-0 right-0 lg:h-full"
        data-aos="fade-left"
        data-aos-duration="500"
        alt="" />

        <section
         className="absolute top-0 z-20 left-0 text-white lg:mx-56 xl:mx-72"
        >
          
          <div className="mx-16 mt-16">

          
 <h1 
        className="text-5xl font-bold"
        data-aos="fade-right"
        data-aos-delay="400"
        data-aos-duration="800"
        >
          Fathah Cr<span className="text-yellow-400">.</span> </h1> 
          
          <div
          data-aos="fade-right"
          data-aos-delay="500"
          data-aos-duration="900"
          >
Full Stack Developer
          </div>
          <Social
          className="flex mt-2"
          iconSize="text-xl"
          />
          <br />
          <Skills/>
          </div>
          <button
            data-aos="zoom-in"
            data-aos-delay="1000"
           className="absolute top-0 right-16 lg:right-0 lg:mr-16  z-30 bg-white text-black  px-4 py-1 rounded-b-lg"
           onClick={()=>router.push('/portfolio')}
           >PORTFOLIO</button>
           
{/* CTA SECTION */}
<section className="flex justify-center lg:justify-start lg:ml-16 my-5"
data-aos="fade-right"
data-aos-delay="2200"
data-aos-duration="900"
>
  <div>
  <button
  className="rounded mr-4 px-3 py-2 border-yellow-400 hover:border-yellow-500 border-2
   bg-yellow-400 hover:bg-yellow-500 text-black font-bold"
   onClick={()=>router.push('/portfolio')}
  >PORTFOLIO</button>
  <button
  className="rounded mr-2 px-3 py-2 border-yellow-400 border-2 font-bold"
  onClick={()=>router.push('/quote')}
  >GET QUOTE</button>
  </div>
</section>
<br />
<footer className="lg:hidden">
<Footer/>
</footer>

        </section>
       
        <HomeParticles/>
        


    </div>
    </>
  )
}
