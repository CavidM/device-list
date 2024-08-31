let authToken: string | null = null;

export const getToken = () => authToken;

export const setToken = (token: string):void => {
  authToken = token;
};
