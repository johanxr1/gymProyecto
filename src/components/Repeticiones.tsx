export default function Repeticiones({ setCountRepes, countRepes }: any) {
  return (
    <>
      <label htmlFor="repeEjercicio">Repeticioes {countRepes}</label>
      <input
        type="range"
        id="repeEjercicio"
        defaultValue={1}
        min={1}
        max={20}
        onChange={(e) => setCountRepes(e.target.valueAsNumber)}
      />
    </>
  );
}
