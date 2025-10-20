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
        setTimeout(() => setLoading(false), 500);
      } catch (error) {
        console.error("Error fetching users data: ", error.message);
        setError(error.message);
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  const handleDelete = async (id) => {
    try {
      await deleteUser(id);
    } catch (error) {
      console.error("Delete failed: ", error.message);
    }
  };

  if (loading) {
    return <p className="text-slate-200 text-xl font-light">Loading...</p>;
  }

  if (error) {
    return <p className="text-red-400 text-xl font-light">Error: {error}</p>;
  }

  return (
    <div className="text-slate-100">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-semibold text-slate-50">Users</h1>
      </div>

      {/* Table */}
      <div className="overflow-hidden rounded-xl border border-slate-600 shadow-md">
        <table className="min-w-full text-sm text-left border-collapse">
          <thead className="bg-slate-700 text-slate-200 uppercase tracking-wider text-xs">
            <tr>
              <th className="px-4 py-3 font-medium">ID</th>
              <th className="px-4 py-3 font-medium">Name</th>
              <th className="px-4 py-3 font-medium">Email</th>
              <th className="px-4 py-3 font-medium">Role</th>
              <th className="px-4 py-3 font-medium">Phone</th>
              <th className="px-4 py-3 font-medium">Signup Date</th>
              <th className="px-4 py-3 font-medium text-center">Actions</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-slate-700">
            {users.map((item) => (
              <tr
                key={item.id}
                className="hover:bg-slate-600/60 transition-colors"
              >
                <td className="px-4 py-3">{item.id}</td>
                <td className="px-4 py-3">{item.name}</td>
                <td className="px-4 py-3 text-slate-300">{item.email}</td>
                <td className="px-4 py-3">{item.role}</td>
                <td className="px-4 py-3">{item.phone || "-"}</td>
                <td className="px-4 py-3 text-slate-400">
                  {new Date(item.createdAt).toLocaleDateString()}
                </td>

                <td className="px-4 py-3 text-center">
                  <button className="inline-block px-3 py-1.5 mr-2 bg-blue-500 hover:bg-blue-400 text-white font-medium rounded-md transition-all">
                    View
                  </button>
                  <button className="inline-block px-3 py-1.5 mr-2 bg-emerald-500 hover:bg-emerald-400 text-white font-medium rounded-md transition-all">
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(item.id)}
                    className="inline-block px-3 py-1.5 bg-red-500 hover:bg-red-400 text-white font-medium rounded-md transition-all"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
