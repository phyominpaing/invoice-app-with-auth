"use client";

import { fetchProduct, productApiUrl } from "@/services/product";
import Link from "next/link";
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

      <div className=" grid grid-cols-4 ">
        <div className=" border rounded-lg col-span-2 p-3">
          <table className="mb-5 p-5 w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <tbody>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-lg text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Product Name
                </th>
                <td className="px-6 py-4 text-slate-500 font-medium">
                  {data?.data?.product_name}
                </td>
              </tr>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
                <th
                  scope="row"
                  className="px-6 py-4 text-lg font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Price
                </th>
                <td className="px-6 py-4 text-slate-500 font-medium">
                  {data?.data?.price}
                </td>
              </tr>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
                <th
                  scope="row"
                  className="px-6 text-lg py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Created At
                </th>
                <td className="px-6 py-4 text-slate-500 font-medium">
                  {data?.data?.created_at}
                </td>
              </tr>
            </tbody>
          </table>
          <div className="flex justify-end">
            <Link
              className=" py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-400 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
              href={`/dashboard/inventory/${id}/edit`}
            >
              Edit Product
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetailSection;
