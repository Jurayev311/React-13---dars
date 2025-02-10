import { useSelector, useDispatch } from "react-redux";
import { removeUser, updateUser } from "../../redux/features/create.slice";
import { Link } from "react-router-dom";
import { useState } from "react";

const Home = () => {
  const users = useSelector((state) => state.users.users);
  const dispatch = useDispatch();
  const [editId, setEditId] = useState(null);
  const [newName, setNewName] = useState("");

  const handleEdit = (user) => {
    setEditId(user.id);
    setNewName(user.name);
  };

  const handleSave = (id) => {
    dispatch(updateUser({ id, name: newName }));
    setEditId(null);
  };

  return (
    <div className="max-w-2xl mx-auto my-10">
      <h1 className="text-3xl font-bold text-center mb-6">Users List</h1>
      <div className="flex justify-end mb-4">
        <Link to="/create" className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-700">
          Create New User
        </Link>
      </div>
      <ul className="space-y-4">
        {users?.map((user) => (
          <li key={user.id} className="flex justify-between items-center bg-gray-100 p-4 rounded shadow">
            {editId === user.id ? (
              <input
                type="text"
                value={newName}
                onChange={(e) => setNewName(e.target.value)}
                className="border p-2 rounded w-2/3"
              />
            ) : (
              <span className="text-lg font-medium">{user.name}</span>
            )}
            <div className="space-x-2">
              {editId === user.id ? (
                <button
                  onClick={() => handleSave(user.id)}
                  className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-700"
                >
                  Save
                </button>
              ) : (
                <>
                  <button
                    onClick={() => handleEdit(user)}
                    className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-700"
                  >
                    Update
                  </button>
                  <button
                    onClick={() => dispatch(removeUser(user.id))}
                    className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-700"
                  >
                    Delete
                  </button>
                </>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
