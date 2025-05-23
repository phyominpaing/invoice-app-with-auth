import { Plus, Search } from "lucide-react";
import Link from "next/link";
import React from "react";

const InventoryActionBar = () => {
  return (
    <div className="flex justify-between items-center mb-3">
      <div className="relative">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
          <Search className="text-gray-500 dark:text-gray-400 size-4" />
        </div>
        <input
          type="search"
          id="search"
          className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Search"
          required
        />
      </div>

      <div className="relative">
        <Link
          href={"/dashboard/inventory/create"}
          type="submit"
          className="text-white border flex justify-center items-center gap-4 border-blue-700 end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          <span>Create Product </span>
          <Plus className="size-4" />
        </Link>
      </div>
    </div>
  );
};

export default InventoryActionBar;
