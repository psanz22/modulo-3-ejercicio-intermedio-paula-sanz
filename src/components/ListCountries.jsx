import Country from './Country';
import '../scss/components/ListCountries.scss';

function ListCountries({ countriesData }) {
  return (
    <div className='list'>
      {countriesData.map((country, index) => {
        return <Country countryData={country} key={index} />;
      })}
    </div>
  );
}

export default ListCountries;
