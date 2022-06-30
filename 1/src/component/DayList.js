import styles from "./DayList.module.css";
import { Link } from "react-router-dom";
import useFetch from "../hooks/useFetch";

const DayList = () => {
  // const [days, setDays] = useState([]);
  // useEffect(() => {
  //   console.log("init");
  //   fetch("http://localhost:3001/days")
  //     .then((res) => {
  //       return res.json();
  //     })
  //     .then((data) => {
  //       setDays(data);
  //     });
  // }, []);
  const days = useFetch("http://localhost:3001/days");
  if (days.length === 0) {
    return <span>loading...</span>;
  }
  return (
    <ul className={styles.list_day}>
      {days.map((day) => (
        <li key={day.id}>
          <Link to={`/day/${day.day}`}>Day {day.day}</Link>
        </li>
      ))}
    </ul>
  );
};

export default DayList;
