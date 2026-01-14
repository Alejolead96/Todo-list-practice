import { ItemList } from "@/app/todo-list";

export const metadata = {
  title: "Todo-List",
  description: "Todo-List Dashboard",
};

const page = () => {
  return (
    <div className="flex flex-col my-4">
      <h1 className="text-3xl font-bold text-gray-600 mb-4">
        List of Todo-Items
      </h1>

      <ItemList />
    </div>
  );
};

export default page;
