import arthurpelicula from "../assets/images/arthurPelicula.png";
import pelicula from "../assets/images/pelicula.png";
import union from "../assets/images/Union.png";
import ModalVideo from "./ModalVideo";
import  trailer from "../assets/images/trailer.jpg";
import promo from "../assets/images/promo.jpg";
export function VideoSection() {
  return (
    <>
      <div className="flex justify-center items-center">
      <ModalVideo img={promo} urlvideo="https://www.youtube.com/embed/SdEjjG86_5M?si=JV2cIguq_J0SGthB" />

      </div>
      <div className="grid md:grid-cols-3 gap-4 mt-10">
        <div className="flex justify-center flex-col items-center">
          <img src={arthurpelicula} alt="" className="hidden md:block" />
          <img src={pelicula} alt="" className="md:hidden max-w-60" />
          <p className="font-bold text-2xl md:hidden text-brown  text-center">
            Mira el trailer de la <br />
            película inspirada <br />
            en esta historia
          </p>
        </div>
        <div className="hidden md:flex items-center flex-col justify-center">
          <p className="font-bold text-3xl  text-brown  text-left">
            Mira el trailer de la <br />
            película inspirada <br />
            en esta historia
          </p>
          <img src={union} alt="" className="self-end" />
        </div>
        <div>
          <ModalVideo img={trailer} urlvideo="https://www.youtube.com/embed/bInIHhOO-YQ?si=wjtLoE2lFSMHbU1F" />
        </div>
      </div>
    </>
  );
}
