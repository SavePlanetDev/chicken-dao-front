import { useState, useEffect } from "react";
import dayjs from "dayjs";
import styles from "../styles/Body.module.css";

const defaultRemainingTime = {
  seconds: "00",
  minutes: "00",
  hours: "00",
  days: "00",
};

export type CountdownTimerProps = {
  endtimeMs: number;
  setCanSettle: Function;
};

function CountdownTimer({ endtimeMs, setCanSettle }: CountdownTimerProps) {
  const [remainingTime, setRemainingTime] = useState(defaultRemainingTime);

  useEffect(() => {
    const intervalId = setInterval(() => {
      updateRemainingTime(endtimeMs, setCanSettle);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [endtimeMs]);

  //update remaining time var
  function updateRemainingTime(ms: number, setCanSattle: Function) {
    setRemainingTime(getRemainingTimeUntilMsTimestamp(ms, setCanSattle));
  }

  return (
    <div className={styles.textbox}>
      {/* <span>{remainingTime.days}</span>
      <span>days</span> */}
      <span className={styles.timenun}>
        {remainingTime.hours}
        <span className={styles.timetext}>hr</span>
      </span>

      <span className={styles.timenun}>
        {remainingTime.minutes}
        <span className={styles.timetext}>min</span>
      </span>

      <span className={styles.timenun}>
        {remainingTime.seconds}
        <span className={styles.timetext}>sec</span>
      </span>
    </div>
  );
}

function getRemainingTimeUntilMsTimestamp(
  timestampMs: number,
  setCanSettle: Function
) {
  const timestampDayjs = dayjs(timestampMs * 1000);
  const nowDayjs = dayjs();

  if (timestampDayjs.isBefore(nowDayjs)) {
    setCanSettle(true);
    return {
      seconds: "00",
      minutes: "00",
      hours: "00",
      days: "00",
    };
  }

  return {
    seconds: getRemainingSeconds(nowDayjs, timestampDayjs),
    minutes: getRemainingMinutes(nowDayjs, timestampDayjs),
    hours: getRemainingHours(nowDayjs, timestampDayjs),
    days: getRemainingDays(nowDayjs, timestampDayjs),
  };
}

function getRemainingSeconds(
  newDayjs: dayjs.Dayjs,
  timestampDayjs: dayjs.Dayjs
) {
  const seconds = timestampDayjs.diff(newDayjs, "seconds") % 60;
  return padWithZeros(seconds, 2);
}

function getRemainingMinutes(
  newDayjs: dayjs.Dayjs,
  timestampDayjs: dayjs.Dayjs
) {
  const mintutes = timestampDayjs.diff(newDayjs, "minutes") % 60;
  return padWithZeros(mintutes, 2);
}

function getRemainingHours(newDayjs: dayjs.Dayjs, timestampDayjs: dayjs.Dayjs) {
  const hours = timestampDayjs.diff(newDayjs, "hours") % 60;
  return padWithZeros(hours, 2);
}

function getRemainingDays(newDayjs: dayjs.Dayjs, timestampDayjs: dayjs.Dayjs) {
  const days = timestampDayjs.diff(newDayjs, "days") % 24;
  return padWithZeros(days, 2);
}

function padWithZeros(number: number, minLength: number) {
  const numberString = number.toString();
  if (numberString.length >= minLength) return numberString;
  return "0".repeat(minLength - numberString.length) + numberString;
}

export default CountdownTimer;
