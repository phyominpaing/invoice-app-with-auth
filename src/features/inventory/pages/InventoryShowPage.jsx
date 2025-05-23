"use client";
import BreadCrumb from "@/components/BreadCrumb";
import DashboardLayout from "@/features/dashboard/components/DashboardLayout";
import React from "react";
import ProductDetailSection from "../components/ProductDetailSection";

const InventoryShowPage = () => {
  return (
    <DashboardLayout>
      <BreadCrumb
        currentPageName="Product Detail"
        links={[{ title: "Inventory Module", path: "/dashboard/inventory" }]}
      />
      <ProductDetailSection />
    </DashboardLayout>
  );
};

export default InventoryShowPage;
