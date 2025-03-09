import React from "react";
import { getUsers } from "@/lib/api";
import Link from "next/link";

const UsersPage = async () => {
  const users = await getUsers();

  return (
    <div className=" p-6 flex flex-col items-center gap-6">
      <p className="my-4 font-bold text-3xl text-cyan-500">Users</p>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 w-full">
        {users?.map((user) => (
          <div
            key={user.id}
            className="p-6 rounded-xl shadow-lg border border-gray-500 w-full"
          >
            <h3 className="text-xl font-semibold ">{user.name}</h3>
            <p className="text-sm text-gray-300">@{user.username}</p>
            <p className="mt-2 text-gray-700">
              <Link href={`mailto:${user.email}`} className="text-blue-500">
                {user.email}
              </Link>
            </p>
            <p className="text-gray-300"> {user.phone}</p>
            <p className="text-gray-700">
              🌐{" "}
              <a href={`https://${user.website}`} className="text-blue-500">
                {user.website}
              </a>
            </p>

            <div className="mt-4 p-3 border-t border-gray-600">
              <p className="text-gray-100 font-medium">{user.company.name}</p>
              <p className="text-gray-300 text-sm">
                {user.company.catchPhrase}
              </p>
            </div>

            <div className="mt-4 p-3 border-t border-gray-600 flex flex-col gap-">
              <p className="text-gray-200 font-medium">Address</p>
              <p className="text-gray-300 text-sm">
                {user.address.suite}, {user.address.street}, {user.address.city}
              </p>
              <p className="text-gray-300 text-sm">
                Zip: {user.address.zipcode}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UsersPage;
