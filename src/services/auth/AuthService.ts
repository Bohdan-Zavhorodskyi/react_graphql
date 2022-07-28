export const login = () => {
  window.localStorage.setItem('auth', 'true');
};

export const isAuthenticated = () => {
  return !!window.localStorage.getItem('auth');
};

export const logout = () => {
  if (window.localStorage.getItem('auth')) {
    window.localStorage.removeItem('auth');
  }
};
