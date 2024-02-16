import ImageCard from "../ImageCard/ImageCard.jsx";
import "../Gallery/Gallery.css";
import ImageDetails from "../../hooks/useImageDetails.js";

function Gallery() {
  const defaultUrl =
    "https://api.slingacademy.com/v1/sample-data/photos?limit=20";
  const [image] = ImageDetails(defaultUrl);

  return (
    <div className="cardContainer">
      {image.map((img) => (
        <ImageCard
          key={img.id}
          id={img.id}
          title={img.title}
          image={img.url}
          description={img.description}
          user={img.user}
        />
      ))}
    </div>
  );
}

export default Gallery;
