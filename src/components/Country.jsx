import '../scss/components/Country.scss';
import PropTypes from 'prop-types';

function Country({ countryData }) {
  return (
    <div className='card'>
      <h2>{countryData.flag}</h2>
      <h3>{countryData.name.official}</h3>
      <p>{countryData.capital}</p>
      <p>{countryData.continents}</p>
    </div>
  );
}
Country.propTypes = {
  countryData: PropTypes.object,
};
export default Country;
