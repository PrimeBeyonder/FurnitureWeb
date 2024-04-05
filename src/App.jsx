import Header from "./components/Header/Header"
import Hero from "./components/Hero/Hero"
import Step from "./components/Step/Step"

function App() {


  return (
    <>
    <Header/>
   <main className=" max-w-[1920px] mx-auto bg-white overflow-hidden">
    <div className=" xl:bg-grid xl:bg-center xl:bg-repeat-y fixed top-0 bottom-0 left-0 right-0 z-10" ></div>
    <Hero/>
    <Step/>
<div className=" h-[3000px]">

</div>
   </main>
   </>
  )
}

export default App
