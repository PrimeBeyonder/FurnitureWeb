import React from 'react'

const Contact = () => {
  return (
   <section className='contact mt-[80px] lg:mt-[200px] relative z-20'>
    <div className="contact__container container mx-auto bg-primary sm:rounded-[55px] py-[80px]">
       <div className='contact__text max-w-[640px] mx-auto text-center'>
        <h2 className='text-white mb-5 text-[50px] leading-right font-primary'>
Do You Want To Join Interno?
        </h2>
        <p className='text-white mb-8 max-w-sm xl:max-w-none mx-auto'>It is a long established fact will be distracted</p>
        <button className='btn btn-accent mx-auto'>
Contact With Us <i class="ri-arrow-right-line text-primary"></i>
        </button>
       </div>
    </div>
   </section>
  )
}

export default Contact
