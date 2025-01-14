import { Link } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../consts';
import { useAppDispatch } from '../../hooks';
import { logout } from '../../store/action-api';
import { selectAuthorizationStatus, selectCurrentUser } from '../../types/store/selectors';

function UserLoginControl(): JSX.Element{
  const dispatch = useAppDispatch();
  const currentUser = useAppSelector(selectCurrentUser);
  const authorizationStatus = useAppSelector(selectAuthorizationStatus);
  const logoutHandler = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    dispatch(logout());
  };

  return(
    <nav className="header__nav">
      <ul className="header__nav-list">
        {authorizationStatus === AuthorizationStatus.Auth ?
          <>
            <li className="header__nav-item user">
              <Link
                className="header__nav-link header__nav-link--profile"
                to={
                  authorizationStatus === AuthorizationStatus.Auth ?
                    AppRoute.Favorites :
                    AppRoute.LogIn
                }
              >
                <div className="header__avatar-wrapper user__avatar-wrapper"></div>
                <span className="header__user-name user__name">{currentUser?.email}</span>
                <span className="header__favorite-count">3</span>
              </Link>
            </li>
            <li className="header__nav-item">
              <Link className="header__nav-link"
                to="#"
                onClick={logoutHandler}
              >
                <span className="header__signout">Sign out</span>
              </Link>
            </li>
          </>
          :
          <li className="header__nav-list">
            <Link className="header__nav-link header__nav-link--profile" to={AppRoute.LogIn}>
              <div className="header__avatar-wrapper user__avatar-wrapper"></div>
              <span className="header__login">Sign in</span>
            </Link>
          </li>}
      </ul>
    </nav>
  );
}

export default UserLoginControl;
