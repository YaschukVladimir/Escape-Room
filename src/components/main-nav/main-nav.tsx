import { Link } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const/const';
import { useAppSelector } from '../../hooks/use-app-dispatch';
import { getAuthStatus } from '../../store/user-process/selectors';

function MainNav(): React.JSX.Element {

  const authStatus = useAppSelector(getAuthStatus);

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
        {authStatus === AuthorizationStatus.Auth ?
          <li className="main-nav__item">
            <Link className="link" to={AppRoute.MyQuests}>
         Мои бронирования
            </Link>
          </li> :
          <li className="main-nav__item">
            <Link className="link" to={AppRoute.Login}>
       Мои бронирования
            </Link>
          </li>}
      </ul>
    </nav>
  );
}

export default MainNav;
