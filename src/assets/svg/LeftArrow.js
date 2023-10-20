import React from "react";

const LeftArrow = () => {
  return (
    <>
      <div className="left__arrow">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={16}
          height={8}
          viewBox="0 0 16 8"
          fill="none"
        >
          <path
            d="M4.80172 5.36889H15.5374C15.773 5.36889 15.9641 5.17785 15.9641 4.94222V2.95111C15.9641 2.71549 15.773 2.52445 15.5374 2.52445H4.80172V0.886794C4.80172 0.126545 3.88258 -0.254184 3.34498 0.28338L0.285103 3.34326C-0.0481593 3.67652 -0.0481593 4.21682 0.285103 4.55005L3.34498 7.60992C3.88254 8.14749 4.80172 7.76676 4.80172 7.00651V5.36889Z"
            fill="black"
          />
        </svg>
      </div>
    </>
  );
};

export default LeftArrow;
