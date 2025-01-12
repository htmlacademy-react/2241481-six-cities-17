import { Navigate } from 'react-router-dom';
import { useAppSelector } from '../hooks';
import { AuthorizationStatus } from './consts';

type PrivateRouteProps = {
    children: JSX.Element;
    navigatePath: string;
}

function PrivateRoute({navigatePath, children}: PrivateRouteProps): JSX.Element{
  const authStatus = useAppSelector((store)=> store.authorizationStatus);
  return(
    authStatus === AuthorizationStatus.Auth ?
      <Navigate to={navigatePath} /> :
      children
  );
}

export default PrivateRoute;
