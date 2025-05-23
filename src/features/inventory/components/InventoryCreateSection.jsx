import React from "react";
import ProductCreateForm from "./ProductCreateForm";

const InventoryCreateSection = () => {
  return (
    <section>
      <h3 className="mb-5 text-xl font-semibold dark:text-white text-blue-500">
        Create New Product
      </h3>
      <ProductCreateForm />
    </section>
  );
};

export default InventoryCreateSection;
