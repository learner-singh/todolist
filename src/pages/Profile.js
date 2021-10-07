import React from "react";
import TodoList from "../components/TodoList";
import { Redirect } from "react-router";
import tableify from "tableify";

function Profile({ user }) {
  if (!user) {
    window.alert("you need to login before you access profile");
    return <Redirect to="/login" />;
  }

  return (
    <div>
      <div dangerouslySetInnerHTML={{ __html: tableify(user.userDetails) }} />
      <TodoList user={user} />
    </div>
  );
}

export default Profile;
