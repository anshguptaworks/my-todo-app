import React from "react";
import cx from "classnames";

interface IProps {
  children: React.ReactNode;
  className?: string;
}

const Card = ({ children, className }: IProps): JSX.Element => {
  return (
    <div
      className={cx(
        "max-w-[698px] h-fit overflow-y-scroll flex justify-center items-center text-center border border-solid border-gray-300 bg-gradient p-4 backdrop-blur-2xl rounded-lg dark:border-neutral-800 dark:bg-zinc-800/30 hover:dark:bg-zinc-700/20",
        className
      )}
    >
      {children}
    </div>
  );
};

export default Card;
