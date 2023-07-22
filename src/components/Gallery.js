import ReactPlayer from "react-player";
import "./Gallery.css";
const Gallery = () => {
  const videos = [
    "https://www.youtube.com/watch?v=KpIwXDwSFKk",
    "https://www.youtube.com/watch?v=CqX6x2YpdfE",
    "https://www.youtube.com/watch?v=Q6rzTaJ1mwA",
    "https://www.youtube.com/watch?v=9o-hUm96muc"
    // Ajoutez ici d'autres URL de vidéos si nécessaire
  ];

  return (
    <div className="Gallery">
      <h1>Video Gallery</h1>
      {videos.map((video, index) => (
        <div key={index} className="video-wrapper">
          <ReactPlayer url={video} controls />
        </div>
      ))}
    </div>
  );
};

export default Gallery;
