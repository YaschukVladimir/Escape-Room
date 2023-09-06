import { Route, Routes } from 'react-router-dom';
import { AppRoute } from '../../const/const';
import MainPage from '../../pages/main-page/main-page';
import Quest from '../../pages/quest/quest';
import MyQuests from '../../pages/my-quests/my-quests';
import Login from '../../pages/login-page/login';
import Booking from '../../pages/booking-page/booking';
import HistoryRouter from '../history-route';
import browserHistory from '../../browser-history';
import Contacts from '../../pages/contacts-page/contacts';

function MainApp(): React.JSX.Element {
  return (
    <HistoryRouter history={browserHistory}>
      <Routes>
        <Route
          path={AppRoute.Root}
          element={
            <MainPage />
          }
        />
        <Route
          path={AppRoute.Quest}
          element={
            <Quest />
          }
        />
        <Route
          path={AppRoute.MyQuests}
          element={
            <MyQuests />
          }
        />
        <Route
          path={AppRoute.Login}
          element={
            <Login />
          }
        />
        <Route
          path={AppRoute.Booking}
          element={
            <Booking />
          }
        />
        <Route
          path={AppRoute.Contacts}
          element={
            <Contacts />
          }
        />
      </Routes>
    </HistoryRouter>
  );
}

export default MainApp;
