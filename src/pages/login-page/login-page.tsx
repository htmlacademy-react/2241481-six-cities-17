import Header from '../../components/common/header';
import { Link, useNavigate } from 'react-router-dom';
import LoginForm from './login-form';
import { useAppSelector } from '../../hooks';
import { selectAuthorizationStatus } from '../../store/user-slice/selectors';
import { AppRoute, AuthorizationStatus } from '../../components/consts';

function LoginPage(): JSX.Element {
  const navigate = useNavigate();
  const authorizationStatus = useAppSelector(selectAuthorizationStatus);

  if (authorizationStatus === AuthorizationStatus.Auth){
    navigate(AppRoute.Main);
  }
  return (
    <div className="page page--gray page--login">
      <Header showUserLogin={false} />
      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <section className="login">
            <h1 className="login__title">Sign in</h1>
            <LoginForm/>
          </section>
          <section className="locations locations--login locations--current">
            <div className="locations__item">
              <Link className="locations__item-link" to="#">
                <span>Amsterdam</span>
              </Link>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default LoginPage;
