"use client";

import React from "react";
import ProductEditForm from "./ProductEditForm";
import useSWR from "swr";
import { useParams } from "next/navigation";
import { fetchProduct, productApiUrl } from "@/services/product";

const InventoryEditSection = () => {
  const { id } = useParams();

  const { data, isLoading, error } = useSWR(
    `${productApiUrl}/${id}`,
    fetchProduct
  );

  if (isLoading)
    return (
      <section>
        <h3 className="mb-5 text-xl font-semibold dark:text-white text-blue-500">
          Edit Product
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:gap-5 gap-2 md:gap-3 animate-pulse">
          {/* Product Name */}
          <div className="col-span-1">
            <div className="h-4 w-32 bg-gray-300 rounded mb-2 dark:bg-gray-600" />
            <div className="h-10 bg-gray-200 rounded-lg dark:bg-gray-700" />
          </div>
          <div className="col-span-3" />

          {/* Product Price */}
          <div className="col-span-1">
            <div className="h-4 w-40 bg-gray-300 rounded mb-2 dark:bg-gray-600" />
            <div className="h-10 bg-gray-200 rounded-lg dark:bg-gray-700" />
          </div>
          <div className="col-span-3" />

          {/* Checkboxes & Button */}
          <div className="col-span-full mt-1 space-y-4">
            {/* Confirm checkbox */}
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-gray-300 rounded dark:bg-gray-600" />
              <div className="h-4 w-40 bg-gray-300 rounded dark:bg-gray-600" />
            </div>

            {/* Back to list checkbox */}
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-gray-300 rounded dark:bg-gray-600" />
              <div className="h-4 w-56 bg-gray-300 rounded dark:bg-gray-600" />
            </div>

            {/* Submit button */}
            <div className="h-10 w-40 bg-gray-300 rounded-lg dark:bg-gray-700" />
          </div>
        </div>
      </section>
    );

  return (
    <div>
      <h3 className="mb-5 text-xl font-semibold dark:text-white text-blue-500">
        Edit Product
      </h3>
      <ProductEditForm product={data?.data} />
    </div>
  );
};

export default InventoryEditSection;
