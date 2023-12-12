
import { useAppDispatch } from '../../hooks/use-app-dispatch';
import { setFormDate, setFormTime } from '../../store/data-process/data-process';
import { BookingInfo } from '../../types';

type TodayQuestTimeProps = {
  todayQuestTimeProps: BookingInfo;
}

function TodayQuestTime({todayQuestTimeProps}: TodayQuestTimeProps): React.JSX.Element {
  const dispatch = useAppDispatch();
  const todayHours = todayQuestTimeProps.slots.today;

  const handleSetFormDateTime = (data: string) => {
    dispatch(setFormTime(data));
    dispatch(setFormDate('today'));
  };


  return (
    <div className="booking-form__date-inner-wrapper">
      {todayHours.map(({time, isAvailable}) => (
        <label className="custom-radio booking-form__date" key={time}>
          <input
            type="radio"
            id="today9h45m"
            name="date"
            required
            defaultValue="today9h45m"
            disabled={!isAvailable}
            onChange={() => handleSetFormDateTime(time)}
          />
          <span className="custom-radio__label">{time}</span>
        </label>
      ))}
    </div>
  );
}

export default TodayQuestTime;
