import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import { Provider } from "react-redux";
import store from "./redux/index";
import Header from "./components/Header";

const Home = lazy(() => import("./pages/home/Home"));
const CreateUser = lazy(() => import("./pages/createuser/Createuser"));

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Header />
        <Suspense fallback={<div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-3xl">Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/create" element={<CreateUser />} />
          </Routes>
        </Suspense>
      </Router>
    </Provider>
  );
}

export default App;
