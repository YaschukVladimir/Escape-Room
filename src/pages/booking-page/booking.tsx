import { useEffect } from 'react';
import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import TodayQuestTime from '../../components/quest-time/today-quest-time';
import { useAppDispatch, useAppSelector } from '../../hooks/use-app-dispatch';
import { fetchBookingQuestInfo } from '../../store/api-actions';
import { getBookingQuestInfo, getDetailedQuest, getIsWithChildrenFormData, getSelectedQuestPlace } from '../../store/data-process/selector';
import { useParams } from 'react-router-dom';
import TomorrowQuestTime from '../../components/quest-time/tomorrow-quest-time';
import MapMemo from '../../components/map/map';
import { setFormChildren, setFormPeopleCount, setFormPerson, setFormPhone, setFormPlaceId, setQuestPlaceId } from '../../store/data-process/data-process';

// type BookingProps = {
//   id: string;
// }

function Booking(): React.JSX.Element {

  const {id} = useParams();

  const dispatch = useAppDispatch();
  const detailedQuest = useAppSelector(getDetailedQuest);
  const isWithChildren = useAppSelector(getIsWithChildrenFormData);

  useEffect(() => {
    if (id) {
      dispatch(fetchBookingQuestInfo(id));
      dispatch(setQuestPlaceId(id));
      dispatch(setFormPlaceId(id));
    }
  }, [id, dispatch, detailedQuest.id]);

  const bookingQuestInfo = useAppSelector(getBookingQuestInfo);
  // const selectedQuestId = useAppSelector(getSelectedQuestPlaceId);

  const handleSetContactPersonName = (data: string) => {
    dispatch(setFormPerson(data));
  };

  const handleSetPhone = (data: string) => {
    dispatch(setFormPhone(data));
  };

  const handleSetPeopleCount = (data: number) => {
    dispatch(setFormPeopleCount(data));
  };

  const handleSetIsWhithChildren = () => {
    dispatch(setFormChildren());
  };


  const selectedQuestPlace = useAppSelector(getSelectedQuestPlace);

  return (
    <div className="wrapper">
      <Header/>
      <main className="page-content decorated-page">
        <div className="decorated-page__decor" aria-hidden="true">
          <picture>
            <source
              type="image/webp"
              srcSet={detailedQuest.coverImgWebp}
            />
            <img
              src={detailedQuest.coverImg}
              srcSet={detailedQuest.coverImgWebp}
              width={1366}
              height={1959}
              alt=""
            />
          </picture>
        </div>
        <div className="container container--size-s">
          <div className="page-content__title-wrapper">
            <h1 className="subtitle subtitle--size-l page-content__subtitle">
          Бронирование квеста
            </h1>
            <p className="title title--size-m title--uppercase page-content__title">
              {detailedQuest.title}
            </p>
          </div>
          <div className="page-content__item">
            <div className="booking-map">
              <div className="map">
                <div className="map__container">
                  {bookingQuestInfo.length && <MapMemo bookingInfo={bookingQuestInfo}/>}
                </div>
              </div>
              <p className="booking-map__address">
                {selectedQuestPlace?.location.address}
              </p>
            </div>
          </div>
          <form
            className="booking-form"
            action="https://echo.htmlacademy.ru/"
            method="post"
          >
            <fieldset className="booking-form__section">
              <legend className="visually-hidden">Выбор даты и времени</legend>
              <fieldset className="booking-form__date-section">
                <legend className="booking-form__date-title">Сегодня</legend>
                {bookingQuestInfo.length && <TodayQuestTime todayQuestTimeProps={selectedQuestPlace}/>}
              </fieldset>
              <fieldset className="booking-form__date-section">
                <legend className="booking-form__date-title">Завтра</legend>
                {bookingQuestInfo.length && <TomorrowQuestTime tomorrowQuestTimeProps={selectedQuestPlace}/>}
              </fieldset>
            </fieldset>
            <fieldset className="booking-form__section">
              <legend className="visually-hidden">Контактная информация</legend>
              <div className="custom-input booking-form__input">
                <label className="custom-input__label" htmlFor="name">
              Ваше имя
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Имя"
                  required
                  pattern="[А-Яа-яЁёA-Za-z'- ]{1,}"
                  onChange={(evt: React.ChangeEvent<HTMLInputElement>) => handleSetContactPersonName(evt.target.value)}
                />
              </div>
              <div className="custom-input booking-form__input">
                <label className="custom-input__label" htmlFor="tel">
              Контактный телефон
                </label>
                <input
                  type="tel"
                  id="tel"
                  name="tel"
                  placeholder="Телефон"
                  required
                  pattern="[0-9]{10,}"
                  onChange={(evt: React.ChangeEvent<HTMLInputElement>) => handleSetPhone(evt.target.value)}
                />
              </div>
              <div className="custom-input booking-form__input">
                <label className="custom-input__label" htmlFor="person">
              Количество участников
                </label>
                <input
                  type="number"
                  id="person"
                  name="person"
                  placeholder="Количество участников"
                  required
                  onChange={(evt: React.ChangeEvent<HTMLInputElement>) => handleSetPeopleCount(Number(evt.target.value))}
                />
              </div>
              <label className="custom-checkbox booking-form__checkbox booking-form__checkbox--children">
                <input
                  type="checkbox"
                  id="children"
                  name="children"
                  onChange={() => handleSetIsWhithChildren()}
                  checked={isWithChildren}
                />
                <span className="custom-checkbox__icon">
                  <svg width={20} height={17} aria-hidden="true">
                    <use xlinkHref="#icon-tick" />
                  </svg>
                </span>
                <span className="custom-checkbox__label">
              Со&nbsp;мной будут дети
                </span>
              </label>
            </fieldset>
            <button
              className="btn btn--accent btn--cta booking-form__submit"
              type="submit"
            >
          Забронировать
            </button>
            <label className="custom-checkbox booking-form__checkbox booking-form__checkbox--agreement">
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
      </main>
      <Footer />
    </div>

  );
}

export default Booking;
