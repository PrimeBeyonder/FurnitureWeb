import React from 'react';
import Brand1 from "../../assets/brands/01.svg";
import Brand2 from "../../assets/brands/02.svg";
import Brand3 from "../../assets/brands/03.svg";
import Brand4 from "../../assets/brands/04.svg";
import Brand5 from "../../assets/brands/05.svg";

const Brands = () => {
  return (
   <section className='brands mt-[80px] lg:mt-[200px] relative z-20'>
    <div className='container mx-auto'>
        <div className='flex flex-col xl:flex-row justify-between items-center gap-12'>
            <img className='brands__img' src={Brand1}  />
            <img className='brands__img' src={Brand2}  />
            <img className='brands__img' src={Brand3}  />
            <img className='brands__img' src={Brand4} />
            <img className='brands__img' src={Brand5}  />
        </div>
    </div>
   </section>
  )
}

export default Brands
