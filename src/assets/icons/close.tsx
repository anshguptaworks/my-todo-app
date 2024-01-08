import React from "react";
import { IconTypes } from "../IconTypes";

const Close = ({ className, pathClassName, onClick }: IconTypes) => (
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
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8.07099 6.65687L12.314 10.8989L16.556 6.65687C17.02 6.17687 17.491 6.17687 17.971 6.65687C18.451 7.13687 18.451 7.60688 17.971 8.07088L13.728 12.3139L17.971 16.5559C18.442 17.0279 18.442 17.4989 17.971 17.9709C17.499 18.4419 17.028 18.4419 16.556 17.9709L12.314 13.7279L8.06999 17.9699C7.60999 18.4519 7.13799 18.4519 6.65599 17.9699C6.17399 17.4869 6.17399 17.0159 6.65599 16.5549L10.898 12.3129L6.65699 8.06987C6.18499 7.59987 6.18499 7.12788 6.65699 6.65588C7.12899 6.18388 7.59999 6.18388 8.07099 6.65588V6.65687Z"
      fill="#262626"
      className={pathClassName}
    />
  </svg>
);
export default Close;
