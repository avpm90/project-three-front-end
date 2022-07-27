import { useState, useEffect } from "react";
import { api } from "../../../api/api";
import { Card } from "antd";

export function ViewUser() {
  const [users, setUsers] = useState([
    {
      name: "",
      surname: "",
    },
  ]);
  console.log(users);

  useEffect(() => {
    async function fetchUsers() {
      const response = await api.get("/user/all-users");
      setUsers(response.data);
    }
    fetchUsers();
  }, []);

  async function deleteUser(id) {
    await api.delete(`/user/delete-user/${id}`);
    window.location.reload();
  }

  return (
    <>
      {users.map((currentUser) => {
        return (
          <div key={currentUser._id}>
            <Card style={{ borderRadius: 50 }}>
              <p>
                {currentUser.name} {currentUser.surname}
              </p>
              <p>{currentUser.email}</p>
              <button onClick={() => deleteUser(currentUser._id)}>
                Delete
              </button>
            </Card>
          </div>
        );
      })}
    </>
  );
}
