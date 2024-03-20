import '../scss/components/SearchInput.scss';
import PropTypes from 'prop-types';

function SearchInput({ searchCountries }) {
  const handleSearch = (event) => {
    const inputValue = event.target.value;
    searchCountries(inputValue);
  };
  return (
    <>
      <input
        className='inputSearch'
        type='text'
        placeholder='busca país...'
        onChange={handleSearch}
      />
    </>
  );
  SearchInput.propTypes = {
    searchCountries: PropTypes.string,
  };
}

export default SearchInput;
