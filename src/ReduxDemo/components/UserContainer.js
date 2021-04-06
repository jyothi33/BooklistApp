import React, { useEffect } from "react";
import { fetchUsersFromApi } from "../redux/users/userActions";
import { connect } from "react-redux";

const UserContainer = ({ fetchUsersList, userData }) => {
  useEffect(() => {
    fetchUsersList();
  }, []);
  return userData.loading && userData.error ? (
    <h2>{userData.error}</h2>
  ) : (
    <h2>
      Redux - Thunk Example
      <hr />
      {userData.users &&
        userData.users.map((user) => <p key={user.id}>{user.name}</p>)}
    </h2>
  );
};

const mapStateToProps = (state) => {
  return {
    userData: state.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUsersList: () => dispatch(fetchUsersFromApi()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer);
