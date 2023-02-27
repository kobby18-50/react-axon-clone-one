import Homepage from "./Pages/HomePage";
import { Routes, Route } from "react-router-dom";


function App() {
  return (
    <div className="">
      <Routes>
        <Route path="/" element={<Homepage/>}/>
      </Routes>
    </div>
  );
}

export default App;
