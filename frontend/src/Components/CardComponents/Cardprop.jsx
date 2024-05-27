import React from 'react';
import './CardStyles.css';

const PropertyCard = ({ property }) => {
  return (
    <div className="property-card">
      <img src={property.image_url} alt={property.title} className="property-card-img" />
      <div className="property-card-details">
        <h3>{property.title}</h3>
        <p><strong>Sqft:</strong> {property.sqft}</p>
        <p><strong>Area:</strong> {property.area}</p>
        <p><strong>Location:</strong> {property.city}</p>
        <p><strong>Property Type:</strong> {property.property_type}</p>
        <p><strong>Rent:</strong> {property.rent}</p>
        <p><strong>Deposit:</strong> {property.deposit}</p>
        <p><strong>Amenities:</strong> {property.amenity1}, {property.amenity2}, {property.amenity3}, {property.amenity4}</p>
      </div>
    </div>
  );
};

export default PropertyCard;
