import { useState, useEffect } from "react";
import { api } from "../../../api/api";
import { Card } from "antd";
import { Link } from "react-router-dom";

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
              <Link to={`admin/user/${currentUser._id}`}>
                <button>Edit</button>
              </Link>
            </Card>
          </div>
        );
      })}
    </>
  );
}
