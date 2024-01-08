"use client";

import Card from "@/components/Card";
import React, { useState } from "react";
import Input from "@/components/Input";
import Character from "@/assets/icons/character";
import TodoCard from "@/components/TodoCard";
import HandArrow from "@/assets/icons/hand";

const LandingPage = (): JSX.Element => {
  const [todos, setTodos] = useState<string[]>([]);
  const [isChecked, setIsChecked] = useState<boolean[]>([]);

  const handleAddTodo = (todo: string) => {
    setTodos((currentTodos) => [...currentTodos, todo]);
    setIsChecked((currentChecked) => [...currentChecked, false]);
  };

  const OnDeleteHandler = (index: number) => () => {
    setTodos((currentTodos) => [
      ...currentTodos.slice(0, index),
      ...currentTodos.slice(index + 1),
    ]);
    setIsChecked((currentChecked) => [
      ...currentChecked.slice(0, index),
      ...currentChecked.slice(index + 1),
    ]);
  };

  const toggleCheck = (index: number) => () => {
    setIsChecked((currentChecked) => [
      ...currentChecked.slice(0, index),
      !currentChecked[index],
      ...currentChecked.slice(index + 1),
    ]);
  };

  return (
    <div className="flex justify-center items-center flex-col md:flex-row">
      <Character className="w-64 animate-pulse duration-1000" />
      <div className="flex h-screen flex-col items-center justify-start gap-12 md:mx-24 md:mt-24 mx-8 mt-8">
        <Card className="w-full border border-solid border-gray-300 bg-gradient p-4 backdrop-blur-2xl rounded-lg dark:border-neutral-800 dark:bg-zinc-800/30 hover:dark:bg-zinc-900/100">
          My Todo App
        </Card>
        <Card className="md:min-w-[698px]">
          <Input AddTodoHandler={handleAddTodo} />
        </Card>
        {todos.length > 0 && (
          <Card className="flex justify-center items-center flex-col gap-4 w-full">
            {todos.map((todo, index) => (
              <TodoCard
                key={index}
                todo={todo}
                onDeleteHandler={OnDeleteHandler(index)}
                isChecked={isChecked[index]}
                toggleCheck={toggleCheck(index)}
              />
            ))}
          </Card>
        )}
      </div>
      {todos.length > 0 && (
        <HandArrow className="w-14 animate-bounce duration-1000 max-md:hidden" />
      )}
    </div>
  );
};

export default LandingPage;
