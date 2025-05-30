"use client";
import { productApiUrl } from "@/services/product";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useRef } from "react";
import { LineSpinner } from "ldrs/react";
import "ldrs/react/LineSpinner.css";
import useProduct from "../hooks/useProduct";

const InventoryPagination = ({ data, setFetchUrl }) => {
  const { limitRef, handleLimit, handlePaginate } = useProduct();

  return (
    <div className="flex justify-between items-center">
      <div className=" flex items-center gap-3 text-center">
        <div className="text-sm text-gray-700 dark:text-gray-400">
          Total Items:{" "}
          {data?.meta?.total ?? (
            <LineSpinner size="15" stroke="2" speed="1" color="black" />
          )}
        </div>
        <div className="text-sm text-gray-700 dark:text-gray-400">
          Page :{" "}
          {data?.meta?.current_page ?? (
            <LineSpinner size="15" stroke="2" speed="1" color="black" />
          )}{" "}
          /{" "}
          {data?.meta?.last_page ?? (
            <LineSpinner size="15" stroke="2" speed="1" color="black" />
          )}
        </div>

        <div className="flex items-center ">
          <select
            ref={limitRef}
            onChange={handleLimit}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-14 focus:ring-blue-500 :border-blue-500 block p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option defaultValue={"5"}>5</option>
            <option value="10">10</option>
            <option value="20">20</option>
          </select>
        </div>
      </div>
      <div className=" flex items-center gap-1">
        <button
          type="button"
          disabled={!data?.links?.prev}
          onClick={() => handlePaginate(data?.links?.prev)}
          className="disabled:opacity-50 disabled:pointer-events-none  flex items-center justify-center px-3 h-8  text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
        >
          <ArrowLeft className="size-4 w-3.5 h-3.5 rtl:rotate-180" />
        </button>

        <button
          type="button"
          disabled={!data?.links?.next}
          onClick={() => handlePaginate(data?.links?.next)}
          className="disabled:opacity-50 disabled:pointer-events-none flex items-center justify-center px-3 h-8 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
        >
          <ArrowRight className="size-4 w-3.5 h-3.5 rtl:rotate-180" />
        </button>
      </div>
    </div>
  );
};

export default InventoryPagination;
