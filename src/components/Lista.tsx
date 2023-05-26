import { Link } from "react-router-dom";

function Lista({ arregloLista, titulo, pagina, subpagina }: any) {
  return (
    <>
      <h1>{titulo}</h1>
      <ul className="tx">
        {arregloLista.map((item: any, i: any) => (
          <li key={i}>
            {" "}
            {
              <Link
                to={pagina + "/" + (subpagina ? item : "")}
                state={{ ejercicio: item }}
              >
                {item}
              </Link>
            }
          </li>
        ))}
      </ul>
    </>
  );
}

export default Lista;
