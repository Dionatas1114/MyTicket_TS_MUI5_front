export function login(data: any) {
  return {
    type: '@user/LOGIN',
    data,
  };
}

export function logout(data: any) {
  return {
    type: '@user/LOGOUT',
    data,
  };
}
