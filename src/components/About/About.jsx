import React from 'react';
import AboutImg from "../../assets/about/img.png"

const About = () => {
  return (
    <section className='about mt-[80px] lg:mt-[200px] relative z-20'>
    <div className='container mx-auto xl:px-1'>
        <div className='flex flex-col text-center xl:text-left xl:flex-row justify-between items-center gap-8 xl:gap-[77px]'>
            <div className='flex-1 order-2 xl:order-none'>
                <h2 className='about__title font-primary md:text-[50px] leading-none my-9 xl:mb-[80px]'>We Create The Art Of Stylish Living Stylishly</h2>


                <p className='about__titles xl:mt-[80px] my-6 text-2xl'>It is a long established fact that a reader will be distracted by the of readable content of a page when lookings at its layouts the points of using that it has a more-or-less normal.</p>

                <div className='flex items-center justify-center xl:justify-start gap-5 xl:mt-12'>
                    <div className=' bg-accent/15 w-[93px] h-[93px] rounded-full flex justify-center items-center'>
                        <i className="ri-phone-fill text-accent text-4xl"></i>
                    </div>
                    <div className='text-left'>
                    <div className=' text-2xl font-bold'>09234 2345 45</div>
                    <div>Call Us Anytime</div>
                    </div>
                </div>
                <button className='btn btn-primary'>Get Free Estimation
                <i className="ri-arrow-right-line text-accent"></i></button>
            </div>
            <div className='about__img order-1 xl:order-none max-w-[453px] mx-auto xl:max-w-none xl:mx-0'>
                <img src={AboutImg}/>
                </div>
        </div>
    </div>
</section>
  )
}

export default About
