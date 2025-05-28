"use client";

import React, { useState } from "react";
import InventoryTable from "./InventoryTable";
import InventoryActionBar from "./InventoryActionBar";
import useSWR from "swr";
import { fetchProduct, productApiUrl } from "@/services/product";
import { ArrowLeft, ArrowRight } from "lucide-react";
import ProductListLoader from "./ProductListLoader";

const InventoryListSection = () => {
  const [fetchUrl, setFetchUrl] = useState(`${productApiUrl}`);
  const { data, isLoading, error } = useSWR(fetchUrl, fetchProduct);

  const handleSearch = () => {

  }

  // const handleNext = () => {
  //   const currentPage = parseInt(data?.meta?.current_page);
  //   const lastPage = data?.meta?.last_page;
  //   const nextPage = currentPage + 1 < lastPage ? currentPage + 1 : lastPage;
  //   setFetchUrl(`${productApiUrl}?limit=5&page=${nextPage}`);
  // };

  return (
    <section className="relative overflow-x-auto">
      <h3 className="mb-5 text-xl font-semibold dark:text-white text-blue-500">
        Inventory List
      </h3>
      <InventoryActionBar setFetchUrl={setFetchUrl} />
      {isLoading ? (
        <ProductListLoader />
      ) : (
        <InventoryTable products={data?.data} />
      )}

      <div className="flex justify-end items-center">
        {/* Previous Button */}
        <button
          type="button"
          disabled={!data?.links?.prev}
          onClick={() => setFetchUrl(data?.links?.prev)}
          className="disabled:opacity-50 disabled:pointer-events-none  flex items-center justify-center px-3 h-8 me-3 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
        >
          <ArrowLeft className="size-4 w-3.5 h-3.5 me-2 rtl:rotate-180" />
          Previous
        </button>

        <button
          type="button"
          disabled={!data?.links?.next}
          onClick={() => setFetchUrl(data?.links?.next)}
          className="disabled:opacity-50 disabled:pointer-events-none flex items-center justify-center px-3 h-8 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
        >
          Next
          <ArrowRight className="size-4 w-3.5 h-3.5 ms-2 rtl:rotate-180" />
        </button>
      </div>
    </section>
  );
};

export default InventoryListSection;
