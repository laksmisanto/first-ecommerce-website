import React from "react";

const NextArrow = ({ onClick }) => {
  return (
    <>
      <div className="right__arrow slider__btn" onClick={onClick}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={16}
          height={8}
          viewBox="0 0 16 8"
          fill="none"
        >
          <path
            d="M11.1983 2.63111L0.462595 2.63111C0.226969 2.63111 0.0359278 2.82215 0.0359278 3.05778V5.04889C0.0359278 5.28451 0.226969 5.47555 0.462595 5.47555L11.1983 5.47555V7.11321C11.1983 7.87346 12.1174 8.25418 12.655 7.71662L15.7149 4.65674C16.0482 4.32348 16.0482 3.78318 15.7149 3.44995L12.655 0.390078C12.1175 -0.147487 11.1983 0.233242 11.1983 0.993491V2.63111Z"
            fill="black"
          />
        </svg>
      </div>
    </>
  );
};

export default NextArrow;
