import React, { useState } from 'react';
import SearchProperty from '../SearchComponent/SearchProperty';
import './PropertyStyles.css';
import axios from 'axios';
import PriceRange from '../PriceRangeComponent/PriceRange';

const PropertInput = ({ onPropertiesFetched }) => {
  const [options, setOptions] = useState([]);
  const [selectedAreas, setSelectedAreas] = useState([]);
  const [selectedPropertyTypes, setSelectedPropertyTypes] = useState([]);
  const [selectedFlatTypes, setSelectedFlatTypes] = useState([]);
  const [ptype, setTypes] = useState([]);
  const [ftype, setFTypes] = useState([]);

  const getAreas =async () => {
   await  axios.get('http://localhost:8800/area')
      .then(response => {
        const areas = response.data.map(item => item.area);
        setOptions(areas);
      })
      .catch(error => {
        console.error('Error fetching options:', error);
      });
  };

  const getPropertyType = () => {
    const types = [
      { 'type': '1 BHK' },
      { 'type': '2 BHK' },
      { 'type': '3 BHK' },
      { 'type': '4 BHK' },
      { 'type': '5+ BHK' }
    ];

    setTypes(types.map(item => item.type));
  };

  const getFlatType = () => {
    const Ftypes = [
      { 'type': 'House' },
      { 'type': 'Villa' },
      { 'type': 'PG' },
      { 'type': 'Apartment' }
    ];

    setFTypes(Ftypes.map(item => item.type));
  };

  const handleSelectedAreas = (selected) => {
    setSelectedAreas(selected);
  };

  const handleSelectedPropertyTypes = (selected) => {
    setSelectedPropertyTypes(selected);
  };

  const handleSelectedFlatTypes = (selected) => {
    setSelectedFlatTypes(selected);
  };

  const handleOnSearchClick = async () => {
    try {
      const url = `http://localhost:8800/searchproperties/${selectedAreas}/${selectedPropertyTypes}/${selectedFlatTypes}`;
      const response = await axios.get(url);
      console.log('Fetched data:', response.data);
      onPropertiesFetched(response.data);
    } catch (err) {
      console.error('Error fetching data:', err);
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }} className="searchcomponent">
      <div style={{ display: 'flex' }}>
        <SearchProperty apiCall={getAreas} options={options} placeholderText="City" setSelectedOptions={handleSelectedAreas} />
        <SearchProperty apiCall={getPropertyType} options={ptype} placeholderText="BHK" setSelectedOptions={handleSelectedPropertyTypes} />
        <SearchProperty apiCall={getFlatType} options={ftype} placeholderText="Property type" setSelectedOptions={handleSelectedFlatTypes} />
      </div>
      <div className="pricerange" style={{marginLeft:'200px'}}>
        <PriceRange />
      </div>
        <div style={{ display: 'flex', flexDirection: 'column' }} className="submit" onClick={handleOnSearchClick}>
        Search
      </div>
      </div>
    
  );
};

export default PropertInput;
