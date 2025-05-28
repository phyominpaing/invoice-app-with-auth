"use client";
import useAccountStore from "@/store/useAccountStore";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

const DashboardLayout = ({ children }) => {
  const { token } = useAccountStore.getState();
  const router = useRouter();

  useEffect(() => {
    if (!token) {
      router.push("/login");
    }
  }, [token]);

  return (
    <>
      <main className="p-10">
        {/* <div className="col-span-2">
          <DashboardSideBar />
        </div> */}
        {children}
      </main>
    </>
  );
};

export default DashboardLayout;
