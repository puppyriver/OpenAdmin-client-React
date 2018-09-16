export function authHeader() {
  // return authorization header with jwt token
  const accessToken = JSON.parse(localStorage.getItem('auth_user')).access_token;

  console.log("authHeader !!!!!!!!!!!!!!!!!!!",accessToken);
  if (accessToken) {
    return { 'Authorization': 'Bearer ' + accessToken };
  } else {
    return {};
  }
}