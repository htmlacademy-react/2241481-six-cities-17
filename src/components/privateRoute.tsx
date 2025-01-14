import { Navigate } from 'react-router-dom';
import { useAppSelector } from '../hooks';
import { AuthorizationStatus } from './consts';
import { selectAuthorizationStatus } from '../types/store/selectors';

type PrivateRouteProps = {
    children: JSX.Element;
    navigatePath: string;
}

function PrivateRoute({navigatePath, children}: PrivateRouteProps): JSX.Element{
  const authStatus = useAppSelector(selectAuthorizationStatus);
  return(
    authStatus !== AuthorizationStatus.Auth ?
      <Navigate to={navigatePath} /> :
      children
  );
}

export default PrivateRoute;
