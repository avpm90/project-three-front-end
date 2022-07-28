import { useState, useEffect } from "react";
import { api } from "../../../api/api";
import { Card, Button } from "antd";
import style from "./style.module.css";

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
      <div className={style.divPaidac}>
        <div className={style.divKid}>
          {users.map((currentUser) => {
            return (
              <div key={currentUser._id} className={style.divAntCar}>
                <p>
                  {currentUser.name} {currentUser.surname}
                </p>
                <p>{currentUser.email}</p>

                <Button
                  type="primary"
                  onClick={() => deleteUser(currentUser._id)}
                >
                  Delete
                </Button>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
