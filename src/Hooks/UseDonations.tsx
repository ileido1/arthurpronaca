import { useState, useEffect } from  "react";
import { marks } from '../const';

const useDonationPercentage = () => {
  const [fillPercentage, setFillPercentage] = useState<number>(0);
  const [datePercentage, setDatePercentage] = useState<string>('');

  useEffect(() => {
    fetch("https://arthur.procan.com.ec/sandbox/donaciones.php")
      .then((response) => response.json())
      .then((data) => {
        const porcentaje = (data[0].CANTIDAD_DONACION / 150000) * 100;
        let nuevoRango = 0;
        let encontrado: boolean = false;

        marks.forEach((mark, index) => {
          if (!encontrado) {
            if (index === marks.length - 1) {
              nuevoRango = mark.value;
              encontrado = true;
            } else if (porcentaje <= mark.value) {
              nuevoRango = porcentaje;
              encontrado = true;
            }
          }
        });
        setFillPercentage(nuevoRango);
        setDatePercentage(data[0].FECHA_DONACION);
      })
      .catch((error) => console.error("Error al recuperar los datos:", error));
  }, []);

  return { fillPercentage, datePercentage };
};

export default useDonationPercentage;
