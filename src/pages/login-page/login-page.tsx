import { FormEvent, useRef, useState } from 'react';
import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import { useAppDispatch, useAppSelector } from '../../hooks/use-app-dispatch';
import { getAuthStatus } from '../../store/user-process/selectors';
import { loginAction } from '../../store/api-actions';
import { AppRoute, AuthorizationStatus } from '../../const/const';
import { Navigate } from 'react-router-dom';


function LoginPage(): React.JSX.Element {

  const [isPasswordValid, setIsPasswordValid] = useState<boolean>(false);
  const [passwordLength, setPasswordLenght] = useState<number>(0);

  const passRegEx = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]+$/;

  const authStatus = useAppSelector(getAuthStatus);

  const loginRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const handlePasswordChange = () => {
    setIsPasswordValid(passRegEx.test((passwordRef.current?.value) as string));
    setPasswordLenght((passwordRef.current?.value.length) as number);
  };

  const dispatch = useAppDispatch();

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    if (loginRef.current !== null && passwordRef.current !== null && isPasswordValid) {
      dispatch(loginAction({
        email: loginRef.current.value,
        password: passwordRef.current.value
      }));
    }
  };

  if (authStatus !== AuthorizationStatus.Auth) {
    return (
      <div className="wrapper">
        <Header />
        <main className="decorated-page login">
          <div className="decorated-page__decor" aria-hidden="true">
            <picture>
              <source
                type="image/webp"
                srcSet="img/content/maniac/maniac-size-m.webp, img/content/maniac/maniac-size-m@2x.webp 2x"
              />
              <img
                src="img/content/maniac/maniac-size-m.jpg"
                srcSet="img/content/maniac/maniac-size-m@2x.jpg 2x"
                width={1366}
                height={768}
                alt=""
              />
            </picture>
          </div>
          <div className="container container--size-l">
            <div className="login__form">
              <form
                className="login-form"
                action="https://echo.htmlacademy.ru/"
                method="post"
                onSubmit={handleSubmit}
              >
                <div className="login-form__inner-wrapper">
                  <h1 className="title title--size-s login-form__title">Вход</h1>
                  <div className="login-form__inputs">
                    <div className="custom-input login-form__input">
                      <label className="custom-input__label" htmlFor="email">
                      E&nbsp;–&nbsp;mail
                      </label>
                      <input
                        ref={loginRef}
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Адрес электронной почты"
                        required
                      />
                    </div>
                    <div className="custom-input login-form__input">
                      <label className="custom-input__label" htmlFor="password">
                      Пароль
                      </label>
                      <input
                        ref={passwordRef}
                        type="password"
                        id="password"
                        name="password"
                        placeholder="Пароль"
                        required
                        onInput={handlePasswordChange}
                      />
                      {!isPasswordValid && passwordLength ? <p>Password must contains letters and numbers</p> : ''}
                    </div>
                  </div>
                  <button
                    className="btn btn--accent btn--general login-form__submit"
                    type="submit"
                  >
                  Войти
                  </button>
                </div>
                <label className="custom-checkbox login-form__checkbox">
                  <input
                    type="checkbox"
                    id="id-order-agreement"
                    name="user-agreement"
                    required
                  />
                  <span className="custom-checkbox__icon">
                    <svg width={20} height={17} aria-hidden="true">
                      <use xlinkHref="#icon-tick" />
                    </svg>
                  </span>
                  <span className="custom-checkbox__label">
                  Я&nbsp;согласен с
                    <a className="link link--active-silver link--underlined" href="#">
                    правилами обработки персональных данных
                    </a>
                  &nbsp;и пользовательским соглашением
                  </span>
                </label>
              </form>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  } else {
    return (
      <Navigate to={AppRoute.Root} />
    );
  }

}

export default LoginPage;
