"use client";

import Close from "@/assets/icons/close";
import React, { useState } from "react";

interface InputProps {
  AddTodoHandler: (todo: string) => void;
}
const Input = ({ AddTodoHandler }: InputProps): JSX.Element => {
  const [todo, setTodo] = useState("");

  const SoundEffect = "/sounds/soundEffect.mp3";

  const handleKeyEnter = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter" && todo.trim()) {
      const audio = new Audio(SoundEffect);
      audio.play();

      AddTodoHandler(todo.trim());
      setTodo("");
    }
  };

  const handleClearInput = () => {
    setTodo("");
  };

  return (
    <div className="px-8 py-4 border border-solid border-gray-500 rounded-lg flex justify-center items-center flex-row gap-4 w-full">
      <input
        className="bg-transparent border-none outline-none text-white placeholder-white md:min-w-[560px] md:max-w-[560px] placeholder:opacity-25"
        type="text"
        placeholder="Write your todo here..."
        value={todo}
        onKeyDown={handleKeyEnter}
        onChange={(e) => setTodo(e.target.value)}
      />
      {todo && <Close onClick={handleClearInput} pathClassName="fill-white" />}
    </div>
  );
};

export default Input;
