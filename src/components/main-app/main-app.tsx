import { Route, Routes } from 'react-router-dom';
import { AppRoute } from '../../const/const';
import MainPage from '../../pages/main-page/main-page';
import MyQuests from '../../pages/my-quests/my-quests';
import LoginPage from '../../pages/login-page/login-page';
import Booking from '../../pages/booking-page/booking';
import HistoryRouter from '../history-route';
import browserHistory from '../../browser-history';
import Contacts from '../../pages/contacts-page/contacts';
import { useAppSelector } from '../../hooks/use-app-dispatch';
import { getQuests } from '../../store/data-process/selector';
import QuestPage from '../../pages/quest-page/quest-page';


function MainApp(): React.JSX.Element {
  const quests = useAppSelector(getQuests);

  // console.log(quests, 'quests');

  return (
    <HistoryRouter history={browserHistory}>
      <Routes>
        <Route
          path={AppRoute.Root}
          element={
            <MainPage
              quests={quests}
            />
          }
        />
        <Route
          path={AppRoute.Quest}
          element={
            <QuestPage />
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
            <LoginPage />
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
