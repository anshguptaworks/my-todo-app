import React from "react";
import { IconTypes } from "../IconTypes";

const Edit = ({ className, pathClassName }: IconTypes) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    className={className}
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M17 2.7399C17.948 1.7999 18.892 1.8009 19.832 2.7429C21.242 4.1549 19.83 2.7389 21.243 4.1539C22.186 5.0979 22.186 6.0399 21.243 6.98289L18.415 9.8099L14.172 5.5669L17.001 2.7389L17 2.7399ZM12.93 6.8099L17.173 11.0529L7.1 21.1239L3.256 21.9039C3.10203 21.9325 2.94386 21.9298 2.79095 21.896C2.63804 21.8621 2.49352 21.7978 2.366 21.7069C2.098 21.5209 1.993 21.1899 2.051 20.7129L2.858 16.8819L12.929 6.8099H12.93Z"
      fill="#262626"
      className={pathClassName}
    />
  </svg>
);
export default Edit;
