"use client";
import useAccountStore from "@/store/useAccountStore";
import { useRouter } from "next/navigation";
import React from "react";

const LogoutButton = () => {
  const { logout } = useAccountStore();
  const router = useRouter();
  const handleLogoutBtn = () => {
    logout();
    router.push("/login");
  };
  return (
    <button
      onClick={handleLogoutBtn}
      className="text-white bg-blue-700 cursor-pointer  dark:text-white hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-sm text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
    >
      Log out
    </button>
  );
};

export default LogoutButton;
