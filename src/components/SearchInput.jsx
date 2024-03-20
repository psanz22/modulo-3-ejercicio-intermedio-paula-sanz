import '../scss/components/SearchInput.scss';
import PropTypes from 'prop-types';

function SearchInput({ searchCountries, onChangeContinent }) {
  const handleSearch = (event) => {
    const inputValue = event.target.value;
    searchCountries(inputValue);
  };
  const handleContinent = (event) => {
    onChangeContinent(event.target.value);
  };
  return (
    <>
      <label htmlFor='name'>Por país</label>
      <input
        id='name'
        className='inputSearch'
        type='text'
        placeholder='busca país...'
        onChange={handleSearch}
      />
      <label htmlFor='continent'>Por continente</label>
      <select onChange={handleContinent} id='continent'>
        <option value='all'>All</option>
        <option value='Africa'>África</option>
        <option value='North America'>Norte América</option>
        <option value='South America'>Sur América</option>
        <option value='Asia'>Asia</option>
        <option value='Europe'>Europa</option>
        <option value='Oceania'>Oceanía</option>
        <option value='Antarctica'>Antártica</option>
      </select>
    </>
  );
}
SearchInput.propTypes = {
  searchCountries: PropTypes.func,
};

export default SearchInput;
