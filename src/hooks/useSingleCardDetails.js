import axios from "axios";
import { useEffect, useState } from "react";

function UsesingleCardDetails(default_url, finalid) {
  const [singleCard, setSingleCard] = useState([]);

  async function downloadSingleCard(default_url) {
    const response = await axios.get(default_url);
    const results = response.data.photo;

    setSingleCard({
      url: results.url,
      user: results.user,
      id: results.id,
      title: results.title,
      description: results.description,
    });
  }

  useEffect(() => {
    downloadSingleCard(default_url);
  }, [finalid]);

  return [singleCard];
}

export default UsesingleCardDetails;
