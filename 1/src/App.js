import DayList from "./component/DayList";
import Header from "./component/Header";
import Day from "./component/Day";
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
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
