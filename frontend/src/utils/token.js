import jwtDecode from 'jwt-decode';

const tokenName = 'token';

export const storeToken = (token) => {
  localStorage.setItem(tokenName, token);
};

export const getToken = () => {
  return localStorage.getItem('token');
};

export const getTokenData = () => {
  const token = getToken();

  try {
    return jwtDecode(token);
  } catch (e) {
    return {};
  }
};

export const removeToken = () => {
  localStorage.removeItem(tokenName);
};
