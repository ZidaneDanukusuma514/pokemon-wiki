import * as React from "react";

export interface IButtonProps {
  width: string;
  height: string;
  backgroundColor: string;
  color: string;
  border: string;
  borderColor: string;
  fontSize: string;
  buttonText: string;
}

export default function Button({
  width,
  height,
  backgroundColor,
  color,
  border,
  borderColor,
  fontSize,
  buttonText,
}: IButtonProps) {
  return (
    <button
      className={`${width} ${height} ${backgroundColor} ${color} ${border} 
  ${borderColor} ${fontSize} ${buttonText}
  `}
    ></button>
  );
}
