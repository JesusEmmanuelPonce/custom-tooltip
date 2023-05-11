import { useEffect, useState } from 'react';
import Portal from "../Tercera/Portal"
import "./styles.css";

const Tooltip = ({ buttonRef, children }) => {

  const [coor, setCoor] = useState(null);
  const [dimensions, setDimensions] = useState(null);

  useEffect(() => {

    const updateCoordinates = () => {
      if(!buttonRef) return

      const rect = buttonRef?.current?.getBoundingClientRect();
      const height = buttonRef?.current?.offsetHeight;
      const width = buttonRef?.current?.offsetWidth;
      // console.log(`Coordenadas del elemento: top=${rect.top}, left=${rect.left} bottom=${rect.bottom} right=${rect?.right}`);

      setCoor({
        top: rect.top + height,
        left: rect.left
      })
    }

    // Actualiza las coordenadas iniciales al cargar el componente.
    updateCoordinates();

    // Actualiza las coordenadas cuando cambia el tamaño de la ventana.
    window.addEventListener('resize', updateCoordinates);

    return () => {
      window.removeEventListener('resize', updateCoordinates);
    };

  }, [buttonRef, setCoor])

  return (
    <Portal
      style={{
        top: `${coor?.top}px`,
        left: `${coor?.left}px`,
        position: "absolute"
      }}
    >
      <section className='tooltip'>
        { children }
      </section>
    </Portal>
  )
}

export default Tooltip