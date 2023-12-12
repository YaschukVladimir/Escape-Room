import { Link, useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks/use-app-dispatch';
import { getAuthStatus } from '../../store/user-process/selectors';
import { AppRoute, AuthorizationStatus } from '../../const/const';
import { logoutAction } from '../../store/api-actions';

function SideNav(): React.JSX.Element {

  const dispatch = useAppDispatch();
  const authStatus = useAppSelector(getAuthStatus);
  const navigate = useNavigate();


  if (authStatus === AuthorizationStatus.Auth) {
    return (
      <div className="header__side-nav">
        <Link className="btn btn--accent header__side-item"
          to="/"
          onClick={(evt) => {
            evt.preventDefault();
            dispatch(logoutAction());
            navigate(AppRoute.Root);
          }}
        >
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
  } else {
    return (
      <div className="header__side-nav">
        <Link className="btn header__side-item header__login-btn" to={AppRoute.Login}>
          Войти
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

}

export default SideNav;
