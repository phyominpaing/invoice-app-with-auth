import React from "react";

const InventoryTableEmptyRow = () => {
  return (
    <tr className="last:table-row hidden odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 border-gray-200">
      <td
        colSpan={5}
        className="px-6 py-4 text-center text-gray-900 dark:text-white "
      >
        There are no products yet ...{" "}
      </td>
    </tr>
  );
};

export default InventoryTableEmptyRow;
