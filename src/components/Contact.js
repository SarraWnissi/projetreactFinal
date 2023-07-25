import React, { useState } from "react";
import "./Contact.css";
import Modal from "react-modal";
const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    phoneNumber: ""
  });
  const [submitted, setSubmitted] = useState(false);
  const { firstName, lastName, email, address, phoneNumber } = formData;

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "phoneNumber") {
      // Filter out non-numeric characters
      const numericValue = value.replace(/\D/g, "");
      setFormData({ ...formData, [name]: numericValue });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };
  

  const handleSubmit = (e) => {
    e.preventDefault();
   
    console.log(formData);
    
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      address: "",
      phoneNumber: ""
    });
    setSubmitted(true);
  };
  const handleCloseModal = () => {
    setSubmitted(false);
  };
  return (
    <div className="contact-container">
      <h1>Contact Us</h1>
      
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="firstName">Prénom :</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={firstName}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="lastName">Nom :</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={lastName}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email :</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="address">Adresse :</label>
          <input
            type="text"
            id="address"
            name="address"
            value={address}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="phoneNumber">phoneNumber:</label>
          <input
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            value={phoneNumber}
            onChange={handleChange}
            required
          />
        </div>

        <button className="envoyer" type="submit">Envoyer</button>
      </form>
      <Modal
        isOpen={submitted}
        onRequestClose={handleCloseModal}
        contentLabel="Submitted Modal"
        className="moda"
      >
        <h2>Submitted!</h2>
        <p>Form submitted successfully.</p>
        <button onClick={handleCloseModal}>Close</button>
      </Modal>
    </div>
  );
};

export default Contact;
