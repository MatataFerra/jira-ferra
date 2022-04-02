import { FC } from "react";

export const PlusSVG: FC = (props) => {
  return (
    <svg height={21} width={21} xmlns="http://www.w3.org/2000/svg" {...props}>
      <g
        fill="#000"
        fillRule="evenodd"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M5.5 10.5h10M10.5 5.5v10" />
      </g>
    </svg>
  );
};
