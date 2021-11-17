export const storeToken = (token, name = 'token') => {
  localStorage.setItem(name, token);
};

export const getToken = () => {
  return localStorage.getItem('token');
};

export const getTokenData = () => {
  const token = getToken();

  try {
    return JSON.parse(atob(token.split('.')[1]));
  } catch (e) {
    return {};
  }
};
