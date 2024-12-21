import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "../components/Navbar";
import Homepage from "../components/homepage";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
    {/* <Navbar/> */}
    <div className="h-screen relative">
    <Homepage/>
    </div>

    </>

  );
}

export default App;
