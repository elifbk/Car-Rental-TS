import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Undefined from "./utils/Undefined";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Undefined />} />
      </Routes>
    </>
  );
};

export default App;
