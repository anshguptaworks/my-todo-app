"use client";

import Delete from "@/assets/icons/delete";
import React from "react";

interface IProps {
  todo: string;
  onDeleteHandler: VoidFunction;
  isChecked: boolean;
  toggleCheck: VoidFunction;
}

const TodoCard = ({
  todo,
  onDeleteHandler,
  isChecked,
  toggleCheck,
}: IProps): JSX.Element => {
  const deleteSoundEffect = "/sounds/deleteSoundEffect.mp3";

  const handleDeleteClick = () => {
    const audio = new Audio(deleteSoundEffect);
    audio.play();

    onDeleteHandler();
  };

  return (
    <div className="flex justify-between items-center rounded-lg border border-gray-800 px-5 py-6 bg-black transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/5 md:min-w-[500px] w-full">
      <div className="flex justify-center items-center gap-4 m-0 text-sm text-white">
        <input type="checkbox" checked={isChecked} onChange={toggleCheck} />
        <span style={isChecked ? { textDecoration: "line-through" } : {}}>
          {todo}
        </span>
      </div>
      <Delete
        onClick={handleDeleteClick}
        pathClassName="hover:fill-red-600"
        className="min-w-[18px] min-h-[18px] hover:fill-red-600"
      />
    </div>
  );
};

export default TodoCard;
