import About from "./components/About/About"
import Brands from "./components/Brands/Brands"
import Contac from "./components/Contact/Contac"
import Header from "./components/Header/Header"
import Hero from "./components/Hero/Hero"
import News from "./components/News/News"
import Stats from "./components/Stats/Stats"
import Step from "./components/Step/Step"
import Testimonial from "./components/Testimonial/Testimonial"
import Work from "./components/Work/Work"

function App() {


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
    <Contac/>
<div className=" h-[3000px]">

</div>
   </main>
   </>
  )
}

export default App
