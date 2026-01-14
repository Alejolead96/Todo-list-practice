"use client";

import { FormEvent, useState } from "react";
import { FaArrowRight } from "react-icons/fa6";
import { FaTasks } from "react-icons/fa";
import { toggleCreateTodo } from "../lib/actions";

export const Input = () => {
  const [input, setInput] = useState("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (input.trim() === "" && input.length < 5) {
      return;
    }

    toggleCreateTodo(input);
    setInput("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex self-end mb-6 items-center text-sm bg-white h-12 border pl-3 pr-0.5 rounded border-gray-500/30 w-full max-w-md"
    >
      <FaTasks className="text-gray-500 size-4" />
      <input
        className="px-2 w-full h-full outline-none text-gray-500 bg-transparent"
        type="text"
        placeholder="Escribe tu tarea"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        type="submit"
        className="bg-sky-600 px-6 py-3.5 mr-px rounded-sm active:scale-95 transition"
      >
        <FaArrowRight className="text-white size-4" />
      </button>
    </form>
  );
};
