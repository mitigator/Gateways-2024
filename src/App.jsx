import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import Loader from "./components/Loader";
import Home from "./components/Home";
import About from "./components/About";
import Capture_The_Flag from "./events/Capture_The_Flag";
import Codeing_Debugging from "./events/Codeing_Debugging";
import Iot from "./events/Iot";
import It_Quiz from "./events/It_Quiz";
import Gaming from "./events/Gaming";
import IT_Manager from "./events/IT_Manager";
import Photography from "./events/Photography";
import Surprise from "./events/Surprise";
import Treasure from "./events/Treasure";
import Hackathon from "./events/Hackathon";


function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <BrowserRouter>
      {isLoading ? (
        <div  className="gradient gradient-background"
        style={{ "--degree": `${210}deg` }}>
          <Loader />
          <Home/>
        </div>
      ) : (
        <div
          className="gradient gradient-background"
          style={{ "--degree": `${210}deg` }}
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
           
            <Route path="/capture_the_flag" element={<Capture_The_Flag />} />
            <Route path="/coding_debugging" element={<Codeing_Debugging />} />
            <Route path="/hackathon" element={<Hackathon/>} />
            <Route path="/Iot" element={<Iot />} />
            <Route path="/It_quiz" element={<It_Quiz/>} />
            <Route path="/gaming" element={<Gaming />} />
            <Route path="/it_manager" element={<IT_Manager />} />
            <Route path="/photography" element={<Photography />} />
            <Route path="/surprise" element={<Surprise />} />
            <Route path="/treasure_hunt" element={<Treasure />} />
          </Routes>
        </div>
      )}
    </BrowserRouter>
  );
}

export default App;
