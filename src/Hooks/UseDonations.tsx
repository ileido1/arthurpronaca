import { useState, useEffect } from  "react";
import { marks } from '../const';


function convertirFecha(fechaString: string): string {
  // Separar la fecha en día, mes y año
  const [año, mes,dia] = fechaString.split('-').map(Number);

  // Crear un objeto Date con la fecha
  const fecha = new Date(2000 + año, mes - 1, dia);

  // Meses en español
  const meses: string[] = [
      "enero", "febrero", "marzo", "abril", "mayo", "junio",
      "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"
  ];

  // Obtener el nombre del mes
  const nombreMes: string = meses[fecha.getMonth()];

  // Construir la cadena de texto con el nuevo formato
  const fechaFormateada: string = `${dia} de ${nombreMes}`;

  return fechaFormateada;
}


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
        const fechaTransformada: string = convertirFecha(data[0].FECHA_DONACION);

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
        setDatePercentage(fechaTransformada);
      })
      .catch((error) => console.error("Error al recuperar los datos:", error));
  }, []);

  return { fillPercentage, datePercentage };
};

export default useDonationPercentage;
