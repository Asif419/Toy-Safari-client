import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  console.log(location);
  if (loading) {
    return <div className='flex min-h-12 items-center justify-center'><progress className="progress w-56"></progress></div>
  }
  if (user) {
    return children;
  }
  return <Navigate state={{ from: location }} to='/login' replace></Navigate>;
};

export default PrivateRoute;