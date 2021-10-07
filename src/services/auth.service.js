function onLogin(userCredential) {
  const users = JSON.parse(localStorage.getItem("users"));
  // checking if a user with particular username exist
  if (users && users[userCredential.username]) {
    //verifying password
    if (userCredential.password === users[userCredential.username].userDetails.password) {
      return users[userCredential.username];
    }
  }
  //return false if user does not exist or password mismatch
  return null;
}

export const authService = {
  onLogin,
};
