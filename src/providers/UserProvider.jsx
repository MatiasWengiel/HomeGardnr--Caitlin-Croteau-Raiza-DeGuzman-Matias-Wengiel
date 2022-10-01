import { useState } from "react";
import { useEffect } from "react";
import { createContext } from "react";
import axios from "axios";

export const userContext = createContext();

export default function UserProvider(props) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  useEffect(() => {
    axios.get("/api/users/1").then((response) => {
      setFirstName(response.data.first_name);
      setLastName(response.data.last_name);
    });
  }, []);

  const userData = {
    userID: 1,
    userName: `${firstName} ${lastName}`,
  };
  return (
    <userContext.Provider value={userData}>
      {props.children}
    </userContext.Provider>
  );
}
