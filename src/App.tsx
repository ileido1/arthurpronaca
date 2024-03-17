import { AboutArthur } from "./components/AboutArthur";
import { Banner } from "./components/Banner";
import { Footer } from "./components/Footer";
import { VideoSection } from "./components/VideoSection";
import Logos from "./components/logos";
import SliderHuella from "./components/SliderHuella";
import { LocationSection } from "./components/LocationSection";
export default function App() {
  
  return (
    <>
   <div className="container max-w-7xl mx-auto  px-2 sm:px-6 lg:px-8 mt-8">
    <Logos></Logos>
    <Banner></Banner>
    <SliderHuella></SliderHuella>
    <AboutArthur></AboutArthur>
    <VideoSection></VideoSection>
    <LocationSection></LocationSection>
    </div> 
    <Footer></Footer>
    </>
  )
}