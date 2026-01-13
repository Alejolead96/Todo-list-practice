"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface props {
  icon: React.ReactNode;
  label: string;
  href: string;
}

export const SidebarItems = ({ label, href, icon }: props) => {
  const pathname = usePathname();

  return (
    <li>
      <Link
        aria-current="page"
        className={`${
          pathname === href &&
          "bg-linear-to-tr from-blue-600 to-blue-400 shadow-md shadow-blue-500/20"
        } middle none font-sans font-bold center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 rounded-lg  text-white  hover:shadow-lg active:opacity-[0.85] w-full flex items-center gap-4 px-4 capitalize`}
        href={href}
      >
        {icon}
        <p className="block antialiased font-sans text-base leading-relaxed text-inherit font-medium capitalize">
          {label}
        </p>
      </Link>
    </li>
  );
};
