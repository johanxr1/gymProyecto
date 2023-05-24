import { Link } from "react-router-dom";

function Lista() {
  var arregloListaPecho = [
    "Press de banca",
    "Press inclinada",
    "Paralelas",
    "apertura",
  ];
  return (
    <>
      <h1>Pecho</h1>
      <ul className="tx">
        {arregloListaPecho.map((item, i) => (
          <li key={i}> {<Link to={"ejercicio/" + i}>{item}</Link>}</li>
        ))}
      </ul>
    </>
  );
}

export default Lista;
