import Logo from "../assets/images/logo.png";
import Procanlogo from "../assets/images/procanlogo";
import pataimg from "../assets/images/pata-arthur.png";

export default function Logos() {
  return (
    <div className="">
      <div className="container grid grid-cols-1 md:grid-cols-2  justify-center">
        <div className=" text-center flex items-center flex-col justify-center md:text-start md:items-start md:justify-normal gap-1 ">
          <img src={Logo} alt="" className="max-w-56 mb-5" />
          <h3 className=" text-2xl font-bold text-lightbrown leading-[32px] md:text-[50px] md:leading-none md:mt-16">
            DESCUBRE LA HUELLA DE
          </h3>
          <h1 className="font-bold text-[85px] text-lightbrown  leading-[112px] md:text-[160px] md:leading-none">
            ARTHUR
          </h1>
          <h5 className="font-bold text-base text-lightbrown leading-[22px]  md:text-[32px] md:leading-none  uppercase">
            La huella del amor incondicional
          </h5>
        </div>
        <div className="flex flex-col items-end">
          <Procanlogo></Procanlogo>
          <img src={pataimg} alt="img-pata" className="hidden md:block w-full px-5" />
        </div>
      </div>
    </div>
  );
}
