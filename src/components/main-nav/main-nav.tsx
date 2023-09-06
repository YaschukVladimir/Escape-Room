import { Link } from 'react-router-dom';
import { AppRoute } from '../../const/const';

function MainNav(): React.JSX.Element {
  return (
    <nav className="main-nav header__main-nav">
      <ul className="main-nav__list">
        <li className="main-nav__item">
          <Link className="link" to={AppRoute.Root}>
            Квесты
          </Link>
        </li>
        <li className="main-nav__item">
          <Link className="link" to={AppRoute.Contacts}>
            Контакты
          </Link>
        </li>
        <li className="main-nav__item">
          <Link className="link" to={AppRoute.MyQuests}>
            Мои бронирования
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default MainNav;
