import { Navigate } from 'react-router-dom';
import { isAuthenticated } from '../utils/clientAuth';

const PrivateClientRoute = ({ children }) => {
  return isAuthenticated() ? children : <Navigate to="/auth" />;
};

export default PrivateClientRoute;