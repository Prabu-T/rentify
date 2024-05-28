import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from '../NavBarComponent/NavBar';
import PropertyCard from '../CardComponents/Cardprop';
import './HomeStyles.css';
import houseImg1 from './house-6.jpg'; 
import houseImg2 from './house-7.jpg';

const hardcodedProperties = [
  {
    id: 1,
    image: houseImg1,
    title: 'Spacious Villa',
    sqft: '3500',
    property_type: 'Villa',
    bhk: '4 BHK',
    area: 'Anna Nagar',
    city: 'Chennai',
    address: '123 Street, Anna Nagar, Chennai',
    rent: '45000',
    deposit: '150000',
    amenity1: 'Swimming Pool',
    amenity2: 'Gym',
    amenity3: 'Garden',
    amenity4: 'Parking'
  },
  {
    id: 2,
    image: houseImg2,
    title: 'Cozy Apartment',
    sqft: '1200',
    property_type: 'Apartment',
    bhk: '2 BHK',
    area: 'Velachery',
    city: 'Chennai',
    address: '456 Avenue, Velachery, Chennai',
    rent: '25000',
    deposit: '80000',
    amenity1: 'Lift',
    amenity2: 'Power Backup',
    amenity3: 'Security',
    amenity4: 'Parking'
  }
];

function HomePage() {
  const [properties, setProperties] = useState(hardcodedProperties);

  const handlePropertyAdded = (newProperty) => {
    setProperties([...properties, newProperty]);
  };

  return (
    <div className="App">
      <NavBar />
      <div className="property-cards-container">
        {properties.map(property => (
          <PropertyCard key={property.id} property={property} />
        ))}
      </div>
    </div>
  );
}

export default HomePage;
