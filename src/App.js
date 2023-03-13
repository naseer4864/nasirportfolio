import { Routes, Route } from "react-router-dom";
import Home from "./component/Home";
import About from "./component/About";
import Portfolio from "./component/Portfolio";
import Contact from "./component/contact";
import Navbar from "./component/Navbar";
import { Fragment } from "react";
import Footer from "./component/footer";

function App() {
  return (
    <Fragment>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Home />} />
          <Route path="About" element={<About />} />
          <Route path="Portfolio" element={<Portfolio />} />
          <Route path="Contact" element={<Contact />} />
        </Route>
      </Routes>
      <Footer />
    </Fragment>
  );
}

export default App;
