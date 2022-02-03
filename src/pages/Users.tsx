import React, { useEffect, useState } from "react";

const Users = (props: {name: string}) => {

  return (
  <div>
    <h1>USERS PAGE For authenticated Users</h1>
    <h2>{props.name ? 'Hi ' + props.name + '!' : 'You are not logged in!'}</h2>

  </div>);
};

export default Users;
