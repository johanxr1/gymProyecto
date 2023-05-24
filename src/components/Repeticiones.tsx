export default function Repeticiones({
  setCountRepes,
  countRepes,
  texto,
  min,
  max,
}: any) {
  return (
    <>
      <label htmlFor="repeEjercicio">
        {texto} {countRepes}
      </label>
      <input
        type="range"
        id="repeEjercicio"
        defaultValue={1}
        min={min || 1}
        max={max || 20}
        onChange={(e) => setCountRepes(e.target.valueAsNumber)}
      />
    </>
  );
}
