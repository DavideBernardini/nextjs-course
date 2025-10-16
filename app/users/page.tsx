import Link from "next/link";

const Users = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await response.json();

  return (
    <div>
      <h1>Users List</h1>
      <ul>
        {users.map((user: { id: number; name: string }) => (
          <li key={user.id}>
            <Link href={`/users/${user.id}`}>
              <h3>{user.name}</h3>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Users;
