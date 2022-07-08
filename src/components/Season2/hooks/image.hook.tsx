import React from "react";
import useProgressiveImg from "./useProgressiveImg";
const BlurredUpImage = ({image, addStyle}) => {
  const [src, { blur }] = useProgressiveImg("/image/gallery/tiny.jpg", image);
  return (
    <img
      src={src}
      className={addStyle}
      alt="mekabae"
      style={{
        width: 260,
        height: 260,
        filter: blur ? "blur(10px)" : "none",
      }}
    />
  );
};
export default BlurredUpImage;