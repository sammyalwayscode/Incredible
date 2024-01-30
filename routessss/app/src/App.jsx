// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Home from "./CompTwo/Home";
// import Contact from "./CompTwo/Contact";
// import About from "./CompTwo/About";
// import Header from "./CompTwo/Header";

import { RouterProvider } from "react-router-dom";
import { mainRoute } from "./router/Router";

const App = () => {
  return (
    <div>
      {/* <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter> */}

      <RouterProvider router={mainRoute} />
    </div>
  );
};

export default App;
