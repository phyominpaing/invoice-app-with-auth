import React from "react";

const InventoryTableRow = ({ product }) => {
  return (
    <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 border-gray-200">
      <th
        scope="row"
        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
      >
        {product.id}
      </th>
      <td className="px-6 py-4 text-blue-900 dark:text-white font-medium">
        {product.product_name}
      </td>
      <td className="px-6 py-4">${product.price}</td>
      <td className="px-6 py-4">
        <a
          href="#"
          className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
        >
          Edit
        </a>
      </td>
    </tr>
  );
};

export default InventoryTableRow;
