import User from "@/components/User";

async function getUsers() {
  const res = await fetch("https://dummyjson.com/users", { cache: "no-store" });
  return res.json();
}

const UsersPage = async () => {
  const { users } = await getUsers();

  return (
    <div className="grid container mx-auto lg:grid-cols-5 md:grid-cols-3 grid-cols-2 gap-5">
      {users.map((user) => (
        <User key={user.id} user={user} />
      ))}
    </div>
  );
};

export default UsersPage;
