import '../scss/components/SearchInput.scss';

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
}

export default SearchInput;
