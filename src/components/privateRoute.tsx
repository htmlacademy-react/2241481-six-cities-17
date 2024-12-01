import { Navigate } from 'react-router-dom';

type PrivateRouteProps = {
    children: JSX.Element;
    isRedirectRequired: boolean;
    navigatePath: string;
}

function PrivateRoute({isRedirectRequired, navigatePath, children}: PrivateRouteProps): JSX.Element{
  return(
    (isRedirectRequired) ? <Navigate to={navigatePath} /> : children
  );
}

export default PrivateRoute;
