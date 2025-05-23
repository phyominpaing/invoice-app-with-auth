import { ChevronRight, HomeIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

const BreadCrumb = ({ currentPageName = "", links = [] }) => {
  return (
    <nav
      className=" inline-flex mb-8 px-5 py-3 text-gray-700 border-2 border-gray-200 rounded-lg bg-blue-50 dark:bg-gray-800 dark:border-gray-700"
      aria-label="Breadcrumb"
    >
      <div className="flex items-center">
        <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
          <li className="inline-flex items-center">
            <Link
              href="/dashboard"
              className="inline-flex items-center justify-center gap-1 text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white"
            >
              <HomeIcon className="size-4" />
              <span>Home</span>
            </Link>
          </li>
          {links.map((link, index) => (
            <li key={index + "link"} aria-current="page">
              <div className="flex items-center">
                <ChevronRight className="size-4 rtl:rotate-180 block mx-1 text-gray-700 " />
                <Link
                  href={link.path}
                  className="ms-1 text-sm hover:text-blue-600 dark:text-gray-400 dark:hover:text-white font-medium text-gray-700 md:ms-2 "
                >
                  {link.title}
                </Link>
              </div>
            </li>
          ))}
          <li aria-current="page">
            <div className="flex items-center">
              <ChevronRight className="size-4 rtl:rotate-180 block mx-1 text-gray-600" />
              <span className="ms-1 text-sm font-medium text-gray-500 md:ms-2 dark:text-gray-400">
                {currentPageName}
              </span>
            </div>
          </li>
        </ol>
      </div>
    </nav>
  );
};

export default BreadCrumb;
