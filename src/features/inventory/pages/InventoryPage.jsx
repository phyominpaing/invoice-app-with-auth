"use client";
import BreadCrumb from "@/components/BreadCrumb";
import React from "react";
import DashboardLayout from "@/features/dashboard/components/DashboardLayout";
import InventoryListSection from "../components/InventoryListSection";

const InventoryPage = () => {
  return (
    <DashboardLayout>
      <BreadCrumb currentPageName="Inventory Module" />
      <InventoryListSection />
    </DashboardLayout>
  );
};

export default InventoryPage;
