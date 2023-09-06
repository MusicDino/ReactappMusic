import * as func from '../Modules/functions'

const Main = () => {
  return (
    <>
      <div>
      <h1>Moj osobni main</h1>
      <h3>Funkcija One gives {func.one()}</h3>
      <h3>Funkcija Two gives {func.two()}</h3>
      <h3>Funkcija Three gives {func.three()}</h3>
      </div>
    </>
  );
}

export default Main;