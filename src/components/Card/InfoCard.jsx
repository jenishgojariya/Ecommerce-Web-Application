import React from "react";

const InfoCard = ({ title, value }) => {
  return (
    <div className="flex gap-2">
      <span className="font-semibold">{title}:</span>
      <p className="text-grey-200">{value}</p>
    </div>
  );
};

export default InfoCard;
