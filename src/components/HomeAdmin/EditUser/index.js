import { useState, useEffect } from "react";
import { api } from "../../../api/api";
import { Card } from "antd";

export function EditUser() {
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
  return (
    <>
      {users.map((currentUser) => {
        return (
          <div key={currentUser.name}>
            <Card style={{ borderRadius: 50 }}>
              <p>
                {currentUser.name} {currentUser.surname}
              </p>
              <p>{currentUser.email}</p>
              <button>View</button>
              <button>Delete</button>
            </Card>
          </div>
        );
      })}
    </>
  );
}
