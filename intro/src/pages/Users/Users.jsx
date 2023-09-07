import React, { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios(
        "https://jsonplaceholder.typicode.com/users"
      );
      // console.log(response);
      setUsers(response.data);
    };
    fetchData();
  }, []);
  console.log(users);
  return (
    <div>
      <h1>Usuarios</h1>
      {users &&
        users.map((user) => (
          <div key={user.id}>
            <h1>{user.name}</h1>
            <h4>{user.email}</h4>
            <h4>{user.phone}</h4>
          </div>
        ))}
    </div>
  );
};

export default Users;
