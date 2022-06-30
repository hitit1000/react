import DayList from "./component/DayList";
import Header from "./component/Header";
import Day from "./component/Day";
import CreactWord from "./component/CreateWord";
import CreactDay from "./component/CreateDay";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import EmptyPage from "./component/EmptyPage";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="*" element={<EmptyPage />} />
          <Route exact path="/" element={<DayList />} />
          <Route path="/day/:day" element={<Day />} />
          <Route path="create_word" element={<CreactWord />} />
          <Route path="create_day" element={<CreactDay />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
