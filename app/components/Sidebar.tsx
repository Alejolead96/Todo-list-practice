import { FaHome, FaClipboardList } from "react-icons/fa";
import { SidebarItems } from "./SidebarItems";

const directions = [
  {
    icon: <FaHome className="h-5 w-5 text-white" />,
    label: "Home",
    href: "/dashboard",
  },

  {
    icon: <FaClipboardList className="h-5 w-5 text-white" />,
    label: "todo-list",
    href: "/dashboard/todo-list",
  },
];

export const Sidebar = () => {
  return (
    <aside className="bg-linear-to-br from-gray-800 to-gray-900 -translate-x-80 fixed inset-0 z-50 my-4 ml-4 h-[calc(100vh-32px)] w-72 rounded-xl transition-transform duration-300 xl:translate-x-0">
      <div className="relative border-b border-white/20">
        <a className="flex items-center gap-4 py-6 px-8" href="#/">
          <h6 className="block antialiased tracking-normal font-sans text-base font-semibold leading-relaxed text-white">
            Dashboard Todo-List
          </h6>
        </a>
      </div>
      <div className="m-4">
        <ul className="mb-4 flex flex-col gap-1">
          {directions.map((direction) => (
            <SidebarItems key={direction.label} {...direction} />
          ))}
        </ul>
      </div>
    </aside>
  );
};
