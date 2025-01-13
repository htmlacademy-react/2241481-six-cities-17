import Logo from './logo';
import UserLoginControl from './user-login-control';

type HeaderProps = {
  showUserLogin: boolean;
}

function Header({showUserLogin}: HeaderProps): JSX.Element {
  return(
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          {showUserLogin ? <><Logo /><UserLoginControl /></> : <Logo />}
        </div>
      </div>
    </header>
  );
}

export default Header;
