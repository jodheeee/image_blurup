import React, { useState } from "react";
import "./image.scss";
function Image(props) {
  const [loadingChk, setLoadingChk] = useState(false);
  return (
    <div className="imageBox">
      <img
        className="image temp"
        alt={props.alt}
        src={props.temp}
        style={{ visibility: isLoaded ? "hidden" : "visible" }}
      />
      <img
        onLoad={() => {
          setIsLoaded(true);
        }}
        className="image org"
        style={{ opacity: isLoaded ? 1 : 0 }}
        alt={props.alt}
        src={props.src}
      />
    </div>
  );
};

export default Image;
