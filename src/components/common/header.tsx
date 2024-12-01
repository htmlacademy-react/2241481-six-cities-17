import Logo from './logo';
import Navigation from './navigation';

type HeaderProps = {
  isNavigationRequired: boolean;
}

function Header({isNavigationRequired}: HeaderProps): JSX.Element {
  return(
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          {isNavigationRequired ? <><Logo /><Navigation /></> : <Logo />}
        </div>
      </div>
    </header>
  );
}

export default Header;
