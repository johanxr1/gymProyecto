import Lista from "../components/Lista";
import { useLocation } from "react-router-dom";

export default function Bloques() {
  var listaBloques = ["Eje1", "Eje2", "Eje3", "Eje4"];

  let { state } = useLocation();

  return (
    <>
      <Lista
        arregloLista={listaBloques}
        titulo={
          state.ejercicio ? `Variantes de ` + state.ejercicio : "Variantes"
        }
        pagina={"ejercicio"}
        subpagina={true}
      />
    </>
  );
}
