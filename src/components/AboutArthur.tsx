import arthur1 from "../assets/images/arthur1.png";
import arthur2 from "../assets/images/arthur2.png";
import arthur3 from "../assets/images/arthur3.png";
import pataArthur from "../assets/images/pataArthur.svg";
import pataArthur2 from "../assets/images/pataArthur2.svg";
import pataArthur3 from "../assets/images/pataArthur3.svg";
export function AboutArthur() {
  return (
    <>
      <h1 className="font-bold text-[40px] md:text-[86px] text-lightbrown text-center ">
        ¿Quién es Arthur?
      </h1>
      <div className=" grid-cols-3 gap-4 mb-8 hidden md:grid md:mt-10">
        <div className="relative">
          <img src={arthur1} alt="" />
          <img src={pataArthur} alt="" className="absolute bottom-20" />
        </div>
        <div className="relative">
          <img src={arthur2} alt="" />
          <img
            src={pataArthur2}
            alt=""
            className="absolute -top-8 right-[23%]"
          />
        </div>
        <div className="relative">
          <img src={arthur3} alt="" />
          <img
            src={pataArthur3}
            alt=""
            className="absolute bottom-0 right-[30%]"
          />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 p-6">
        <div className="flex flex-col gap-4 md:bg-red md:p-2 md:rounded-xl md:justify-center">
          <div className="bg-red p-2 rounded-xl md:min-h-48 md:bg-[transparent]">
            <p className="font-normal text-[14px] md:text-xl text-white  text-center">
              En 2014, durante el Mundial de Aventura Huairasinchi en Ecuador,
              Mikael Lindnord, líder de un equipo sueco, le ofreció una
              albóndiga en lata a un perro callejero.
            </p>
          </div>
          <div className="md:hidden relative flex justify-center">
            <img src={arthur1} alt=""  className="w-44"/>
            <img src={pataArthur} alt="" className="absolute bottom-[30px] left-[90px] w-11" />
          </div>
        </div>
        <div className="flex flex-col gap-4  md:bg-red md:p-2 md:rounded-xl md:justify-center">
          <div className="bg-red p-2 rounded-xl md:min-h-48 md:bg-[transparent]">
            <p className="font-normal text-[14px] md:text-xl text-white  text-center">
            Desde ese momento, el perro y el equipo fueron inseparables; atravesaron montañas, ríos y lodo juntos hasta llegar a la meta. A este nuevo compañero lo nombraron Arthur.
            </p>
          </div>
          <div className="relative md:hidden flex justify-center">
            <img src={arthur2} alt="" className="w-44"/>
            <img
              src={pataArthur2}
              alt=""
              className="absolute bottom-[20%] right-[20%] w-11"
            />
          </div>
        </div>
        <div className="flex flex-col gap-4  md:bg-red md:p-2 md:rounded-xl md:justify-center">
          <div className="bg-red p-2 rounded-xl md:min-h-48 md:bg-[transparent]">
            <p className="font-normal text-[14px] md:text-xl text-white  text-center">
            Después de la carrera, Mikael adoptó a Arthur y juntos fueron a vivir a Suecia, donde se convirtió en un miembro más de su familia.
            </p>
          </div>
          <div className="relative md:hidden flex justify-center">
            <img src={arthur3} alt="" className="w-44" />
            <img
              src={pataArthur3}
              alt=""
              className="absolute bottom-[20%] left-[20%] w-11"
            />
          </div>
        </div>

        <div className="bg-red p-2 rounded-xl md:min-h-48 flex items-center">
          <p className="font-normal text-[14px] md:text-xl text-white  text-center">
          Durante los años que Arthur acompañó a Mikael se convirtieron en mejores amigos y vivieron muchas aventuras juntos.
          </p>
        </div>
      </div>
    </>
  );
}
