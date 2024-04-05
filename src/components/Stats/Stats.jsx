import React from 'react'

const Stats = () => {
  return (
    <section className='stats mt-[80px] lg:mt-[200px] relative z-20 bg-accent-secondary py-[80px] xl:py-[150px]'>
        <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-12">
                <div className="stats__item mb-5 text-center xl:border-r xl:border-accent">
                    <h3 className='mb-4 text-[50px] lg:text-[66px] leading-none font-primary text-accent'>42</h3>
                    <p>Years Of Experience</p>
                </div>
                <div className="stats__item mb-5 text-center xl:border-r xl:border-accent">
                    <h3 className='mb-4 text-[50px] lg:text-[66px] leading-none font-primary text-accent'>56</h3>
                    <p>Projects Completed</p>
                </div>
                <div className="stats__item mb-5 text-center xl:border-r xl:border-accent">
                    <h3 className='mb-4 text-[50px] lg:text-[66px] leading-none font-primary text-accent'>23</h3>
                    <p>Actve Projects</p>
                </div>
                <div className="stats__item mb-5 text-center xl:border-r xl:border-accent">
                    <h3 className='mb-4 text-[50px] lg:text-[66px] leading-none font-primary text-accent'>78</h3>
                    <p>Happy Customers</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Stats
