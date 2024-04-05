import React from 'react';
import "./Hero.css";


const Hero = () => {
  return (
    <section className="hero h-[640px] xl:h-[840px] bg-hero bg-center lg:bg-cover bg-no-repeat bg-fixed xl:rounded-bl-[290px] relative z-20" >
<div className="container mx-auto h-full flex items-center justify-center xl:justify-start">
  <div className='hero__text w-[567px] fle flex-col items-center text-center xl:text-left lg:items-start'>
    <h1 className='text-[50px] lg:text-[66px] leading-none font-primary mb-9'>Let Your Home Be Unique</h1>
    <p className='mb-8'>
    There are many variations of the passages of lorem Ipsum from available,variations of the passages.
    </p>
    <button className='btn btn-primary mx-auto xl:mx-0'>
    Get free estimation <i class="ri-arrow-right-line text-accent font-bold"></i>
    </button>
  </div>
</div>
</section>
  )
}

export default Hero
