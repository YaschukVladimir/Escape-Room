import { questTypes } from '../../const/const';
import { useAppDispatch } from '../../hooks/use-app-dispatch';
import { changeQuestType } from '../../store/app-process/app-process';
import { useAppSelector } from '../../hooks/use-app-dispatch';
import { getQuestType } from '../../store/app-process/selectors';

function FilterTypeList(): React.JSX.Element {

  const questType = useAppSelector(getQuestType);
  const dispatch = useAppDispatch();

  return (
    <ul className="filter__list">
      {Object.entries(questTypes).map(([key, value]) => (
        <li className="filter__item" key={key}>
          <input type="radio" name="type" id={key}
            onChange={() => {
              dispatch(changeQuestType(key));
            }}
            checked={key === questType}
          />
          <label className="filter__label" htmlFor={key}>
            <svg
              className="filter__icon"
              width={26}
              height={30}
              aria-hidden="true"
            >
              <use xlinkHref={`#icon-${key}`} />
            </svg>
            <span className="filter__label-text" >{value}</span>
          </label>
        </li>
      ))}
    </ul>
  );
}

export default FilterTypeList;
