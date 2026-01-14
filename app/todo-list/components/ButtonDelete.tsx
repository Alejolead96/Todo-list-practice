"use client";
import { deleteItemsTodo } from "../helpers/api";
import { useRouter } from "next/navigation";

export const ButtonDelete = () => {
  const router = useRouter();

  const handleDelete = async () => {
    await deleteItemsTodo();
    router.refresh();
  };

  return (
    <button
      onClick={() => handleDelete()}
      className="bg-red-600 text-white px-4 py-2 rounded-md cursor-pointer"
    >
      Clear Completed
    </button>
  );
};
