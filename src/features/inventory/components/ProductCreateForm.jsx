"use client";

import { storeProduct } from "@/services/product";
import { useRouter } from "next/navigation";
import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

const ProductCreateForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm();

  const router = useRouter();

  const onSubmit = async (data) => {
    try {
      const res = await storeProduct({
        product_name: data.product_name,
        price: data.price,
      });
      const json = await res.json();
      if (!res.ok) {
        throw new Error(json.message);
      }
      toast.success(json.message);

      // step after data saving
      reset();
      if (data.back_to_list) {
        router.push("/dashboard/inventory");
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:gap-5 gap-2 md:gap-3">
        {/* Product Name */}
        <div className="col-span-1">
          <label
            htmlFor="product_name"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Product Name <span className="text-red-600"> * </span>
          </label>
          <input
            type="text"
            id="product_name"
            {...register("product_name", {
              required: "Product Name is required",
            })}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="eg. Laptop"
          />
          {errors.product_name && (
            <p className="mt-1 text-sm text-red-600">
              {errors.product_name.message}
            </p>
          )}
        </div>
        <div className="col-span-3"></div>

        {/* Product Price */}
        <div className="col-span-1">
          <label
            htmlFor="price"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Product Price (MMK) <span className="text-red-600"> * </span>
          </label>
          <input
            type="text"
            id="price"
            {...register("price", { required: "Price is required" })}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="eg. 1000"
          />
          {errors.price && (
            <p className="mt-1 text-sm text-red-600">{errors.price.message}</p>
          )}
        </div>
        <div className="col-span-3"></div>

        {/* Checkbox + Button */}
        <div className="col-span-full mt-1">
          <div className="flex items-center mb-3">
            <input
              required
              id="link-checkbox"
              type="checkbox"
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              htmlFor="link-checkbox"
              className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              I confirm all correct
            </label>
          </div>

          <div className="flex items-center mb-3">
            <input
              id="back_to_list"
              type="checkbox"
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              {...register("back_to_list")}
            />
            <label
              htmlFor="back_to_list"
              className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Go back to Product list after create
            </label>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className={`text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 disabled:bg-gray-400 disabled:cursor-not-allowed`}
          >
            {isSubmitting ? "Creating ......." : "Create Product"}
          </button>
        </div>
      </div>
    </form>
  );
};

export default ProductCreateForm;
