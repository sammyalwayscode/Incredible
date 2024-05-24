import { BrowserRouter, Routes, Route } from "react-router-dom";

import APIOne from "./ApiConsumption/APIOne";
import GetOnePage from "./ApiConsumption/GetOnePage";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          {/* <Header />
      <Home /> */}
          <Route path="/" element={<APIOne />} />
          <Route path="/detail/:id" element={<GetOnePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
