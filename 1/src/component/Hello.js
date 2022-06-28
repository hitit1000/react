import World from "./World";
import styles from "./Hello.module.css";

const showName = () => {
  console.log("이름");
};

const showText = (e) => {
  console.log(e.target.value);
};

const Hello = () => {
  return (
    <>
      <p className={styles.box}>Hello</p>
      <button onClick={showName}>showName</button>
      <button
        onClick={() => {
          console.log(32);
        }}
      >
        showAge
      </button>
      <input type="text" onChange={showText}></input>
      <World />
      <World />
    </>
  );
};

export default Hello;
