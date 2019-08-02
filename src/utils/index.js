import React from "react";

export const SVG = ({
  style,
  width,
  height,
  viewBox,
  xmlspace,
  baseProfile,
  path,
  fill
}) => {
  return (
    <svg
      style={style}
      width={width}
      height={height}
      viewBox={viewBox}
      xmlSpace={xmlspace}
      baseProfile={baseProfile}
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <path d={path} fill={fill} />
    </svg>
  );
};
