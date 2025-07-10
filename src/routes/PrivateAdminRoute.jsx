import { Navigate } from 'react-router-dom';
import { isAuthenticated } from '../utils/adminAuth';

const PrivateAdminRoute = ({ children }) => {
  return isAuthenticated() ? children : <Navigate to="/admin/login" />;
};

export default PrivateAdminRoute;