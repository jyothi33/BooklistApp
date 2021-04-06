import React, { useEffect } from "react";
import { getUsers } from "../redux/users/userActions";
import { useSelector, useDispatch } from "react-redux";
const UserContainer = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.user.users);
  const loading = useSelector((state) => state.user.loading);
  const error = useSelector((state) => state.user.error);

  useEffect(() => {
    dispatch(getUsers());
  }, []);

  return (
    <>
      <p>Redux - Saga Example</p>
      {loading && <p>Loading.....</p>}
      {users.length > 0 &&
        users.map((user) => <p key={user.id}>{user.name}</p>)}
      {users.length === 0 && !loading && <p>No users available!</p>}
      {error && !loading && <p>{error}</p>}
    </>
  );
};

export default UserContainer;
