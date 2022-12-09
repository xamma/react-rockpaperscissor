import {
  Routes,
  Route,
} from "react-router-dom";

import Header from "./components/Header";

import Home from "./routes/Home"
import About from "./routes/About";
import Play from "./routes/Play";


function App() {
  return (
    <div>
      <Header />
      <div className="app--container">
        <Routes>
          <Route path="/" element={<Home /> } ></Route>
          <Route path="/play" element={<Play /> } ></Route>
          <Route path="/about" element={<About /> } ></Route>
          <Route
          path="*"
          element={
            <main style={{ padding: "1rem" }}>
              <p>There's nothing here!</p>
            </main>
          }
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;
