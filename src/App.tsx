import "./App.css";
import "simplebar-react/dist/simplebar.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavbarComponent from "./components/NavbarComponent";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <Router>
        <div className="app-container d-flex flex-column vh-100">
          <NavbarComponent />
          <div className="">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/dashboard" element={<Dashboard />} />
              {/* <Route path="/another" element={<AnotherPage />} /> */}
            </Routes>
          </div>
        </div>
      </Router>
    </>
  );
}

export default App;
