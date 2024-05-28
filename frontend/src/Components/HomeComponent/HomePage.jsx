import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from '../NavBarComponent/NavBar';
import PropertInput from '../PropertyInputComponent/PropertInput';
import PropertyCard from '../CardComponents/Cardprop';
import './HomeStyles.css';

function HomePage() {
  const [properties, setProperties] = useState([]);

  const handlePropertiesFetched = (fetchedProperties) => {
    setProperties(fetchedProperties);
  };

  return (
    <div className="app">
      <NavBar />
      <PropertInput onPropertiesFetched={handlePropertiesFetched} />
      <div className="property-cards-container">
        {properties.map(property => (
          <PropertyCard key={property.id} property={property} />
        ))}
      </div>
    </div>
  );
}

export default HomePage;
