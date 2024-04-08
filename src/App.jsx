import About from "./components/About/About"
import Brands from "./components/Brands/Brands"
import Contact from "./components/Contact/Contac"
import Footer from "./components/Footer/Footer"
import Header from "./components/Header/Header"
import Hero from "./components/Hero/Hero"
import News from "./components/News/News"
import Stats from "./components/Stats/Stats"
import Step from "./components/Step/Step"
import Testimonial from "./components/Testimonial/Testimonial"
import Work from "./components/Work/Work";
import ScrollReveal from 'scrollreveal';
import { useEffect } from "react"

function App() {

  useEffect(()=>{
    const sr = ScrollReveal({
      origin: "bottom",
      distance: "60px",
          duration: 1500,
          reset: true,
          delay: 300,
    });
    sr.reveal(".hero__text" , {origin: "top"});
    sr.reveal(".steps__step" , {distance: "60px" , interval: 100});
    sr.reveal(".about__img" , {origin: "right" , delay: 600});
    sr.reveal(".about__text" , {origin: "left"});
    sr.reveal(".testimonial__bg" , {delay:700});
    sr.reveal(".testimonial__slider" , {delay:1000});
    sr.reveal(".testimonial__text");
    sr.reveal(".brands__img" , {delay:600 , distance:"100px" , interval: 100});
    sr.reveal(".work__title");
    sr.reveal(".work__subtitle" , {delay: 700});
    sr.reveal(".work__grid" , {interval: 100});
    sr.reveal(".stats");
    sr.reveal(".stats__item" , {distance:"100px", interval:100});
    sr.reveal(".news__title");
    sr.reveal(".news__titles" ,{delay: 200});
    sr.reveal(".news__item" , {delay: 600, distance: "70px", delay:800});
    sr.reveal(".contact__container");
    sr.reveal(".about__title");
    sr.reveal(".about__titles", {delay:400});
    sr.reveal(".footer__item", {interval:200});
    sr.reveal(".footer__copyright", {delay:300});


    },[])

  return (
    <>
    <Header/>
   <main className=" max-w-[1920px] mx-auto bg-white overflow-hidden">
    <div className=" xl:bg-grid xl:bg-center xl:bg-repeat-y fixed top-0 bottom-0 left-0 right-0 z-10" ></div>
    <Hero/>
    <Step/>
    <About/>
    <Testimonial/>
    <Brands/>
    <Work/>
    <Stats/>
    <News/>
    <Contact/>
    <Footer/>

   </main>
   </>
  )
}

export default App
