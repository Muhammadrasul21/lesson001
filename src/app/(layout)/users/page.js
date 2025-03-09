import User from "@/components/User";
import { getUser } from "@/lib/api";

const UsersPage = async () => {
  const { users } = await getUser();

  return (
    <div className="grid container mx-auto lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5">
      {users.map((user) => (
        <User key={user.id} user={user} />
      ))}
    </div>
  );
};

export default UsersPage;
