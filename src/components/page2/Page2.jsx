import React from 'react'
import Image5 from '../../asset/5.png'
import Image6 from '../../asset/6.jpg'
import Image7 from '../../asset/7.jpg'
import Image8 from '../../asset/8.jpg'
const Page2 = () => {
  return (
    <section className='lela-wrapper'> 
      <div className="lela-container flex flex-wrap lg:flex-nowrap flex-col items-center md:flex-row gap-6  justify-center p-16">
       <img src={Image5} alt='mocup' />
       <div className='card container flex flex-col gap-4 items-center justify-center border-solid border-[2px] boreder-[#FFF1DB] p-8'>
        <img src={Image6}  alt='post' className='w-[50%] lg:w-[100%] h-[50%]' />
         <p className=' text-[0.8rem]'> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id eos, mollitia architecto sequi possimus saepe quidem, voluptate.</p>

       </div>
       <div className='card container flex flex-col gap-4 items-center justify-center border-solid border-[2px] boreder-[#FFF1DB] p-8'>
        <img src={Image8}  alt='post' className='w-[50%] lg:w-[100%] h-[50%]' />
         <p className=' text-[0.8rem]'> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id eos, mollitia architecto sequi possimus saepe quidem, voluptate.</p>

       </div>
       <div className='card container flex flex-col gap-4 items-center justify-center border-solid border-[2px] boreder-[#FFF1DB] p-8'>
        <img src={Image7}  alt='post' className='w-[50%] lg:w-[100%] h-[50%]' />
         <p className=' text-[0.8rem]'> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id eos, mollitia architecto sequi possimus saepe quidem, voluptate.</p>

       </div>
      </div>
    </section>
  )
}

export default Page2
