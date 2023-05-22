import { useState, useRef } from "react";
import "./App.css";

function App() {
  const [countSeries, setCountSeries] = useState(1);
  const [countRepes, setCountRepes] = useState(1);
  const nombreRef = useRef<HTMLInputElement>(null);
  const pesoRef = useRef<HTMLInputElement>(null);
  const [countSerie, setCountSerie] = useState({
    ejercicio: "Ejercicio 1" as string,
    peso: 1 as number,
    series: 1 as number,
    repeticiones: 1 as number,
  });
  function addSerie() {
    setCountSerie({
      ...countSerie,
      ejercicio: nombreRef?.current?.value || "Ejercicio 1",
      peso: pesoRef?.current?.value || 1,
      series: countSeries,
      repeticiones: countRepes,
    });
    console.log(countSerie);
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
          <label htmlFor="pesoEjercicio">Peso</label>
          <input
            id="pesoEjercicio"
            ref={pesoRef}
            type="number"
            defaultValue={1}
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
            <button
              onClick={() => {
                countSeries < 20 ? setCountSeries(countSeries + 1) : null;
                addSerie();
              }}
            >
              {" "}
              +{" "}
            </button>
          </div>
          <label htmlFor="repeEjercicio">Repeticioes {countRepes}</label>
          <input
            type="range"
            id="repeEjercicio"
            defaultValue={1}
            min={1}
            max={20}
            onChange={(e) => setCountRepes(e.target.valueAsNumber)}
          />
        </div>
      </div>
    </>
  );
}

export default App;
