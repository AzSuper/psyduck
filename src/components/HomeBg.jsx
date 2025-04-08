import React from "react";
import grainImage from "@/assets/images/grain.jpg";
import StarOrpit from "./StarOrpit";
const HomeBg = () => {
  return (
    <>
      <div
        className="absolute inset-0 -z-30 opacity-5"
        style={{
          backgroundImage: `url(${grainImage.src})`,
        }}
      />
      <div className="size-[620px] hero-ring -z-20" />
      <div className="size-[820px] hero-ring -z-20" />
      <div className="size-[1020px] hero-ring -z-20" />
      <div className="size-[1220px] hero-ring -z-20" />
      <StarOrpit
        orpitSize={"600px"}
        starSize={"40px"}
        color={"#10b981"}
        orpitDuration={"24s"}
        starDuration={"4s"}
      />
      <StarOrpit
        orpitSize={"700px"}
        starSize={"50px"}
        color={"#6b7280"}
        orpitDuration={"36s"}
        starDuration={"5s"}
      />
      <StarOrpit
        orpitSize={"900px"}
        starSize={"70px"}
        color={"#10b981"}
        orpitDuration={"48s"}
        starDuration={"2s"}
      />
      <StarOrpit
        orpitSize={"630px"}
        starSize={"80px"}
        color={"#6b7280"}
        orpitDuration={"32s"}
        starDuration={"3s"}
      />
      <StarOrpit
        orpitSize={"520px"}
        starSize={"28px"}
        color={"#10b981"}
        orpitDuration={"28s"}
        starDuration={"3s"}
      />
      <StarOrpit
        orpitSize={"770px"}
        starSize={"44px"}
        color={"#6b7280"}
        orpitDuration={"38s"}
        starDuration={"3s"}
      />
      <StarOrpit
        orpitSize={"740px"}
        starSize={"14px"}
        color={"#10b981"}
        orpitDuration={"28s"}
        starDuration={"3s"}
      />
      <StarOrpit
        orpitSize={"720px"}
        starSize={"8px"}
        color={"#6b7280"}
        orpitDuration={"48s"}
        starDuration={"3s"}
      />
    </>
  );
};

export default HomeBg;
