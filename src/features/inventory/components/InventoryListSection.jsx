"use client";

import React, { useEffect, useState } from "react";
import InventoryTable from "./InventoryTable";
import InventoryActionBar from "./InventoryActionBar";
import useSWR from "swr";
import { fetchProduct, productApiUrl } from "@/services/product";
import { ArrowLeft, ArrowRight } from "lucide-react";
import ProductListLoader from "./ProductListLoader";
import { useSearchParams } from "next/navigation";
import InventoryPagination from "./InventoryPagination";
import useProduct from "../hooks/useProduct";

const InventoryListSection = () => {
  const { products, productLoading, setFetchUrl } = useProduct();
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
      <InventoryActionBar />
      {productLoading ? (
        <ProductListLoader />
      ) : (
        <InventoryTable products={products?.data} />
      )}
      <InventoryPagination data={products} setFetchUrl={setFetchUrl} />
    </section>
  );
};

export default InventoryListSection;
