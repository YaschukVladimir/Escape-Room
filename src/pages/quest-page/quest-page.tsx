import Header from '../../components/header/header';


function QuestPage(): React.JSX.Element {
  return (
    <div className="wrapper">
      <Header />
      <main className="decorated-page quest-page">
        <div className="decorated-page__decor" aria-hidden="true">
          <picture>
            <source
              type="image/webp"
              srcSet="/public/img/content/maniac/maniac-size-m.webp, /public/img/content/maniac/maniac-size-m@2x.webp 2x"
            />
            <img
              src="/public/img/content/maniac/maniac-size-m.jpg"
              srcSet="/public/img/content/maniac/maniac-size-m@2x.jpg 2x"
              width={1366}
              height={768}
              alt=""
            />
          </picture>
        </div>
        <div className="container container--size-l">
          <div className="quest-page__content">
            <h1 className="title title--size-l title--uppercase quest-page__title">
              Маньяк
            </h1>
            <p className="subtitle quest-page__subtitle">
              <span className="visually-hidden">Жанр:</span>Ужасы
            </p>
            <ul className="tags tags--size-l quest-page__tags">
              <li className="tags__item">
                <svg width={11} height={14} aria-hidden="true">
                  <use xlinkHref="#icon-person" />
                </svg>
                3–6&nbsp;чел
              </li>
              <li className="tags__item">
                <svg width={14} height={14} aria-hidden="true">
                  <use xlinkHref="#icon-level" />
                </svg>
                Средний
              </li>
            </ul>
            <p className="quest-page__description">
              В&nbsp;комнате с&nbsp;приглушённым светом несколько человек,
              незнакомых друг с&nbsp;другом, приходят в&nbsp;себя. Никто
              не&nbsp;помнит, что произошло прошлым вечером. Руки и&nbsp;ноги
              связаны, но&nbsp;одному из&nbsp;вас получилось освободиться.
              На&nbsp;стене висит пугающий таймер и&nbsp;запущен отсчёт
              60&nbsp;минут. Сможете&nbsp;ли вы&nbsp;разобраться в&nbsp;стрессовой
              ситуации, помочь другим, разобраться что произошло и&nbsp;выбраться
              из&nbsp;комнаты?
            </p>
            <a
              className="btn btn--accent btn--cta quest-page__btn"
              href="booking.html"
            >
              Забронировать
            </a>
          </div>
        </div>
      </main>
      <footer className="footer">
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
      </footer>
    </div>

  );
}

export default QuestPage;