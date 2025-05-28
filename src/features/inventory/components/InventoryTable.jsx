import React from "react";
import InventoryTableRow from "./InventoryTableRow";
import InventoryTableEmptyRow from "./InventoryTableEmptyRow";

const InventoryTable = ({ products }) => {
  return (
    <div className="relative overflow-x-auto mb-3 shadow-md border border-slate-200 sm:rounded-lg">
      <table className="w-full text-sm text-left border rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs border-b border-b-slate-200 text-gray-700 uppercase bg-blue-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              #
            </th>
            <th scope="col" className="px-6 py-3">
              Product Name
            </th>

            <th scope="col" className="px-6 py-3 text-end">
              Price
            </th>
            <th scope="col" className="px-6 py-3 text-end">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          <InventoryTableEmptyRow />
          {products?.map((product) => (
            <InventoryTableRow key={product.id} product={product} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default InventoryTable;
