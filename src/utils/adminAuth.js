export const isAuthenticated = () => {
  const token = localStorage.getItem('adminId');
  const role = localStorage.getItem('adminRole');
  if (!token || role != 'admin') return false;

  console.log("true")

  return true;
};

export const getUserFromToken = () => {
  const token = localStorage.getItem('adminId');
   const role = localStorage.getItem('adminRole');
 if (!token || role != 'admin') return null;

return { token, role };
};

export const logout = () => {
  localStorage.removeItem('adminId');
  localStorage.removeItem('adminRole');
  window.location.href = 'admin/login';
};

