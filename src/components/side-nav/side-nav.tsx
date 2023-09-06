import { Link } from 'react-router-dom';

function SideNav(): React.JSX.Element {
  return (
    <div className="header__side-nav">
      <Link className="btn btn--accent header__side-item" to="/">
        Выйти
      </Link>
      <Link
        className="link header__side-item header__phone-link"
        to="tel:88003335599"
      >
        8 (000) 111-11-11
      </Link>
    </div>
  );
}

export default SideNav;
