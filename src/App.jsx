import Header from "./components/Header"
import Hero from "./components/Hero/Hero"

function App() {


  return (
   <>
   <Header/>
   <main className=" max-w-[1920px] mx-auto bg-white overflow-hidden">
    <div className=" xl:bg-grid xl:bg-center xl:bg-repeat-y fixed top-0 bottom-0 left-0 right-0 z-10" ></div>
    <Hero/>
<div className=" h-[3000px]">

</div>
   </main>
   </>
  )
}

export default App
