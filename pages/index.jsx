import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Footer from '../components/Footer'
import Skills from '../components/Skills'

export default function Home() {
  return (
    <>
     <Head>
        <title>Fathah</title>
        <meta name="description" content="Full Stack Software Developer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    <div style={{
      width:"100%"
    }}
    className="overflow-x-hidden"
    >
        <img src="/assets/bg.png"
        className="absolute top-0 right-0 lg:h-full"
        data-aos="fade-left"
        data-aos-duration="500"
        alt="" />
        <section
         className="absolute top-0 left-0 p-16 text-white"
        >
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
          <br />
          <Skills/>
         <section
         className="flex justify-center"
         > 
           <button
            data-aos="zoom-in"
            data-aos-delay="3000"
            data-aos-duration="900"
           className="bg-white text-black font-bold px-8 py-4 rounded mt-5"
           >PORTFOLIO</button></section>
           <br />
           <Footer/>
        </section>
       


    </div>
    </>
  )
}
