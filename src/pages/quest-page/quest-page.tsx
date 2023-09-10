import { Link, useNavigate, useParams } from 'react-router-dom';
import Header from '../../components/header/header';
import { useAppDispatch, useAppSelector } from '../../hooks/use-app-dispatch';
import { getDetailedQuest } from '../../store/data-process/selector';
import { fetchDetailedQuest } from '../../store/api-actions';
import { useEffect } from 'react';
import Footer from '../../components/footer/footer';
import { getAuthStatus } from '../../store/user-process/selectors';
import { AppRoute, AuthorizationStatus } from '../../const/const';
// import { setQuestPlaceId } from '../../store/data-process/data-process';
// import { questDifficulty, questTypes } from '../../const/const';


function QuestPage(): React.JSX.Element {

  const dispatch = useAppDispatch();
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      dispatch(fetchDetailedQuest(id));
    }
  }, [id, dispatch]);

  const detailedQuest = useAppSelector(getDetailedQuest);
  const authStatus = useAppSelector(getAuthStatus);
  // const isBookingInfoLoaded = useAppSelector(getBookingInfoLoadingStatus);
  const navigate = useNavigate();

  return (
    <div className="wrapper">
      <Header />
      <main className="decorated-page quest-page">
        <div className="decorated-page__decor" aria-hidden="true">
          <picture>
            <source
              type="image/webp"
              srcSet={detailedQuest?.coverImgWebp}
            />
            <img
              src={detailedQuest?.previewImg}
              srcSet={detailedQuest?.previewImgWebp}
              width={1366}
              height={768}
              alt=""
            />
          </picture>
        </div>
        <div className="container container--size-l">
          <div className="quest-page__content">
            <h1 className="title title--size-l title--uppercase quest-page__title">
              {detailedQuest?.title}
            </h1>
            <p className="subtitle quest-page__subtitle">
              <span className="visually-hidden">Жанр:</span>{detailedQuest.type}
            </p>
            <ul className="tags tags--size-l quest-page__tags">
              <li className="tags__item">
                <svg width={11} height={14} aria-hidden="true">
                  <use xlinkHref="#icon-person" />
                </svg>
                {`${detailedQuest.peopleMinMax[0]}-${detailedQuest.peopleMinMax[1]}`}&nbsp;чел
              </li>
              <li className="tags__item">
                <svg width={14} height={14} aria-hidden="true">
                  <use xlinkHref="#icon-level" />
                </svg>
                {`${detailedQuest.level}`}
              </li>
            </ul>
            <p className="quest-page__description">
              {detailedQuest.description}
            </p>
            {authStatus !== AuthorizationStatus.Auth ?
              <Link
                className="btn btn--accent btn--cta quest-page__btn"
                to={AppRoute.Login}
              >
                Забронировать
              </Link> :
              <Link
                id={id}
                className="btn btn--accent btn--cta quest-page__btn"
                to={`/quest/${(id) as string}/booking`}
                onClick={(evt) => {
                  evt.preventDefault();
                  // dispatch(setQuestPlaceId(id as string));
                  navigate(`/quest/${(id) as string}/booking`);
                }}
              >
                Забронировать
              </Link>}
          </div>
        </div>
      </main>
      <Footer />
      {/* <footer className="footer">
        <div className="container container--size-l">
          <div className="socials">
            <ul className="socials__list">
              <li className="socials__item">
                <a
                  className="socials__link"
                  href="#"
                  aria-label="Skype"
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                >
                  <svg
                    className="socials__icon socials__icon--default"
                    width={28}
                    height={28}
                    aria-hidden="true"
                  >
                    <use xlinkHref="#icon-skype-default" />
                  </svg>
                  <svg
                    className="socials__icon socials__icon--interactive"
                    width={28}
                    height={28}
                    aria-hidden="true"
                  >
                    <use xlinkHref="#icon-skype-interactive" />
                  </svg>
                </a>
              </li>
              <li className="socials__item">
                <a
                  className="socials__link"
                  href="#"
                  aria-label="ВКонтакте"
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                >
                  <svg
                    className="socials__icon socials__icon--default"
                    width={28}
                    height={28}
                    aria-hidden="true"
                  >
                    <use xlinkHref="#icon-vk-default" />
                  </svg>
                  <svg
                    className="socials__icon socials__icon--interactive"
                    width={28}
                    height={28}
                    aria-hidden="true"
                  >
                    <use xlinkHref="#icon-vk-interactive" />
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer> */}
    </div>

  );
}

export default QuestPage;
