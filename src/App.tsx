import { useState, useRef } from "react";
import "./App.css";
import Repeticiones from "./components/Repeticiones";
import BotonSerie from "./components/BotonSerie";
import PesoInput from "./components/pesoInput";

function App() {
  const [countSeries, setCountSeries] = useState(1);
  const [countRepes, setCountRepes] = useState(1);
  var valoresEjercicio: any[] = [];
  const nombreRef = useRef<HTMLInputElement | null>(null);
  const pesoRef = useRef<HTMLInputElement | null>(null);

  function addSerie() {
    valoresEjercicio[0] = nombreRef.current?.value;
    valoresEjercicio[1] = pesoRef.current?.value;
    valoresEjercicio[2] = countSeries;
    valoresEjercicio[3] = countRepes;
    console.log(valoresEjercicio);
  }

  return (
    <>
      <h1>Lista de ejercicios</h1>
      <div className="card">
        <p>Ejercicio N1</p>
        <div className="wrapper">
          <label htmlFor="nombreEjercicio">Nombre del ejercicio</label>
          <input
            id="nombreEjercicio"
            ref={nombreRef}
            type="text"
            defaultValue={"Ejercicio 1"}
          />
          <PesoInput
            pesoRef={pesoRef}
            defaultValue={1}
            texto={"Peso actual"}
            id={"pesoEjercicio"}
          />
          <label htmlFor="seriesEjercicio">Serie actual: {countSeries}</label>
          <div className="df ma gp-1">
            <button
              onClick={() => {
                countSeries > 1 ? setCountSeries(countSeries - 1) : null;
              }}
            >
              -
            </button>
            <BotonSerie
              countSeries={countSeries}
              setCountSeries={setCountSeries}
              max={20}
              valorOperar={1}
              texto={"+"}
              callBack={addSerie}
            />
          </div>
          <Repeticiones setCountRepes={setCountRepes} countRepes={countRepes} />
        </div>
      </div>
    </>
  );
}

export default App;
