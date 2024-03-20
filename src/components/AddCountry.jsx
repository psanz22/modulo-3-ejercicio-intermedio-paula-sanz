import '../scss/components/AddCountry.scss';
function AddCountry({ addCountry }) {
  const handleNameInput = (event) => {
    const nameValue = event.target.value;
    addCountry(nameValue);
  };
  const handleCapitalInput = (event) => {
    const capitalValue = event.target.value;
    addCountry(capitalValue);
  };
  const handleContinentInput = (event) => {
    const continentValue = event.target.value;
    addCountry(continentValue);
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
