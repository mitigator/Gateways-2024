import { useEffect, useState } from "react";
import Gradient from "./Gradient";
import InnerCircle from "../assets/InnerCircle.png";
import OuterCircle from "../assets/OuterCircle.png";

const Hero = () => {
  const calculateTimeLeft = () => {
    const eventDate = new Date("2024-11-17T07:30:00"); // Replace with your event date
    const difference = eventDate - new Date();

    let timeLeft = {};
    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-[100vh] flex justify-start items-end overflow-hidden ">
      <Gradient degree={220} />
      <h1
        className="absolute top-0 left-1/2 transform -translate-x-1/2 text-3xl font-bold text-Hero-text mt-8"
        style={{ letterSpacing: "0.5em" }}
      >
        GATEWAYS
      </h1>
      <h1 className="absolute top-10 left-1/2 transform -translate-x-1/2 text-3xl font-bold text-White mt-8 tracking-[10px]">
        2024
      </h1>
      <div className="absolute bottom-0 left-0 p-6">
        <div className="w-52 h-28 bg-white rounded-t-full flex justify-center items-center ">
          <div className="text-center translate-x-[-15px]">
            <h1 className="text-lg font-bold text-White">
              {timeLeft.days}d : {timeLeft.hours}h : {timeLeft.minutes}m :{" "}
              {timeLeft.seconds}s
            </h1>
          </div>
        </div>
      </div>

      <img
        src={InnerCircle}
        alt="Count1"
        className="w-72 h-auto translate-x-[-35px] translate-y-[155px] absolute bottom-0 left-0 p-4 flex items-start"
      />
      <img
        src={OuterCircle}
        alt="Count1"
        className="w-80 h-auto translate-x-[-25px] translate-y-[180px] absolute bottom-0 left-0 p-4 flex items-start"
      />
    </div>
  );
};

export default Hero;
