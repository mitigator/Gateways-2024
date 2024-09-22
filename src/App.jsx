import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import Loader from "./components/Loader";
import Home from "./components/Home";
import About from "./components/About";
import Events from "./components/Events";


function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <BrowserRouter>
      {isLoading ? (
        <div
          className="gradient gradient-background"
          style={{ "--degree": `${210}deg` }}
        >
          <Loader />
        </div>
      ) : (
        <div
          className="gradient gradient-background"
          style={{ "--degree": `${210}deg` }}
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/events" element={<Events />} />
          </Routes>
        </div>
      )}
    </BrowserRouter>
  );
}

export default App;
