import React, { useState } from 'react'
import "./Header.css";
import Logo from "../../assets/logo.svg";
const Header = () => {
  const [toggle , setToggle] = useState(false);
  return (
    <>
<header className="sticky top-0 h-[90px] shadow-xl z-30 bg-white">
  <div className="container mx-auto flex justify-between h-full items-center">
    <a href="#">
      <img src={Logo} alt="" />
    </a>
    <nav>
<div className=' cursor-pointer lg:hidden'>
<i className="ri-menu-4-line text-4xl text-primary" onClick={()=> setToggle(!toggle)}></i>
</div>

      <ul className={toggle ? "fixed w-full bg-white overflow-hidden border-t top-[90px] left-0 right-0 flex flex-col gap-4 lg:relative lg:flex-row lg:p-0 lg:top-0 lg:border-none lg:h-full transition-all duration-500 h-[350px] p-6" : "fixed w-full bg-white overflow-hidden border-t top-[90px] left-0 right-0 flex flex-col gap-4 lg:relative lg:flex-row lg:p-0 lg:top-0 lg:border-none lg:h-full transition-all duration-500 h-[0]"}>
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Testimonials</a></li>
        <li><a href="#">Our Works</a></li>
        <li><a href="#">News</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </nav>
  </div>
</header>
    </>
  )
}

export default Header
