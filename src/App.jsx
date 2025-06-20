import { BrowserRouter, Route, Routes } from "react-router-dom";
import Body from "./components/Body";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import Signup from "./components/Signup";
import { Bounce, ToastContainer } from "react-toastify";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Students from "./components/Students";
import Courses from "./components/Courses";
import Enrollments from "./components/Enrollments";
import Fees from "./components/Fees";

function App() {
  return (
    <>
      <Provider store={appStore}>
        <BrowserRouter basename="/">
          <Routes>
            <Route path="/" element={<Body />}>
              <Route path="/" element={<Dashboard />} />
              <Route path="/students" element={<Students />} />
              <Route path="/courses" element={<Courses />} />
              <Route path="/enrollments" element={<Enrollments />} />
              <Route path="/fees" element={<Fees />} />
            </Route>
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </BrowserRouter>
        <ToastContainer
          position="top-center"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick={false}
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
          transition={Bounce}
        />
      </Provider>
    </>
  );
}

export default App;
