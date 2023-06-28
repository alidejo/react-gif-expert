// Only typing " rafc ", I can to create the initial structrure for a functionan component.
import { useState } from "react";

// export const AddCategory = ( {setCategories} ) => {
export const AddCategory = ({ onNewCategory }) => {
  // A continuación usamos un Hook
  const [inputValue, setInputValue] = useState([""]);

  //   const onInputChange = (event) => {
  //     console.log(event.target.value);
  //     setInputValue(event.target.value);
  //   }

  const onInputChange = ({ target }) => {
    // console.log(target.value);
    setInputValue(target.value);
  };

  // Para Evitar el renderizado de la pagina:
  const onSubmit = (event) => {
    event.preventDefault();
    console.log(inputValue);

    // Hace un retorno de carro, y no continua, cuando solo ingresan un enter o una sola letra en el Input
    if (inputValue.trim().length <= 1) return;

    // setCategories(catetories => [inputValue, ...catetories]);
    onNewCategory(inputValue.trim());
    setInputValue(""); // Cada vez que agrega una categoría, se blanquea el Input.
  };

  return (
    // <form onSubmit={(event) => onSubmit(event)}>
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Buscar gifs"
        value={inputValue}
        // onChange={ (event) => onInputChange(event)}
        onChange={onInputChange}
      />
    </form>
  );
};
