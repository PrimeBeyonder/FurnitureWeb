import React from 'react';
import work1 from "../../assets/work/01.png"
import work2 from "../../assets/work/02.png"
import work3 from "../../assets/work/03.png"
import work4 from "../../assets/work/04.png"

const Work = () => {
  return (
    <section className='work mt-[80px] lg:mt-[200px] relative z-20'>
<div className="container mx-auto xl:px-0">

<div className=' text-center mb-24'>
    <h2 className='work__title mb-4 text-[50px] leading-right font-primary text-primary'>
        Follow Our Projects
    </h2>
    <p className='work__subtitle max-w-3xl mx-auto'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, necessitatibus natus. Voluptates sapiente sequi et quam dolore soluta consectetur.
    </p>
</div>

<div className='work__grid grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-x-[100px] gap-y-[56px]'>
<div className='w-full max-w-[549px] h-full mx-auto xl:px-0'>
<img className='mb-7' src={work1} />
<div className='flex justify-between items-center w-full'>
    <div>
        <h3 className='text-[25px] font-primary mb-3 text-primary'>Modern Kitchen</h3>
        <p>Decor/Architecture</p>
    </div>
    <button className=' bg-accent-secondary hover:bg-accent w-[70px] h-[70px] rounded-full'>
<i className="ri-arrow-right-s-line text-3xl font-bold duration-300 transition-all text-primary"></i>
    </button>
</div>
</div>
<div className='w-full max-w-[549px] h-full mx-auto'>
<img className='mb-7' src={work2} />
<div className='flex justify-between items-center w-full'>
    <div>
        <h3 className='text-[25px] font-primary mb-3 text-primary'>Modern Kitchen</h3>
        <p>Decor/Architecture</p>
    </div>
    <button className=' bg-accent-secondary hover:bg-accent w-[70px] h-[70px] rounded-full'>
<i className="ri-arrow-right-s-line text-3xl font-bold duration-300 transition-all text-primary"></i>
    </button>
</div>
</div>
<div className='w-full max-w-[549px] h-full mx-auto'>
<img className='mb-7' src={work3} />
<div className='flex justify-between items-center w-full'>
    <div>
        <h3 className='text-[25px] font-primary mb-3 text-primary'>Modern Kitchen</h3>
        <p>Decor/Architecture</p>
    </div>
    <button className=' bg-accent-secondary hover:bg-accent w-[70px] h-[70px] rounded-full'>
<i className="ri-arrow-right-s-line text-3xl font-bold duration-300 transition-all text-primary"></i>
    </button>
</div>
</div>
<div className='w-full max-w-[549px] h-full mx-auto'>
<img className='mb-7' src={work4} />
<div className='flex justify-between items-center w-full'>
    <div>
        <h3 className='text-[25px] font-primary mb-3 text-primary'>Modern Kitchen</h3>
        <p>Decor/Architecture</p>
    </div>
    <button className=' bg-accent-secondary hover:bg-accent w-[70px] h-[70px] rounded-full'>
<i className="ri-arrow-right-s-line text-3xl font-bold text-primary"></i>
    </button>
</div>
</div>
</div>
</div>
    </section>
  )
}

export default Work
