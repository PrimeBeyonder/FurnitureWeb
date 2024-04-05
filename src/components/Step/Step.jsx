import React from 'react'

const Step = () => {
  return (
    <section className='steps mt-[80px] lg:mt-[200px] relative z-20'>
        <div className='container mx-auto'>
            <div className='grid grid-cols-1 gap-12 xl:grid-cols-3'>
                <div className='steps__step text-center'>
                    <div className='mb-4'>
                    <i className="ri-compasses-line text-5xl text-accent"></i>
                    </div>
                    <h3 className='text-[25px] font-primary '>Project Planning</h3>
                    <p className='my-5 max-w-md mx-auto'>There are many variations of the passages of lorem Ipsum from available, majority.</p>
                    <a href="#" className='font-medium'>Read More <i class="ri-arrow-right-line text-accent text-2xl"></i></a>
                </div>
                <div className='steps__step text-center'>

                <div className='mb-4'>
                    <i className="ri-magic-line text-5xl text-accent"></i>
                </div>
                    <h3 className='text-[25px] font-primary '>Gaining Materials</h3>
                    <p className='my-5 max-w-md mx-auto'>There are many variations of the passages of lorem Ipsum from available, majority.</p>
                    <a href="#" className='font-medium'>Read More <i class="ri-arrow-right-line text-accent text-2xl"></i></a>
                </div>
                <div className='steps__step text-center'>
                <div className='mb-4'>
                    <i className="ri-tools-line text-5xl text-accent"></i>
                    </div> 
                    <h3 className='text-[25px] font-primary '>Project Execution</h3>
                    <p className='my-5 max-w-md mx-auto'>There are many variations of the passages of lorem Ipsum from available, majority.</p>
                    <a href="#" className='font-medium'>Read More <i class="ri-arrow-right-line text-accent text-2xl"></i></a>
                </div>
            </div>
        </div> 
    </section>
  )
}

export default Step
