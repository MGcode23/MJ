import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import Home from "./views/home.jsx";
import injectContext from "./store/appContext";
import Detail from "./views/detail.jsx";

import { Navbar } from "./component/navbar.jsx";
import { Footer } from "./component/footer.jsx";

//create your first component
const Layout = () => {
  const basename = process.env.BASENAME || "";

  return (
    <div className="container-fluid container-layout px-0">
      <BrowserRouter basename={basename}>
        <ScrollToTop>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/:group/:uid" element={<Detail />} />
            <Route path="*" element={<h1>Not found!</h1>} />
          </Routes>
          <Footer />
        </ScrollToTop>
      </BrowserRouter>
    </div>
  );
};

export default injectContext(Layout);
