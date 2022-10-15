import Cookies from 'js-cookie';
import { Navigate } from 'react-router-dom';
type ProtectedRouteProps = {
  children: JSX.Element;
};
export const ProtectedRoute = ({
  children
}: ProtectedRouteProps): JSX.Element => {
  const token = Cookies.get('token');
  if (!token) {
    return <Navigate to="/" />;
  }
  return children;
};
