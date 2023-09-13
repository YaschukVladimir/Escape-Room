import FilterDifficultyList from '../../components/filter-list/filter-difficulty-list';
import FilterList from '../../components/filter-list/filter-type-list';
import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import QuestsList from '../../components/quests-list/quests-list';
import { Quest } from '../../types';

type MainPageProps = {
  quests: Quest[];
}


function MainPage({quests}: MainPageProps): React.JSX.Element {

  return (
    <div className="wrapper">
      <Header />
      <main className="page-content">
        <div className="container">
          <div className="page-content__title-wrapper">
            <h1 className="subtitle page-content__subtitle">
          квесты в Санкт-Петербурге
            </h1>
            <h2 className="title title--size-m page-content__title">
          Выберите тематику
            </h2>
          </div>
          <div className="page-content__item">
            <form className="filter" action="#" method="get">
              <fieldset className="filter__section">
                <legend className="visually-hidden">Тематика</legend>
                <FilterList />
              </fieldset>
              <fieldset className="filter__section">
                <legend className="visually-hidden">Сложность</legend>
                <FilterDifficultyList />
              </fieldset>
            </form>
          </div>
          <h2 className="title visually-hidden">Выберите квест</h2>
          <QuestsList quests={quests}/>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default MainPage;
