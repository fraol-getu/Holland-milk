import React, { useEffect, useState } from 'react'
import { MdOutlineDesktopWindows } from "react-icons/md";
import { FaTabletAlt } from "react-icons/fa";
import { CiMobile1 } from "react-icons/ci";
import { MdMenu } from "react-icons/md";
import { IoCloseOutline } from "react-icons/io5";
import  Logo from '../../asset/logo.png'
import '../../App.css'
import './Header.css'
import { Link } from 'react-router-dom';
const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
 
    const [clientWidth, setClientWidth] = useState(typeof document !== 'undefined' ? document.documentElement.clientWidth : 0)
  
      
  
  
  useEffect(() => {
    const handleResize = () => setClientWidth(document.documentElement.clientWidth);
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);
  const GetMenuStyle = (menuOpen, clientWidth) => {
    if (clientWidth <= 800) {
      return { visibility: menuOpen ? "visible" : "hidden" };
    } 
     
  };
    return (
    <section className="header-wrapper overflow-x-hidden p-0 m-0 ">
          
        <div className="header-container text-[--white]   bg-[--brown]  flex justify-between align-middle  p-10 overflow-x-hidden md:pt-20   ">
            
            <img src={Logo} className='' height={50} width={80}   alt='logo'/>
            
            <div
          style={GetMenuStyle(menuOpen, clientWidth)}
          className=' header-menu flex flex-col justify-center gap-4 right-0  align-middle p-16 z-10 bg-yellow-800  md:flex-row  md:bg-transparent md:p-0'>
                <Link to='/' className='hover:cursor-pointer hover:text-[--yellow] '>Home</Link>
                <Link to='/page2' className='hover:cursor-pointer hover:text-[--yellow] '>page2</Link>
                <h3  className='hover:cursor-pointer hover:text-[--yellow] '>Culture</h3>
                <h3  className='hover:cursor-pointer hover:text-[--yellow] '>About</h3>
                <h3  className='hover:cursor-pointer hover:text-[--yellow] '>Clients</h3>
                <h3  className='hover:cursor-pointer hover:text-[--yellow] '>News</h3>
                <h3  className='hover:cursor-pointer hover:text-[--yellow] '>Contact</h3>
                
                 </div>
                 <div className="header-right hidden md:visible md:flex gap-4" >
                 <MdOutlineDesktopWindows size={30} />
                 <FaTabletAlt size={30} />
                 <CiMobile1 size={30} />

                 </div>

                 <button
          className="flex md:hidden z-50 right-5 text-[var(--black)] absolute"
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          {menuOpen ? (
            <IoCloseOutline size={35} className=" " />
          ) : (
            <MdMenu
              size={35}
              className=" 
          "
            />
          )}
        </button>

        </div>

        <div className="header-sub-menu hover:cursor-pointer  grid  grid-cols-4 md:grid-cols-4 lg:grid-cols-8  align-middle justify-center px-5 md:px-10  p-10">
          <div className='border-[1px]  border-solid border-[--black] px-6 text-center'>
            <p>Experimental</p>
          </div>
          <div className='border-[1px] bg-[--black] text-[--white] border-solid border-[--black] px-6 text-center w-[100%]'>
            <p>Creative</p>
          </div>
          <div className='border-[1px] border-solid border-[--black] px-6 text-center w-[100%]'>
            <p>Digital</p>
          </div>
          <div className='border-[1px] border-solid border-[--black] px-6 text-center w-[100%]'>
            <p>PR</p>
          </div>
          <div className='border-[1px] border-solid border-[--black] px-6 text-center w-[100%]'>
            <p>Media</p>
          </div>
          <div className='border-[1px] border-solid border-[--black] px-6 text-center w-[100%]'>
            <p>Production</p>
          </div>
          <div className='border-[1px] border-solid border-[--black] px-6 text-center w-[100%]'>
            <p>Reasearch</p>
          </div>
          <div className='border-[1px]  border-solid border-[--black] px-6 text-center w-[100%]'> 
            <p>comuniction</p>
          </div>
        </div>
    </section>
  )
}

export default Header

