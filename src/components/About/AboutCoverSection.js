import Image from 'next/image'
import React from 'react'
import profileCharacter from "../../../public/character.png"

const AboutCoverSection = () => {
  return (
    <section className='w-full md:h-[75vh] border-b-2 border-solid border-dark dark:border-light flex flex-col md:flex-row items-center justify-center text-dark dark:text-light'>
        <div className='w-full md:w-1/2 h-full border-r-2 border-solid border-dark dark:border-light flex justify-center'> 
          <Image src={profileCharacter} alt="CodeBucks" className='w-4/5  xs:w-3/4 md:w-full h-full object-contain object-center' priority sizes="(max-width: 768px) 100vw,(max-width: 1180px) 50vw, 50vw" />
        </div>
        <div className='w-full md:w-1/2 flex flex-col text-left items-start justify-center px-5 xs:p-10 pb-10 lg:px-16'>
          <h2 className='font-bold text-justify uppercase font-mono text-4xl xs:text-5xl sxl:text-6xl lg:text-left'>
            Sueña a lo grande, trabaja duro, ¡consigue más!
          </h2>
          <p className='font-medium text-justify mt-6 font-sans text-base'>
            Este mantra impulsa mi trabajo como autónomo apasionado. Combino tecnología innovadora con diseño atemporal para crear experiencias digitales cautivadoras. Inspirado por la naturaleza y la literatura, soy un aprendiz perpetuo que acepta retos. Con cada proyecto, mi objetivo es dejar un impacto duradero, píxel a píxel.
          </p>
        </div>
    </section>
  )
}

export default AboutCoverSection