import { destroyProduct, productApiUrl } from "@/services/product";
import { FileText, PencilLine, Trash2 } from "lucide-react";
import Link from "next/link";
import React from "react";
import { toast } from "sonner";
import { useSWRConfig } from "swr";

const InventoryTableRow = ({ product }) => {
  const {mutate } = useSWRConfig();
  const handleDelete = async () => {
    if (!confirm("Are you sure you want to delete this product?")) return;

    try {
      const res = await destroyProduct(product.id);
      const json = await res.json();
      if (!res.ok) {
        throw new Error(json.message);
      }
      toast.success(json.message);
      mutate(productApiUrl);
    } catch (error) {
      toast.error(error.message);
    }
  };



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
      <td className="px-6 py-4 text-end">${product.price}</td>
      <td className="px-6 py-4 flex gap-1 items-center justify-end text-center">
        <Link
          href={`/dashboard/inventory/${product.id}/edit`}
          className=" size-9 border hover:bg-gray-200 active:scale-85 duration-100 rounded border-gray-400 text-gray-500 flex justify-center items-center font-medium   hover:underline"
        >
          <PencilLine className="size-5" />
        </Link>
        <button
          onClick={handleDelete}
          className=" size-9 border hover:bg-gray-200 active:scale-85 duration-100 rounded border-gray-400 text-gray-500 flex justify-center items-center font-medium   hover:underline"
        >
          <Trash2 className="size-5" />
        </button>
        <Link
          href={`/dashboard/inventory/${product.id}`}
          className=" size-9 border hover:bg-gray-200 active:scale-85 duration-100 rounded border-gray-400 text-gray-500  flex justify-center items-center font-medium   hover:underline"
        >
          <FileText className="size-5" />
        </Link>
      </td>
    </tr>
  );
};

export default InventoryTableRow;
