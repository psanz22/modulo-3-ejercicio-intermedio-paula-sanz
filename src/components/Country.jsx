import '../scss/components/Country.scss';
import PropTypes from 'prop-types';

function Country({ countryData }) {
  return (
    <div className='card'>
      <h2>{countryData.flag}</h2>
      <h3>{countryData.name.common}</h3>
      <p>{countryData.capital[0]}</p>
      <p>{countryData.continents[0]}</p>{' '}
      {/* Aquí hay que poner los corchetes porque continents y capital es un array, no me dio error pero la forma correcta de hacerlo es esta*/}
    </div>
  );
}
Country.propTypes = {
  countryData: PropTypes.object,
};
export default Country;
