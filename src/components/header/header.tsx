import Logo from '../logo/logo';
import MainNav from '../main-nav/main-nav';
import SideNav from '../side-nav/side-nav';

function Header(): React.JSX.Element {
  return (
    <header className="header">
      <div className="container container--size-l">
        <Logo />
        <MainNav />
        <SideNav />
      </div>
    </header>
  );
}

export default Header;
