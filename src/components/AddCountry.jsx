import '../scss/components/AddCountry.scss';

function AddCountry({ onChangeName, onChangeCapital, onChangeContinent }) {
  const handleNameInput = (event) => {
    const nameValue = event.target.value;
    onChangeName(nameValue);
  };
  const handleCapitalInput = (event) => {
    const capitalValue = event.target.value;
    onChangeCapital(capitalValue);
  };
  const handleContinentInput = (event) => {
    const continentValue = event.target.value;
    onChangeContinent(continentValue);
  };
  return (
    <form>
      <input
        type='text'
        placeholder='Nombre país...'
        onChange={handleNameInput}
      />
      <input
        type='text'
        placeholder='Capital...'
        onChange={handleCapitalInput}
      />
      <input
        type='text'
        placeholder='Continente...'
        onChange={handleContinentInput}
      />
      <button type='submit'>Añadir País</button>
    </form>
  );
}

export default AddCountry;
