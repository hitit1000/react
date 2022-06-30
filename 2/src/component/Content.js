import { useState } from "react";

const Content = (props) => {
  const [count, setCount] = useState(0);
  console.log(useState(123));
  return (
    <>
      <h1>Hey, what's up!</h1>
      <h2>{props.data}</h2>
    </>
  );
};

const Content2 = () => {
  return <div>Content2</div>;
};

export { Content as default, Content2 };
