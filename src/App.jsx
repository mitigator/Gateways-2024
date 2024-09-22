import { useEffect, useState } from "react";
import Loader from "./components/Loader";
import Home from "./components/Home";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isLoading ? (
        <div className="gradient gradient-background"
        style={{ "--degree": `${210}deg` }}>
          <Loader/>
          <Home/>
        </div>
      ) : (
        <div
          className="gradient gradient-background"
          style={{ "--degree": `${210}deg` }}
        >
          <Home/>
        </div>
      )}
    </>
  );
} 

export default App;
