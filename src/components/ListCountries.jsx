import Country from './Country';
import '../scss/components/ListCountries.scss';
import PropTypes from 'prop-types';

function ListCountries({ countriesData }) {
  return (
    <div className='list'>
      {countriesData.map((country, index) => {
        return <Country countryData={country} key={index} />;
      })}
    </div>
  );
}
ListCountries.propTypes = {
  countriesData: PropTypes.array,
};

export default ListCountries;
