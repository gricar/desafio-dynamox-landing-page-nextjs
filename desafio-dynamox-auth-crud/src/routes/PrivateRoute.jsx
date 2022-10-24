import { Navigate, Outlet } from 'react-router-dom';
import { GetData } from '../services/storage';

const PrivateRoute = () => {
  const accessToken = GetData('accessToken');

  return accessToken ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;
