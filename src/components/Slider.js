import React from "react";
import PropTypes from "prop-types";

const Slider = props => {
  const { movie, image } = props;

  return (
    <div
      className="movie "
      style={{
        background: `url(https://image.tmdb.org/t/p/w500/${image})`,
        backgroundSize: "cover",
        height: "100px"
      }}
    >
      <div>
        <span>{movie}</span>
      </div>
    </div>
  );
};
export default Slider;
