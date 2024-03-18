import ig from "../assets/images/ig.png";
import fb from "../assets/images/fb.png";
import tk from "../assets/images/tk.png";
import LOGOPRONACA from "../assets/images/LOGOPRONACA.png";
export function Footer() {
  return (
    <footer className="footer footer-center px-10 py-3 bg-grey flex flex-row justify-between items-end md:items-center gap-8">
      <div className=" flex flex-row gap-2 md:gap-8">
        <a href=" https://www.instagram.com/tqpets_by_pronaca/" target="_blank" rel="noreferrer">
          <img src={ig} alt="instagram"  />
        </a>
        <a href=" https://www.facebook.com/TqPets/" target="_blank" rel="noreferrer">
          <img src={fb} alt="facebook"  />
        </a>
        <a href=" https://www.tiktok.com/@tqpets_by_pronaca" target="_blank" rel="noreferrer">
          <img src={tk} alt="tiktok"   />
        </a>
      </div>
      <div className="copy">
        <p className="text-center text-greyletters text-[8px] md:text-base ">
          CAMPAÑA ACTIVA DEL 15 DE MARZO AL 31 DE MAYO DEL 2024 <br />
          PRONACA 2024 - RESERVADOS TODOS LOS DERECHOS
        </p>
      </div>
      <div className="flex justify-end">
        <a href="" target="_blank" rel="noreferrer">
          <img src={LOGOPRONACA} alt="pronaca" />
        </a>
      </div>
    </footer>
  );
}
