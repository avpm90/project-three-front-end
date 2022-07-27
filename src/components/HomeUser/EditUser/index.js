import { useContext } from "react";
//import { api } from "../../api/api";
import { AuthContext } from "../../contexts/authContext";

export function EditUser() {
  const { loggedInUser } = useContext(AuthContext);

  return <></>;
}
