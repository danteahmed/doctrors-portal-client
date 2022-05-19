import chair from "../../assets/images/chair.png";
import bg from "../../assets/images/bg.png";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";

const AppointmentBanner = ({date, setDate}) => {

  return (
    <div
      className="hero min-h-screen mb-5"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="hero-content flex-col lg:flex-row-reverse justify-between">
        <img src={chair} className="max-w-lg rounded-lg shadow-2xl" />
        <div className="mr-10">
          <DayPicker
            mode="single"
            selected={date}
            onSelect={setDate}
          ></DayPicker>
        </div>
      </div>
    </div>
  );
};

export default AppointmentBanner;
