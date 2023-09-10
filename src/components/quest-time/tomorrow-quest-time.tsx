import { BookingInfo } from '../../types';

type TomorrowQuestTypeProps = {
  tomorrowQuestTimeProps: BookingInfo[];
}


function TomorrowQuestTime({tomorrowQuestTimeProps}: TomorrowQuestTypeProps): React.JSX.Element {

  const tomorrowHours = tomorrowQuestTimeProps[0].slots.tomorrow;

  return(
    <div className="booking-form__date-inner-wrapper">
      {tomorrowHours.map(({time, isAvailable}) => (
        <label className="custom-radio booking-form__date" key={time}>
          <input
            type="radio"
            id="tomorrow11h00m"
            name="date"
            required
            defaultValue="tomorrow11h00m"
            disabled={isAvailable}
          />
          <span className="custom-radio__label">{time}</span>
        </label>
      ))}
    </div>
  );
}

export default TomorrowQuestTime;
