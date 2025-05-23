import React from "react";
import InventoryTableRow from "./InventoryTableRow";
import InventoryTable from "./InventoryTable";
import InventoryActionBar from "./InventoryActionBar";
import useSWR from "swr";
import { fetchProduct, productApiUrl } from "@/services/product";

const InventoryListSection = () => {
  const { data, isLoading, error } = useSWR(productApiUrl, fetchProduct);

  if(isLoading){
    return <div>Loading...</div>
  }
  console.log(data);
  
  return (
    <section className="relative overflow-x-auto">
      <h3 className="mb-5 text-xl font-semibold dark:text-white text-blue-500">
        Inventory List
      </h3>
      <InventoryActionBar />
      <InventoryTable products={data?.data} />
    </section>
  );
};

export default InventoryListSection;
