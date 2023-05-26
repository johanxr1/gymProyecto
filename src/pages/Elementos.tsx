import Lista from "../components/Lista";

export default function Elementos() {
  var listaElementos = ["Pecho", "Hombros", "Bicepts", "Triceps"];
  return (
    <>
      <Lista
        arregloLista={listaElementos}
        titulo={"Partes"}
        pagina={"ejercicio"}
        subpagina={false}
      />
    </>
  );
}
