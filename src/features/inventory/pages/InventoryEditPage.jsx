"use client";
import React from "react";
import InventoryEditSection from "../components/InventoryEditSection";
import DashboardLayout from "@/features/dashboard/components/DashboardLayout";
import BreadCrumb from "@/components/BreadCrumb";
import { useParams } from "next/navigation";

const InventoryEditPage = () => {
  const { id } = useParams();
  return (
    <DashboardLayout>
      <BreadCrumb
        currentPageName="Edit Product"
        links={[
          { title: "Inventory Module", path: "/dashboard/inventory" },
          { title: "Product Detail", path: `/dashboard/inventory/${id}` },
        ]}
      />
      <InventoryEditSection />
    </DashboardLayout>
  );
};

export default InventoryEditPage;
