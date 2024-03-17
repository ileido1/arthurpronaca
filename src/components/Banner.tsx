import pataimg from '../assets/images/pata-arthur.png'
export function Banner() {
  return (
    <div className="gap-6 text-center md:text-start flex flex-col justify-center md:justify-start mt-10">

    <p className="font-normal  text-[22px] leading-8 md:text-[40px] md:leading-[48px] text-brown ">
        Con tus compras Pro-can contribuyes a la donación de{" "}
        <span className="font-bold"> 150.000 raciones de alimento</span> para
        los perritos más necesitados.
      </p>
      <img src={pataimg} alt="img-pata" className='block  md:hidden w-96' />

      <p className="font-bold text-[24px]  md:text-4xl text-red ">
        ¡Súmate y ayúdanos a llegar al objetivo!
      </p>
      <p className="font-normal text-base md:text-[28px] text-brown ">
        Del 15 de marzo al 31 de mayo
      </p>
      <div className="gap-3">
      <p className="font-bold text-[24px] md:text-[40px] text-brown text-center ">
        MIRA EL AVANCE DE LAS DONACIONES
      </p>
      <p className="font-normal text-base md:text-[30px] text-brown  text-center">
        Nuestro objetivo son 150.000 raciones de alimento.
      </p>
      </div>
      
    </div>

  )
}