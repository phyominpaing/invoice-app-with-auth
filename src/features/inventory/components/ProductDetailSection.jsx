"use client";

import { fetchProduct, productApiUrl } from "@/services/product";
import { useParams } from "next/navigation";
import React from "react";
import useSWR from "swr";

const ProductDetailSection = () => {
  const { id } = useParams();
  const { data, isLoading, error } = useSWR(
    `${productApiUrl}/${id}`,
    fetchProduct
  );

  if (isLoading) return <div>Loading...</div>;

  return (
    <section>
      <h3 className="mb-5 text-xl font-semibold dark:text-white text-blue-500">
        Product Detail
      </h3>

      <div className="relative overflow-x-auto">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <tbody>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Product Name
              </th>
              <td className="px-6 py-4">{data?.data?.product_name}</td>
            </tr>
                  <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Price
              </th>
              <td className="px-6 py-4">{data?.data?.price}</td>
            </tr>
                  <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Created At
              </th>
              <td className="px-6 py-4">{data?.data?.created_at}</td>
            </tr>
                  

          </tbody>
        </table>
      </div>
    </section>
  );
};

export default ProductDetailSection;
