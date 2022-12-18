import React from "react";
import { sculptureList } from "../Components/data.js";
import { useState } from "react";
function Gallery() {
  const [index, setIndex] = useState(0);
  const [showMore, setShowMore] = useState(true);

  //
  const handleClick = () => {
    setIndex(index + 1);
  };

  const handleMoreClick = () => {
    setShowMore(!showMore);
  };

  let sculpture = sculptureList[index];

  return (
    <section>
      <button onClick={handleClick}>Next</button>
      <h2>
        <i>{sculpture.name}</i> by {sculpture.artist}
      </h2>
      <h3>
        ({index + 1} of {sculptureList.length})
      </h3>
      <br />

      <button onClick={handleMoreClick}>
        {showMore ? "Hide" : "Show"} details
      </button>
      {showMore && <p>{sculpture.description}</p>}
      <img src={sculpture.url} alt={sculpture.alt} />
    </section>
  );
}

export default Gallery;
