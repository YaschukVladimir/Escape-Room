import { questDifficulty } from '../../const/const';

function FilterDifficultyList(): React.JSX.Element {
  return (
    <ul className="filter__list">
      {Object.entries(questDifficulty).map(([key, value]) => (
        <li className="filter__item" key={key}>
          <input type="radio" name="level" id={key} defaultChecked />
          <label className="filter__label" htmlFor={key}>
            <span className="filter__label-text">{value}</span>
          </label>
        </li>
      ))}
    </ul>
  );

  // return (
  //   <ul className="filter__list">
  //     <li className="filter__item">
  //       <input type="radio" name="level" id="any" defaultChecked />
  //       <label className="filter__label" htmlFor="any">
  //         <span className="filter__label-text">Любой</span>
  //       </label>
  //     </li>
  //     <li className="filter__item">
  //       <input type="radio" name="level" id="easy" />
  //       <label className="filter__label" htmlFor="easy">
  //         <span className="filter__label-text">Лёгкий</span>
  //       </label>
  //     </li>
  //     <li className="filter__item">
  //       <input type="radio" name="level" id="middle" />
  //       <label className="filter__label" htmlFor="middle">
  //         <span className="filter__label-text">Средний</span>
  //       </label>
  //     </li>
  //     <li className="filter__item">
  //       <input type="radio" name="level" id="hard" />
  //       <label className="filter__label" htmlFor="hard">
  //         <span className="filter__label-text">Сложный</span>
  //       </label>
  //     </li>
  //   </ul>
  // );
}

export default FilterDifficultyList;
