import React from "react";
import { IconTypes } from "../IconTypes";

const Delete = ({ className, pathClassName, onClick }: IconTypes) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    className={className}
    onClick={onClick}
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M9 4C9 2.667 9.667 2 11 2H13C14.333 2 15 2.667 15 4H18C19.333 4 20 4.667 20 6V8H4V6C4 4.667 4.666 4 5.999 4H9ZM19 10V20C19 21.333 18.333 22 17 22H7C5.664 22 4.997 21.333 5 20V10H19ZM9 14V18C9 18.667 9.333 19 10 19C10.667 19 11 18.667 11 18V14C11 13.324 10.667 12.99 10 13C9.333 13.01 9 13.343 9 14ZM13 14V18C13 18.667 13.333 19 14 19C14.667 19 15 18.667 15 18V14C15 13.324 14.667 12.99 14 13C13.333 13.01 13 13.343 13 14Z"
      fill="#262626"
      className={pathClassName}
    />
  </svg>
);
export default Delete;
