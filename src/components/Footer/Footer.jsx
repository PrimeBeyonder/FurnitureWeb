import React from 'react';
import Img from "../../assets/logo.svg"

const Footer = () => {
  return (
   <footer className='footer mt-[80px] lg:mt-[200px] relative z-20'>
<div className="container mx-auto px-0">
    <div className="flex flex-col xl:flex-row xl:gap-[100px] xl:mb-[150px]">
<div className="footer__item w-full max-w-[400px] mx-auto mb-8 text-center xl:text-left">
<a href="" >
    <img src={Img} className='mx-auto size-max'/>
</a>
<p className='m-9 text-xl text-center'>
It is a long established fact that a reader will be distracted lookings.
</p>
<ul className='text-primary flex gap-[53px] justify-center xl:text-2xl'>
    <li><a href="#"><i className='ri-facebook-fill  xl:text-2xl'></i></a></li>
    <li><a href=""><i className='ri-twitter-fill  xl:text-2xl'></i></a></li>
    <li><a href=""><i className='ri-linkedin-fill  xl:text-2xl'></i></a></li>
    <li><a href=""><i className='ri-instagram-fill  xl:text-2xl'></i></a></li>
</ul>

</div>
<div className='flex-1 flex flex-col xl:flex-row text-center xl:text-left gap-12 xl:gap-[100px] xl:justify-end'>
    <div className='footer__item'>
   <h3 className='text-[25px] font-primary'>Pages</h3>
   <ul className='flex flex-col gap-5'>
    <li><a href="">About Us</a></li>
    <li><a href="">Testimonial</a></li>
    <li><a href="">Our Work</a></li>
    <li><a href="">News</a></li>
    <li><a href="">Contact</a></li>
   </ul>
    </div>
    <div className='footer__item'>
   <h3 className='text-[25px] font-primary'>Services</h3>
   <ul className='flex flex-col gap-5'>
    <li><a href="">Kitchen</a></li>
    <li><a href="">Living Area</a></li>
    <li><a href="">Bathroom</a></li>
    <li><a href="">Bedroom</a></li>

   </ul>
    </div>
  <div className="footer__item max-w-[260px] mx-auto xl:mx-0">
    <h3 className='text-[25px] font-primary'>Contact</h3>
    <div className='flex flex-col gap-6 text-[20px]'>
        <p>
        55 East Birchwood Ave. Brooklyn, New York 11201
        </p>
        <p>
        contact@interno.com
        </p>
        <p>
        (123) 456 - 7890
        </p>
    </div>
  </div>
</div>
    </div>
</div>
<p className='footer__copyright text-center text-lg py-10 bg-white xl:border-t'>CopyRight &copy; Interno 2024.. All rights Reserved</p>
   </footer>
  )
}





export default Footer
