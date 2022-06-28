import { useState } from "react";

const World = () => {
  const [word, setWord] = useState("world");
  const changeWorld = () => {
    // const newWord = word === "world" ? "world!!" : "world";
    // setWord(newWord);
    setWord(word === "world" ? "world!!" : "world");
  };

  return (
    <>
      <p>{word}</p>
      <button onClick={changeWorld}>change</button>
    </>
  );
};

export default World;
