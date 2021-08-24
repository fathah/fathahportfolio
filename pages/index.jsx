import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Social from '../components/Social'
import Skills from '../components/Skills'
import HomeParticles from '../components/HomeParticles'

export default function Home() {
  return (
    <>
     <Head>
        <title>Fathah</title>
        <meta name="description" content="Full Stack Software Developer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    <div style={{
      width:"100%",
      cursor: "move"
    }}
    className="overflow-x-hidden"
    >
        <img src="/assets/bg.png"
        className="absolute top-0 right-0 lg:h-full"
        data-aos="fade-left"
        data-aos-duration="500"
        alt="" />

        <section
         className="absolute top-0 z-20 left-0 text-white lg:mx-40 xl:mx-72 "
        >
          <div className="m-16">

          
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
           >PORTFOLIOS</button>
        </section>
       
        <HomeParticles/>
        


    </div>
    </>
  )
}
