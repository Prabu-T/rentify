import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import user_icon from './account.png';
import email_icon from './email.png';
import password_icon from './password.png';
import phone_call from './phone-call.png';
import { GoogleLogin } from '@react-oauth/google';
import './LoginSignupstyle.css';

export const LoginSignup = () => {
  const [action, setAction] = useState("Login");
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    phonenumber: '',
    email: '',
    password: ''
  });
  const navigate = useNavigate();

  const responseMessage = (response) => {
    console.log(response);
  };

  const errorMessage = (error) => {
    console.log(error);
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSignUpClick = () => {
    const { firstname, lastname, phonenumber, email, password } = formData;
    if (firstname && lastname && phonenumber && email && password) {
      setAction("Login");
      setFormData({ ...formData, password: '' }); // Clear password field for security
    } else {
      alert("All fields are required for sign up.");
    }
  };

  const handleLoginClick = () => {
    const { email, password } = formData;
    if (email && password) {
      navigate('/home');
    } else {
      alert("Email and Password are required for login.");
    }
  };

  return (
    <div className="Container">
      <div className="heading">
        <div className="text">{action}</div>
        <div className="underline"></div>
      </div>
      <div className="inputs">
        {action === "Login" ? null : (
          <>
            <div className="input">
              <img src={user_icon} alt="User Icon" />
              <input
                type='text'
                name='firstname'
                placeholder='Firstname'
                value={formData.firstname}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="input">
              <img src={user_icon} alt="User Icon" />
              <input
                type='text'
                name='lastname'
                placeholder='Lastname'
                value={formData.lastname}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="input">
              <img src={phone_call} alt="Phone Icon" />
              <input
                type='text'
                name='phonenumber'
                placeholder='Phonenumber'
                value={formData.phonenumber}
                onChange={handleInputChange}
                required
              />
            </div>
          </>
        )}
        <div className="input">
          <img src={email_icon} alt="Email Icon" />
          <input
            type='email'
            name='email'
            placeholder='Email Id'
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="input">
          <img src={password_icon} alt="Password Icon" />
          <input
            type='password'
            name='password'
            placeholder='Password'
            value={formData.password}
            onChange={handleInputChange}
            required
          />
        </div>
      </div>
      {action === "Sign Up" ? (
        <div className='google'>
          <GoogleLogin onSuccess={responseMessage} onError={errorMessage} />
        </div>
      ) : (
        <div className="forgot-password">
          Forgot password? <span>Click Here!</span>
        </div>
      )}

      <div className="submit-container">
        <div className="submit" onClick={() => setAction("Sign Up")}>Sign Up</div>
        {action === "Login" && <div className="submit" onClick={handleLoginClick}>Login</div>}
        {action === "Sign Up" && <div className="submit" onClick={handleSignUpClick}>Submit</div>}
      </div>
    </div>
  );
};
