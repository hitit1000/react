import styles from "./Word.module.css";
import { useState } from "react";

const Word = (Props) => {
  const [isShow, setIsShow] = useState(false);
  const [isDone, setIsDone] = useState(Props.word.isDone);
  const [word, setWord] = useState(Props.word);
  const toggleShow = () => {
    setIsShow(!isShow);
  };
  const toggleDone = () => {
    // setIsDone(!isDone);
    fetch(`http://localhost:3001/words/${word.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...word,
        isDone: !isDone,
      }),
    }).then((res) => {
      if (res.ok) {
        setIsDone(!isDone);
      }
    });
  };

  const del = () => {
    if (window.confirm("삭제 하시겠습니까?")) {
      fetch(`http://localhost:3001/words/${word.id}`, {
        method: "DELETE",
      }).then((res) => {
        if (res.ok) {
          setWord({ id: 0 });
        }
      });
    }
  };
  if (word.id === 0) {
    return null;
  }
  return (
    <tr className={isDone ? "off" : ""}>
      <td>
        <input type="checkbox" checked={isDone} onChange={toggleDone}></input>
      </td>
      <td>{word.eng}</td>
      <td>{isShow && word.kor}</td>
      <td>
        <button className={styles.btn_watch} onClick={toggleShow}>
          {isShow ? "숨기기" : "뜻보기"}
        </button>
        <button className={styles.btn_del} onClick={del}>
          삭제
        </button>
      </td>
    </tr>
  );
};

export default Word;
