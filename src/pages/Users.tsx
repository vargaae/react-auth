import { useEffect, useState } from "react";

const Users = () => {
// const Users = (props: {name: string}) => {
  const [name, setName] = useState('')

    useEffect(() => {
    (
      async () => {
      const response = await fetch("http://localhost:8000/api/user", {
        headers: { "Content-Type": "application/json" },
        credentials: "include",
      });

      const content = await response.json()

      setName(content.name)
    })();
  });

  return (
  <div>
    <h1>USERS PAGE For authenticated Users</h1>
    <h2>{name ? 'Hi ' + name + '!' : 'You are not logged in!'}</h2>

  </div>);
};

export default Users;
