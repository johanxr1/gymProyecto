export default function PesoInput({ pesoRef, defaultValue, texto, id }: any) {
  return (
    <>
      <label htmlFor={id}>{texto}</label>
      <input id={id} ref={pesoRef} type="number" defaultValue={defaultValue} />
    </>
  );
}
