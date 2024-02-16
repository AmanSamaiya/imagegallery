import axios from "axios";
import { useEffect, useState } from "react";

function ImageDetails(defaultUrl) {
  const [image, setImage] = useState([]);

  async function downloadImages(defaultUrl) {
    const response = await axios.get(defaultUrl);

    const imageData = response.data.photos;

    const imageFinalData = imageData.map((image) => {
      return {
        id: image.id,
        title: image.title,
        url: image.url,
        description: image.description,
        user: image.user,
      };
    });

    setImage(imageFinalData);
  }

  useEffect(() => {
    downloadImages(defaultUrl);
  }, []);

  return [image];
}

export default ImageDetails;
