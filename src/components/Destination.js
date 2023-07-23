import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Destination.css";
import { useParams } from "react-router-dom";
import hotels from "../data";
const Destination = () => {
  const [checkInDate, setCheckInDate] = useState(null);
  const [checkOutDate, setCheckOutDate] = useState(null);
  const [numOfPeople, setNumOfPeople] = useState(1);
  const [numOfRooms, setNumOfRooms] = useState(1);

  const params = useParams();

  const selectedHotel = hotels.find((el) => el.id == params.id);

  const handleCheckInDateChange = (e) => {
    setCheckInDate(e.target.value);
  };

  const handleCheckOutDateChange = (e) => {
    setCheckOutDate(e.target.value);
  };

  const handleNumOfPeopleChange = (e) => {
    setNumOfPeople(parseInt(e.target.value));
  };

  const handleNumOfRoomsChange = (e) => {
    setNumOfRooms(parseInt(e.target.value));
  };

  const calculateTotalPrice = () => {
    if (selectedHotel && checkInDate && checkOutDate) {
      const startDate = new Date(checkInDate);
      const endDate = new Date(checkOutDate);
      const numNights = Math.floor((endDate - startDate) / (1000 * 3600 * 24));
      return selectedHotel.price * numNights * numOfPeople;
    }
    return 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logique de réservation de l'hôtel ici
    const totalPrice = calculateTotalPrice();
    alert(
      `Votre réservation a été soumise avec succès ! Prix total : ${totalPrice} €`
    );
  };
  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="container">
      <div className="reservation-form">
        <h1>Réserver un hôtel</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="checkInDate">Date d'arrivée :</label>
          <input
            type="date"
            id="checkInDate"
            value={checkInDate}
            onChange={handleCheckInDateChange}
            required
          />

          <label htmlFor="checkOutDate">Date de départ :</label>
          <input
            type="date"
            id="checkOutDate"
            value={checkOutDate}
            onChange={handleCheckOutDateChange}
            required
          />

          <label htmlFor="numOfPeople">Nombre de personnes :</label>
          <input
            type="number"
            id="numOfPeople"
            min="1"
            value={numOfPeople}
            onChange={handleNumOfPeopleChange}
            required
          />

          <label htmlFor="numOfRooms">Nombre de chambres :</label>
          <input
            type="number"
            id="numOfRooms"
            min="1"
            value={numOfRooms}
            onChange={handleNumOfRoomsChange}
            required
          />
          {/* 
            <div>
              Prix par nuitée :{" "}
              {selectedHotel
                ? hotels.find((hotel) => hotel.id === parseInt(selectedHotel))
                    .price
                : 0}{" "}
              €
            </div>
            <div>Prix total : {calculateTotalPrice()} €</div> */}

          <button className="reserver" type="submit">Réserver</button>
        </form>
      </div>
      <div className="carousel">
        <Slider {...carouselSettings}>
          <div>
            <img src={selectedHotel.image} alt="Image 1" />
          </div>
          <div>
            <img src={selectedHotel.poolImage} alt="Image 1" />
          </div>
          <div>
            <img src={selectedHotel.roomImage} alt="Image 1" />
          </div>
          {/* Ajoutez autant de slides que nécessaire */}
        </Slider>

        <h1 className="HOTELNAME">{selectedHotel.name}</h1>
      </div>
    </div>
  );
};

export default Destination;
