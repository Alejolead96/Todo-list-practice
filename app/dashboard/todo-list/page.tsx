import { MdArrowForwardIos } from "react-icons/md";

export const metadata = {
  title: "Todo-List",
  description: "Todo-List Dashboard",
};

const page = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold text-gray-600 mb-4">List of Todo-Items</h1>

      <div className="flex items-center gap-2 self-start">
        {/* Items todo list */}
        <div className="flex items-center gap-2 border border-indigo-200 rounded-full p-1 pr-3 text-sm font-medium text-indigo-500 hover:bg-indigo-100 transition bg-indigo-50">
          <span className="bg-indigo-600 text-white text-xs px-3 py-1 rounded-full">
            ACTIVE
          </span>
          <p className="flex items-center gap-1">
            <span>Click here for more information</span>
            <MdArrowForwardIos className="mt-0.5 size-3" />
          </p>
        </div>
      </div>
    </div>
  );
};

export default page;
