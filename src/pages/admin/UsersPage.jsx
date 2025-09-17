import { getAllUsers } from "../../api/getAllUsers.api.js";
import { useState, useEffect } from "react";

export default function UsersPage() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const data = await getAllUsers();
        setUsers(data);
        // console.log("All Data: ", data.usersInfo[0]);
      } catch (error) {
        console.error("Error fetching users data: ", error.message);
      }
    };

    fetchUsers();
  }, []);

  return (
    <>
      <div>
        <p className="text-3xl font-mono mb-4">Users Info </p>
        <table className="min-w-full text-left">
          <thead className="bg-white/10 text-gray-700">
            <tr>
              <th className="px-4 py-2">Id</th>
              <th className="px-4 py-2">Name</th>
              <th className="px-4 py-2">Email</th>
              <th className="px-4 py-2">Role</th>
              <th className="px-4 py-2">Phone</th>
              <th className="px-4 py-2">Signup Date</th>
              <th className="px-4 py-2 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((item) => (
              <tr key={item.id} className="hover:bg-gray-100/10">
                <td className="px-4 py-2">{item.id}</td>
                <td className="px-4 py-2">{item.name}</td>
                <td className="px-4 py-2">{item.email}</td>
                <td className="px-4 py-2">{item.role}</td>
                <td className="px-4 py-2">{item.phone || "-"}</td>
                <td className="px-4 py-2">
                  {new Date(item.createdAt).toLocaleDateString()}
                </td>
                <td className="px-2 text-center flex items-center justify-center gap-2 h-full mt-2">
                  {" "}
                  <button className="bg-blue-400 px-5 py-1 cursor-pointer duration-300 hover:bg-blue-600 rounded">
                    View
                  </button>
                  <button className="bg-green-500 px-5 py-1 cursor-pointer duration-300 hover:bg-green-600 rounded">
                    Edit
                  </button>
                  <button className="bg-red-500 px-5 py-1 cursor-pointer duration-300 hover:bg-red-600 rounded text-white/80">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
