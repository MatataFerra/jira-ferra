import { FC } from "react";

export const ArrowSVG: FC = (props) => (
  <svg height={21} width={21} xmlns="http://www.w3.org/2000/svg" {...props}>
    <g
      fill="none"
      fillRule="evenodd"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M7.499 6.497 3.5 10.499l4 4.001M16.5 10.5h-13" />
    </g>
  </svg>
);
