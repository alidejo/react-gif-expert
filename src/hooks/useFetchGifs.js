import { useState, useEffect } from "react";
import { getGifs } from "../helpers/getGifs";

// Un Hook, no es más que una función, miremos:
export const useFetchGifs = ({ category }) => {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getImages = async () => {
    const newImage = await getGifs({ category });
    setImages(newImage);
    setIsLoading(false);
  };

  // useEffect, hace que no se recarge dos veces el getGifs, que es para este ejemplo la data.
  // a demás con el comentario de la etiqueta <React.StrictMode>, tambien evitamos que reafirme el componente,
  // ya que reafirmar el componente es ejecutarlo de nuevo, por eso la etiqueta <React.StrictMode>, se usa
  // solo en desarrollo.
  // Nota: el comportamiento de reafirmar de la etiqueta <React.StrictMode>, no afecta en producción, ya que en
  // producción la reafirmación no se ejecuta.
  useEffect(() => {
    // getGifs(category);
    getImages();
  }, []);

  // Cuando el nombre del item del objeto es igual al nombre de la variable que se le asignando,
  // no es necesario escribir el mismo nombre dos veces como lo vemos a continuación:
  return {
    images,
    isLoading,
  };

  // Como el nombre del item del objeto es igual al nombre de la variable que se le asigna,
  // no es necesario hacer esto:
  //   return {
  //     images: images,
  //     isLoading: true,
  //   };
};
