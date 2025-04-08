import React from "react";
import StarIcon from "@/assets/icons/star.svg";

const StarOrpit = ({
  orpitSize,
  starSize,
  color,
  orpitDuration,
  starDuration,
}) => {
  return (
    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
      <div
        className="animate-spin"
        style={{
          width: orpitSize,
          height: orpitSize,
          animationDuration: orpitDuration,
        }}
      >
        <div
          className="inline-flex animate-spin"
          style={{
            width: starSize,
            height: starSize,
            animationDuration: starDuration,
          }}
        >
          <StarIcon
            className="text-gray-500"
            style={{
              width: starSize,
              height: starSize,
              color: color,
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default StarOrpit;
