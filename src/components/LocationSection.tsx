import { MapaDonaciones } from "./map";
import unionflecha from "../assets/images/Group.svg";

export function LocationSection() {
  return (
    <div className="grid md:grid-cols-2 gap-16 mt-16 mb-16">
      <div className="relative">
        <div className="bg-red p-3 md:py-5 rounded-2xl  gap-3 flex flex-col items-center mx-4">
          <p className="font-normal text-[24px] md:text-[40px]  text-white  text-center ">
            Si quieres formar parte de la donación de alimento,
          </p>
          <p className="font-bold text-[20px] md:text-[34px] text-white  text-center">
            ¡Tu también puedes apoyarnos!
          </p>
          <hr className="text-white h-[2px] w-[80%]" />
          <p className="font-normal text-base md:text-2xl text-white  text-center md:w-[90%]">
            Acércate a uno de nuestros centros de 
            acopio y encantados lo recibiremos.
          </p>
        </div>
        <img
          src={unionflecha}
          alt=""
          className="hidden md:block absolute -right-20 -bottom-12 z-50 "
        />
      </div>

      <div className="">
        <MapaDonaciones></MapaDonaciones>
      </div>
    </div>
  );
}
