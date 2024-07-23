export function getJwtToken() {
  return localStorage.getItem('jwtToken')
}

export function setJwtToken(jwt) {
  localStorage.setItem('jwtToken', jwt)
}
export function saveUser(user) {
  localStorage.setItem('user', JSON.stringify(user))
}

export function getUser() {
  return JSON.parse(localStorage.getItem('user'))
}
