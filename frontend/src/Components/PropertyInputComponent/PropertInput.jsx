import React, { useState } from 'react';
import SearchProperty from '../SearchComponent/SearchProperty';
import './PropertyStyles.css';
import PriceRange from '../PriceRangeComponent/PriceRange';
import house1 from './house-1.jpg'
import house2 from './house-2.png'
import house3 from './house-3.jpg'
import house4 from './house-4.jpg'
import house5 from './house-5.jpg'
import placeholder from './placeholder.png'
import bed from './bed.png'
import flat from './flat.png'
const PropertInput = ({ onPropertiesFetched }) => {
  const [selectedAreas, setSelectedAreas] = useState([]);
  const [selectedPropertyTypes, setSelectedPropertyTypes] = useState([]);
  const [selectedFlatTypes, setSelectedFlatTypes] = useState([]);

  
  const areas = ["Adyar", "Anna Nagar", "Velachery", "T Nagar", "Mylapore"];
  const ptype = ["1 BHK", "2 BHK", "3 BHK", "4 BHK", "5+ BHK"];
  const ftype = ["House", "Villa", "PG", "Apartment"];

  const handleSelectedAreas = (selected) => {
    setSelectedAreas(selected);
  };

  const handleSelectedPropertyTypes = (selected) => {
    setSelectedPropertyTypes(selected);
  };

  const handleSelectedFlatTypes = (selected) => {
    setSelectedFlatTypes(selected);
  };

  const handleOnSearchClick = () => {
    
    const properties = [
      {
        id: 1,
        image_url: house1,
        title: 'Spacious 2 BHK in Adyar',
        sqft: '1200',
        area: 'Adyar',
        city: 'Chennai',
        property_type: 'Apartment',
        rent: '25000',
        deposit: '100000',
        amenity1: 'Gym',
        amenity2: 'Swimming Pool',
        amenity3: 'Parking',
        amenity4: 'Garden'
      },
      {
        id: 2,
        image_url: house2,
        title: 'Luxurious 4 BHK Villa in Tambaram',
        sqft: '3000',
        area: 'Tambaram',
        city: 'Chennai',
        property_type: 'Villa',
        rent: '70000',
        deposit: '300000',
        amenity1: 'Gym',
        amenity2: 'Swimming Pool',
        amenity3: 'Parking',
        amenity4: 'Garden'
      },
      {
        id: 3,
        image_url: house3,
        title: 'Luxurious 3 BHK Villa in Velachery',
        sqft: '3000',
        area: 'Velachery',
        city: 'Chennai',
        property_type: 'Villa',
        rent: '70000',
        deposit: '300000',
        amenity1: 'Gym',
        amenity2: 'Swimming Pool',
        amenity3: 'Parking',
        amenity4: 'Garden'
      },
      {
        id: 4,
        image_url: house4,
        title: 'Luxurious 1 BHK Villa in T Nagar',
        sqft: '3000',
        area: 'T Nagar',
        city: 'Chennai',
        property_type: 'Villa',
        rent: '70000',
        deposit: '300000',
        amenity1: 'Gym',
        amenity2: 'Swimming Pool',
        amenity3: 'Parking',
        amenity4: 'Garden'
      },
      {
        id: 5,
        image_url: house5,
        title: 'Luxurious 2 BHK Villa in Mylapore',
        sqft: '3000',
        area: 'Mylapore',
        city: 'Chennai',
        property_type: 'Villa',
        rent: '70000',
        deposit: '300000',
        amenity1: 'Gym',
        amenity2: 'Swimming Pool',
        amenity3: 'Parking',
        amenity4: 'Garden'
      }
     
    ];

    onPropertiesFetched(properties);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }} className="searchcomponent">
      <div className="head"><h1>Home is where the heart is !</h1></div>
      <div style={{ display: 'flex' }}>
        <div className="inputfield">
            <img src={placeholder} alt="" />
            <SearchProperty apiCall={() => {}} options={areas} placeholderText="City" setSelectedOptions={handleSelectedAreas} />  
        </div>
        <div className="inputfield">
            <img src={bed} alt="" />
            <SearchProperty apiCall={() => {}} options={ptype} placeholderText="BHK" setSelectedOptions={handleSelectedPropertyTypes} />
        </div>
        <div className="inputfield">
        <img src={flat} alt="" />
        <SearchProperty apiCall={() => {}} options={ftype} placeholderText="Property type" setSelectedOptions={handleSelectedFlatTypes} />
        </div>
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
