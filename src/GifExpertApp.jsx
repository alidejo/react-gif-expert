import { useState } from "react"; // librería para el Hook "useState"
import { AddCategory, GifGrid } from "./components"; // Utilizamos el archivo de barril "index.js" en la carpeta "components".
// Por que utilizamos un archivo de barril, no es necesario importar cada componente.
// import { AddCategory } from "./components/AddCategory";
// import { GifGrid } from "./components/GifGrid";

export const GifExpertApp = () => {
  // A continuación usamos un Hook
  const [categories, setCategories] = useState(["One Puch"]);

  // const onAddCategory = () => {
  // setCategories((categories) => ["Valorant", ...categories]); // Ingresa un nuevo elemento al inicio
  // setCategories(categories => [...categories, 'Valorant']);  // Ingresa un nuevo elemento al final
  // setCategories(cat => [...categories, 'Valorant']);
  // };

  const onAddCategory = (NewCategory) => {
    // console.log(NewCategory);

    if (categories.includes(NewCategory)) return;

    setCategories([NewCategory, ...categories]);
  };

  // console.log('Las Categorias son: ' + categories);

  return (
    <>
      {/* Titulo */}
      <h1>Gif Expert App</h1>
      {/* Input */}
      {/* <AddCategory setCategories= { setCategories } /> */}
      <AddCategory onNewCategory={(value) => onAddCategory(value)} />
      {/* <button onClick={onAddCategory}>Agregar</button> */}
      {/* Listado de Gif */}
      {categories.map((category) => (
        // La función "map", itera en la categories.
        // return <li key={category}>{category}</li>;
        <GifGrid key={category} category={category} />
      ))}
      {/* Gif Items */}
    </>
  );
};
