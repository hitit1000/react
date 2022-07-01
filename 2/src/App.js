import "./App.css";
import Header from "./component/Header";
import Content, { Content2 } from "./component/Content";
import Footer from "./component/Footer";
// import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <Content data="hitit" />
      <Content2 />
      <Footer />
    </>
  );
}

export default App;
