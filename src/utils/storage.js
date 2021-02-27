const tokenKey = 'hm-mobile-78'
export const setToken = (tokenInfo) => {
  localStorage.setItem(tokenKey, JSON.stringify(tokenInfo))
}
export const getToken = () => {
  return JSON.parse(localStorage.getItem(tokenKey))
}
export const removeToken = () => {
  localStorage.removeItem(tokenKey)
}
