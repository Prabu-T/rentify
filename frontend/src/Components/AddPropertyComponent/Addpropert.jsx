import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './AddStyles.css'; 

function AddPropertyForm({ onPropertyAdded }) {
  const [formData, setFormData] = useState({
    title: '',
    sqft: '',
    property_type: '',
    bhk: '',
    area: '',
    city: '',
    address: '',
    rent: '',
    deposit: '',
    amenity1: '',
    amenity2: '',
    amenity3: '',
    amenity4: ''
  });
  const [selectedFile, setSelectedFile] = useState(null);

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append('image', selectedFile);
    Object.keys(formData).forEach(key => {
      data.append(key, formData[key]);
    });

    try {
      const response = await axios.post('http://localhost:8800/properties/add', data, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      console.log('Property added:', response.data);

      // Pass the new property data to the parent component
      onPropertyAdded(response.data);

      // Reset the form after submission
      setFormData({
        title: '',
        sqft: '',
        property_type: '',
        bhk: '',
        area: '',
        city: '',
        address: '',
        rent: '',
        deposit: '',
        amenity1: '',
        amenity2: '',
        amenity3: '',
        amenity4: ''
      });
      setSelectedFile(null);

      // Redirect to home page
      navigate('/home');
    } catch (error) {
      console.error('Error adding property:', error);
    }
  };

  return (
    <div className="add-property-form">
      <h2>Post your Property details</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input type="text" name="title" value={formData.title} onChange={handleChange} required />
        </label>
        <label>
          Sqft:
          <input type="number" name="sqft" value={formData.sqft} onChange={handleChange} required />
        </label>
        <label>
          Property Type:
          <input type="text" name="property_type" value={formData.property_type} onChange={handleChange} required />
        </label>
        <label className="radio-label">
          BHK:
          <label><input type="radio" name="bhk" value="1 BHK" checked={formData.bhk === "1 BHK"} onChange={handleChange} required /> 1 BHK</label>
          <label><input type="radio" name="bhk" value="2 BHK" checked={formData.bhk === "2 BHK"} onChange={handleChange} /> 2 BHK</label>
          <label><input type="radio" name="bhk" value="3 BHK" checked={formData.bhk === "3 BHK"} onChange={handleChange} /> 3 BHK</label>
          <label><input type="radio" name="bhk" value="4 BHK" checked={formData.bhk === "4 BHK"} onChange={handleChange} /> 4 BHK</label>
          <label><input type="radio" name="bhk" value="5+ BHK" checked={formData.bhk === "5+ BHK"} onChange={handleChange} /> 5+ BHK</label>
        </label>
        <label>
          Area:
          <input type="text" name="area" value={formData.area} onChange={handleChange} required />
        </label>
        <label>
          City:
          <input type="text" name="city" value={formData.city} onChange={handleChange} required />
        </label>
        <label>
          Address:
          <input type="text" name="address" value={formData.address} onChange={handleChange} required />
        </label>
        <label>
          Rent:
          <input type="number" name="rent" value={formData.rent} onChange={handleChange} required />
        </label>
        <label>
          Deposit:
          <input type="number" name="deposit" value={formData.deposit} onChange={handleChange} required />
        </label>
        <label>
          Amenity 1:
          <input type="text" name="amenity1" value={formData.amenity1} onChange={handleChange} required />
        </label>
        <label>
          Amenity 2:
          <input type="text" name="amenity2" value={formData.amenity2} onChange={handleChange} />
        </label>
        <label>
          Amenity 3:
          <input type="text" name="amenity3" value={formData.amenity3} onChange={handleChange} />
        </label>
        <label>
          Amenity 4:
          <input type="text" name="amenity4" value={formData.amenity4} onChange={handleChange} />
        </label>
        <label>
          Property Image:
          <input type="file" name="image" onChange={handleFileChange} required />
        </label>
        <button type="submit">Add Property</button>
      </form>
    </div>
  );
}

export default AddPropertyForm;
