import "../ImageCard/ImageCard.css";
import { Link } from "react-router-dom";

function ImageCard({ id, title, image, description, user }) {
  return (
    <div className="Card">
      <Link to={`/${id}`}>
        <div>
          <img className="image" src={image} alt="" />
          <p className="text"> Id: {id} <br /> User: {user}</p>
        </div>
      </Link>
    </div>
  );
}

export default ImageCard;
