import Image from "next/image";

const User = ({ user }) => {
  return (
    <div className="p-5 flex flex-col items-center font-semibold text-lg shadow-lg border 
      max-w-xs bg-[#000] rounded-lg hover:shadow-xl transition duration-300 ease-in-out border-gray-900 overflow-hidden">
      
      <div className="overflow-hidden rounded-full">
        <Image
          src={user.image}
          alt={user.firstName}
          width={200}
          height={200}
          className="rounded-full object-cover hover:scale-105 transition duration-300 ease-in-out cursor-pointer"
        />
      </div>

      <h3 className="text-xl font-medium mt-3 text-white line-clamp-1 cursor-pointer">
        {user.firstName} {user.lastName}
      </h3>
      <p className="font-semibold text-cyan-400 px-3 py-1 rounded-lg mt-2 cursor-pointer">
        {user.email}
      </p>
    </div>
  );
};

export default User;
