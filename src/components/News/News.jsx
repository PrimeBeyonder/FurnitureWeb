import React from 'react';
import Img1 from "../../assets/news/01.png";
import Img2 from "../../assets/news/02.png";
import Img3 from "../../assets/news/03.png";


const News = () => {
  return (
   <section className='news mt-[80px] lg:mt-[200px] relative z-20 '>
<div className="container mx-auto px-0">

    <div className=' max-w-[810px] mx-auto text-center mb-[52px]'>
        <h2 className='text-[50px] leading-right font-primary news__title mb-10'>
            Articles And News
        </h2>
            <p className='news__titles container'>
            It is a long established fact that a reader will be distracted by the of readable content of a page when lookings at its layouts the points of using.
            </p>
    </div>
    <div className="news__grid grid grid-cols-1 gap-[50px] xl:grid-cols-3 lg:grid-cols-2">
<div className='news__item w-full max-w-[383px] h-[520px] border border-primary/20 rounded-[63px] p-[20px] hover:bg-accent-secondary transition-all group cursor-pointer mx-auto xl:mx-0'>
    <img className='mb-5' src={Img1} />
<div className='flex flex-col gap-[30px]'>
    <h3 className='text-[25px] font-primary'>
    Let’s Get Solution For Building Construction Work
    </h3>
    <div className='flex items-center justify-between'>
        <p className=' text-base'>
            22 June,2024
        </p>
        <button className=' bg-accent-secondary w-[52px] h-[52px] rounded-full group-hover:bg-white transition-all'>
<i className="ri-arrow-right-s-line text-3xl text-primary pl-1"></i>
        </button>
    </div>

</div>
</div>
<div className='news__item w-full max-w-[383px] h-[520px] border border-primary/20 rounded-[63px] p-[20px] hover:bg-accent-secondary transition-all group cursor-pointer mx-auto xl:mx-0'>
    <img className='mb-5' src={Img2} />
<div className='flex flex-col gap-[30px]'>
    <h3 className='text-[25px] font-primary'>
    Best For Any Office & Business Interior 
    </h3>
    <div className='flex items-center justify-between'>
        <p className=' text-base'>
            22 June,2024
        </p>
        <button className=' bg-accent-secondary w-[52px] h-[52px] rounded-full group-hover:bg-white transition-all'>
<i className="ri-arrow-right-s-line text-3xl text-primary pl-1"></i>
        </button>
    </div>

</div>
</div>
<div className='news__item w-full max-w-[383px] h-[520px] border border-primary/20 rounded-[63px] p-[20px] hover:bg-accent-secondary transition-all group cursor-pointer mx-auto xl:mx-0'>
    <img className='mb-5' src={Img3} />
<div className='flex flex-col gap-[30px]'>
    <h3 className='text-[25px] font-primary'>
    Low Cost Latest Invented Interior Designing
    </h3>
    <div className='flex items-center justify-between'>
        <p className=' text-base'>
            22 June,2024
        </p>
        <button className=' bg-accent-secondary w-[52px] h-[52px] rounded-full group-hover:bg-white transition-all'>
<i className="ri-arrow-right-s-line text-3xl text-primary pl-1"></i>
        </button>
    </div>

</div>
</div>


    </div>
</div>
   </section>
  )
}

export default News
