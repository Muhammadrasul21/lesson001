import Image from "next/image";

const User = ({ user }) => {
  return (
    <div
      className="font-semibold text-lg shadow-lg border 
    bg-[#000] rounded-lg border-gray-900 overflow-hidden flex items-center gap-14 p-4"
    >
      <div className="overflow-hidden rounded-full">
        <Image
          src={user.image}
          alt={user.firstName}
          width={60}
          height={60}
          className="rounded-full object-cover hover:scale-105 transition duration-300 ease-in-out cursor-pointer"
        />
      </div>

      <div className="flex flex-col">
        <h3 className="text-xl font-medium text-white line-clamp-1 cursor-pointer">
          {user.firstName} {user.lastName}
        </h3>
        <p className="font-semibold text-cyan-400 text-[13px] cursor-pointer">
          Age : {user.age}
        </p>
        <p className="text-[14px] text-gray-400">
          Country : {user.address.country}
        </p>
      </div>
    </div>
  );
};

export default User;
