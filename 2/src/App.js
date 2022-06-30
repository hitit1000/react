import "./App.css";
import Header from "./component/Header";
import Content, { Content2 } from "./component/Content";
import Footer from "./component/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Content data="hitit" />
      <Content2 />
      <Footer />
    </div>
  );
}

export default App;
