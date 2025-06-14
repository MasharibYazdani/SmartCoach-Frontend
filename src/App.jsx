import { BrowserRouter, Route, Routes } from "react-router-dom";
import Body from "./components/Body";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <>
      <BrowserRouter basename="/">
        <Routes>
          <Route path="/" element={<Body />}>
            <Route path="/" element={<Dashboard />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
