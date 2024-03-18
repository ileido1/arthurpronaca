
import Box from "@mui/material/Box";
import huellavector from "../assets/images/Vector.png";
import PlatoVector from "../assets/images/plato.tsx";
import  { SliderThumb } from "@mui/material/Slider";
import { marks } from "../const.tsx";
import useDonationPercentage from "../Hooks/UseDonations.tsx";
import Slider from "@mui/material/Slider";
import { styled } from "@mui/material/styles";

declare module "react" {
  interface InputHTMLAttributes<T> {
    orient?: string;
  }
}
interface AirbnbThumbComponentProps extends React.HTMLAttributes<unknown> {}


export default function SliderHuella() {
  const { fillPercentage, datePercentage } = useDonationPercentage();
  // const handleSliderChange = (_event: Event, newValue: number | number[]) => {
  //   setFillPercentage(newValue as number); // Actualizar el estado con el nuevo valor del Slider
  // };

  const ResponsiveBox = styled(Box)(({ theme }) => ({
    width: 200,
    margin: 6,
    [theme.breakpoints.down('sm')]: {
      width: 150, // ajustar el ancho para dispositivos pequeños
      margin: '50px 3px 3px 90px'  // ajustar el margen para dispositivos pequeños
    },
  }));

const HuellaSlider = styled(Slider)(({ theme }) => ({
  height: 280,
  padding: "13px 0",
  borderRadius: 0,
  width: 10,
  backgroundColor: "#523621",
  color: "#E91D24",
  "&.Mui-disabled ": {
    color: "#E91D24",
},
  "& .MuiSlider-thumb": {
    height: 27,
    width: 27,
    boxShadow: "none",
    backgroundColor: "transparent",
    "& .MuiSlider-thumb::before": {
      boxShadow: "none",
    },
  },
  "& .MuiSlider-track": {
    height: 40,
  },
  "& .MuiSlider-rail": {
    color: theme.palette.mode === "dark" ? "#523621" : "#523621",
    opacity: theme.palette.mode === "dark" ? undefined : 1,
    height: 3,
  },
  "& .MuiSlider-mark": {
    display: "none",
  },
  "& .MuiSlider-markLabel": {
    fontFamily: "Bergen Sans",
    fontSize: 20,
    color: "#523621",
    fontWeight: "bold",
    left: "-160px",
    width: " 141px",
    textAlign: "right",
  },
  "& .MuiSlider-markLabel[data-index='5']": {
    fontSize: "32px",
    color: " #E91D24",
  },
  // Estilos específicos para dispositivos móviles
  '@media (max-width: 768px)': {
    padding: "0 0",
    height : 150,
   // asegurar que ocupe todo el ancho disponible
    "& .MuiSlider-thumb": {
      height: 20, // ajustar el tamaño del thumb para dispositivos móviles
      width: 20, // ajustar el tamaño del thumb para dispositivos móviles
    },
    "& .MuiSlider-markLabel": {
      fontSize: "10px", // ajustar el tamaño de la marca para dispositivos móviles
    },
    "& .MuiSlider-markLabel[data-index='5']": {
      fontSize: "16px", // ajustar el tamaño de la marca activa para dispositivos móviles
    },
  },
}));

  function AirbnbThumbComponent(props: AirbnbThumbComponentProps) {
    const { children, ...other } = props;
    return (
      <SliderThumb {...other}>
        {children}
        <img src={huellavector} width={40} height={40} />
        <div className="absolute left-9 w-28 text-brown font-bold text-[8px] md:text-sm uppercase">
          <span>{datePercentage}</span>
        </div>
      </SliderThumb>
    );
  }
  return (
    <div className="my-10  ">
      
      <div className="flex flex-row h-full justify-center items-end md:items-end">
        <ResponsiveBox >
          <HuellaSlider
            orientation="vertical"
            slots={{ thumb: AirbnbThumbComponent }}
            value={fillPercentage}
            // onChange={handleSliderChange}
            // getAriaValueText={(value) => value.toString()}
            marks={marks}
            disabled
          />
        </ResponsiveBox>
        <PlatoVector fillPercentage={fillPercentage}></PlatoVector>
      </div>
      
     
      
    </div>
  );
}
