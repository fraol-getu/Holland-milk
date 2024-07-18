import React from 'react'
import Image1 from '../../asset/4.png'
import Image2 from '../../asset/2.png'
import Image3 from '../../asset/3.png'

const Hero = () => {
  return (
    <section className="hero-wrapper">
        <div className="hero-container overflow-x-hidden  flex flex-col justify-center- items-center  justify-between p-12">
                <h1 className='text-[2.5rem]'> Our Products</h1>
               <div className='card -container  gap-14 flex flex-col justify-center- items-center    justify-between p-12 md:flex-row'>
            <div className="slide-container w-[50%] h-[400px]  md:w-[100%] md:h-[500px]  bg-[--brown]  p-8 border-solid border-[2px] border-[--white] rounded-[0.7rem] gap-4 flex flex-col items-center justify-center">
          
           <img src={Image1} alt='img' className='h-[100%] md:h-[100%] w-[100%] '  />
           <h4 className='text-[--white]'>Holland milk </h4>
           <button className="bg-[--pink]  w-[7rem]   text-[.8rem] h-[2.7rem] rounded-[2.5rem]">view details</button>
            </div>
           
      
            <div className="slide-container w-[50%] h-[400px]  md:w-[100%] md:h-[500px]  bg-[--brown]    p-8 border-solid border-[2px] border-[--white] rounded-[0.7rem] gap-4 flex flex-col items-center justify-center">
           <img src={Image2} alt='img' className='   h-[100%] w-[100%] '/>
           <h4 className='text-[--white]'>Holland milk </h4>
           <button className="bg-[--pink]  w-[7rem]   text-[.8rem] h-[2.7rem] rounded-[2.5rem]">view details</button>
            </div>
           
            <div className="slide-container w-[50%] h-[400px] md:w-[100%] md:h-[500px]  bg-[--brown]   p-8 border-solid border-[2px] border-[--white] rounded-[0.7rem] gap-4 flex flex-col items-center justify-center">
           <img src={Image3} alt='img' className=' h-[100%] w-[100%] ' />
           <h4 className='text-[--white]'>Holland milk </h4>
           <button className="bg-[--pink]  w-[7rem]   text-[.8rem] h-[2.7rem] rounded-[2.5rem]">view details</button>
            </div>
            
            </div>
           
        </div>
    </section>
  )
}

export default Hero
