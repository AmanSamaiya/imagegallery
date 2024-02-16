import UsesingleCardDetails from "../../hooks/useSingleCardDetails";
import "../SingleImage/SingleImage.css";
import { useParams } from "react-router-dom";

function SingleImage() {
  const id = useParams();

  const finalid = id.id;

  const default_url = `https://api.slingacademy.com/v1/sample-data/photos/${finalid}`;

  const [singleCard] = UsesingleCardDetails(default_url, finalid);

  return (
    <div className="singleCard">
      <img className="Singleimage" src={singleCard.url} alt="" />

      <div className="SingleImageText">
        <h1 className="SingleImageTitle"> {singleCard.title}</h1>
        <p>{singleCard.description}</p>
      </div>
    </div>
  );
}

export default SingleImage;
