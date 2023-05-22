export default function BotonSerie({
  countSeries,
  setCountSeries,
  max,
  valorOperar,
  texto,
  callBack,
}: any) {
  return (
    <>
      <button
        onClick={() => {
          countSeries < max ? setCountSeries(countSeries + valorOperar) : null;
          callBack();
        }}
      >
        {texto}
      </button>
    </>
  );
}
