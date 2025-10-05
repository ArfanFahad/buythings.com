import { getAllUsers } from "../../api/usersAPI/getAllUsers.api.js";
import { deleteUser } from "../../api/usersAPI/userDelete.api.js";
import { useState, useEffect } from "react";

export default function UsersPage() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const data = await getAllUsers();
        setUsers(data);
        // API Timing Simulation
        setTimeout(() => {
          setLoading(false);
        }, 500);
      } catch (error) {
        console.error("Error fetching users data: ", error.message);
        setError(error.message);
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  const handleDelete = async (id) => {
    // if (!window.confirm("Are you sure you want to delete this user?")) return;
    try {
      await deleteUser(id);
    } catch (error) {
      console.error("Delete failed: ", error.message);
    }
  };

  if (loading) {
    return <p className="text-white font-light text-2xl">Loading...</p>;
  }

  if (error) {
    return <p className="text-red-500 font-light text-3xl">Error: {error}</p>;
  }

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
              <tr key={item.id}>
                <td className="px-4 py-2">{item.id}</td>
                <td className="px-4 py-2">{item.name}</td>
                <td className="px-4 py-2">{item.email}</td>
                <td className="px-4 py-2">{item.role}</td>
                <td className="px-4 py-2">{item.phone || "-"}</td>
                <td className="px-4 py-2">
                  {new Date(item.createdAt).toLocaleDateString()}
                </td>
                <td className="px-2 text-center">
                  {" "}
                  <button className="border px-5 py-1 cursor-pointer duration-300 hover:bg-blue-600 hover:text-white hover:border-blue-500 rounded mr-2">
                    View
                  </button>
                  <button className="border px-5 py-1 cursor-pointer duration-300 hover:bg-green-600 hover:text-white hover:border-green-600 rounded mr-2">
                    Edit
                  </button>
                  <button
                    className="border px-5 py-1 cursor-pointer duration-300 hover:bg-red-600 hover:text-white hover:border-red-500 rounded"
                    onClick={() => handleDelete(item.id)}
                  >
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
