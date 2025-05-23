import React from "react";
import LogoutButton from "./LogoutButton";
import Link from "next/link";
import { BoxIcon } from "lucide-react";

const DashboardSection = () => {
  return (
    <section >
      <h1 className="text-2xl  font-bold mb-5 ">App Module</h1>

      <div className="grid grid-cols-5 mb-5">
        <Link
          className="w-full active:scale-95 transition flex flex-row gap-4 justify-center items-center  bg-blue-100 px-5 py-10 rounded-lg border border-blue-200"
          href={"/dashboard/inventory"}
        >
          <BoxIcon className="size-10" />
          <span className=" text-lg font-semibold ">Inventory Module</span>
        </Link>
      </div>
      <LogoutButton />
    </section>
  );
};

export default DashboardSection;
