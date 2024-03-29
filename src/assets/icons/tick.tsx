import React from "react";
import { IconTypes } from "../IconTypes";

const Tick = ({ className, pathClassName }: IconTypes) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width={512}
    height={512}
    x={0}
    y={0}
    viewBox="0 0 520 520"
    xmlSpace="preserve"
    className={className}
  >
    <g>
      <path
        d="M180.555 468.969a10 10 0 0 1-8.624-4.938C134.552 400.35 34.947 264.82 33.945 263.458a10 10 0 0 1 1.026-13.039l30.618-30.255a10 10 0 0 1 12.754-1.086l100.127 69.916c66.568-85.516 128.43-144.533 169.09-179.307 45.575-38.983 74.551-56.5 75.762-57.23a10 10 0 0 1 5.146-1.426H478a10 10 0 0 1 6.651 17.469c-73.431 65.4-149.775 169.313-200.888 244.966-55.563 82.234-94.135 149.779-94.518 150.452a10 10 0 0 1-8.624 5.05z"
        data-name="3-Check"
        fill="#ffffff"
        opacity={1}
        data-original="#ffffff"
        className={pathClassName}
      />
    </g>
  </svg>
);
export default Tick;
