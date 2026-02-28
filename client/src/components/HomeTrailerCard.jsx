import React, { useState, useEffect } from "react";
import axios from "axios";

export default function HomeTrailerCard() {
  const [trailers, setTrailers] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/movie/1236153/videos?api_key=f470f67e0a8d6712635048ad1c07ac53&language=en-US"
      )
      .then((response) => {
        const youtubeTrailers = response.data.results.filter(
          (video) => video.site === "YouTube" && video.type === "Trailer"
        );
        setTrailers(youtubeTrailers);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      {trailers.map((video) => (
        <div key={video.id}>
          <iframe
            width="560"
            height="315"
            src={`https://www.youtube.com/embed/${video.key}`}
            title={video.name}
            allowFullScreen
          ></iframe>
          <p>{video.name}</p>
        </div>
      ))}
    </div>
  );
}