import { Link } from "react-router-dom";

function Lista({ arregloLista, titulo, pagina }: any, subpagina: boolean) {
  return (
    <>
      <h1>{titulo}</h1>
      <ul className="tx">
        {arregloLista.map((item: any, i: any) => (
          <li key={i}>
            {" "}
            {
              <Link to={pagina + "/" + (subpagina == true ? i : "")}>
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
