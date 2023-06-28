import { GitItem } from "./GitItem";
import { useFetchGifs } from "../hooks/useFetchGifs";

export const GifGrid = ({ category }) => {
  // const [counter, setCounter] = useState(10);

  // Comentamos lo anterior porque vamos a trabajar con CustomeHook:
  const { images, isLoading } = useFetchGifs(category);

  return (
    <>
      <h3>{category}</h3>

      {
        isLoading && ( <h2>Cargando...</h2> )
      }

      {/* <p>Hola Mundo</p> */}
      {/* <h5>{counter}</h5>
      <button onClick={() => setCounter(counter + 1)}>+1</button> */}

      <div className="card-grid">
        {images.map((image) => (
          // con los ... le estamos diciendo que estamos exparciendo sus properties, es decir, le enviamos como
          // parametro todas las propiedades del objeto que hemos recibido.
          <GitItem key={image.id} {...image} />
        ))}
      </div>
    </>
  );
};
