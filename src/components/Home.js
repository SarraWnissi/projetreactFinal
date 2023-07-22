import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Home.css";
import hotels from "../data";
import { Link } from "react-router-dom";
const Home = ({ searchByName, searchByLocation }) => {
  const [selectedHotel, setSelectedHotel] = useState(null);
  const [carouselImages, setCarouselImages] = useState([]);
  const [hotelsList, setHotelsList] = useState(hotels);
  const handleWatchButtonClick = (hotel) => {
    setSelectedHotel(hotel);
    setCarouselImages([hotel.image, hotel.roomImage, hotel.poolImage]);
  };

  const handleCloseButtonClick = () => {
    setSelectedHotel(null);
  };

  return (
    <div className="Home">
      <h1>Welcome to our Hotel Listings</h1>
      <ul>
        {hotelsList
          .filter(
            (hotel) =>
              hotel.name.toLowerCase().includes(searchByName.toLowerCase()) &&
              hotel.location
                .toLowerCase()
                .includes(searchByLocation.toLowerCase())
          )
          .map((hotel) => (
            <li key={hotel.id}>
              <h3>{hotel.name}</h3>
              <p>Location: {hotel.location}</p>
              <img
                src={hotel.image}
                alt={hotel.name}
                style={{ width: "700px", height: "300px" }}
              />
              <div className="MakeReservation">
              <button className="watch" onClick={() => handleWatchButtonClick(hotel)}>
                Discover 
              </button>

              <Link to={`/destination/${hotel.id}`}><button className="Make">Make reservation</button></Link>
              </div>
            </li>
          ))}
      </ul>
      {selectedHotel && (
        <div className="overlay">
          <div className="modal">
            <Slider>
              {carouselImages.map((image, index) => (
                <div key={index}>
                  <img src={image} alt={`Carousel Image ${index}`} />
                </div>
              ))}
            </Slider>
            <p>{selectedHotel.name}</p>
            <p>Location: {selectedHotel.location}</p>
            <p>
              Description: Lorem ipsum dolor sit amet, consectetur adipiscing
              elit. Ut vestibulum posuere tincidunt. Nulla id tincidunt velit.
              Integer rhoncus elit non arcu molestie euismod. Mauris bibendum
              feugiat sem, vel pretium est vehicula in. Vivamus
            </p>
            <button onClick={handleCloseButtonClick}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
