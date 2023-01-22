module.exports = function isLoggedIn(session) {
  if (session.isLoggedIn) {
    let user = {
      id: session.id,
      username: session.username,
      display_name: session.display_name,
      isLoggedIn: true,
      admin: session.admin
    }
    return user;
  } else {
    return false;
  }
}