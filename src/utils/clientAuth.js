
export const isAuthenticated = () => {
  const token = localStorage.getItem('userId');
  const role = localStorage.getItem('role');
  if (!token && role!="user"){  
    return false 
  };
  return true;
};

export const getUserFromToken = () => {
  const token = localStorage.getItem('userId');
  const role = localStorage.getItem('role');
  if (!token && role!="user") return null;

  try {
    return { token, role };
  } catch (err) {
    return null;
  }
};

export const logout = () => {
  localStorage.removeItem('userId');
  localStorage.removeItem('role');
  window.location.href = '/auth';
};
