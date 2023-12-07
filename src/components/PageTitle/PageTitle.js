import React from "react";

const PageTitle = ({ title }) => {
  return (
    <>
      <h2 className="font-primaryFont font-bold text-[49px] text-black pt-[124px] pb-3">
        {title}
      </h2>
    </>
  );
};

export default PageTitle;
