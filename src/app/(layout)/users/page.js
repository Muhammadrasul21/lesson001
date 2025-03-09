import User from "@/components/User";

async function getUsers() {
  const res = await fetch("https://dummyjson.com/users");
  return res.json();
}

const UsersPage = async () => {
  const { users } = await getUsers();

  return (
    <div className="grid container mx-auto lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5">
      {users.map((user) => (
        <User key={user.id} user={user} />
      ))}
    </div>
  );
};

export default UsersPage;
