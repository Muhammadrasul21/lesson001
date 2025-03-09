import React from "react";
import Link from "next/link";

const DashboardLayout = ({ children }) => {
  return (
    <div className="flex">
      <div className="w-60 h-screen bg-sky-950 text-white p-4 flex flex-col sticky top-0 left-0">
        <h2 className="text-2xl font-bold">Dashboard</h2>
        <div className="my-6 flex flex-col gap-4">
          <Link
            href={"/dashboard"}
            className="border p-3 rounded-xl border-gray-500 active:bg-cyan-400 transition duration-300 ease-in-out"
          >
            Posts
          </Link>
          <Link
            href={"/dashboard/todos"}
            className="border p-3 rounded-xl border-gray-500 active:bg-cyan-400 transition duration-300 ease-in-out"
          >
            Todos
          </Link>
          <Link
            href={"/dashboard/users"}
            className="border p-3 rounded-xl border-gray-500 active:bg-cyan-400 transition duration-300 ease-in-out"
          >
            Users
          </Link>
        </div>
        <Link
          href={"/"}
          className="mt-auto bg-white text-sky-950 py-2 px-4 mb-2 rounded-lg text-center font-semibold hover:bg-gray-200 transition"
        >
          Home
        </Link>
      </div>
      <main className="flex-1">{children}</main>
    </div>
  );
};

export default DashboardLayout;
