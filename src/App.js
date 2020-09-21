import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Works from "./components/Works";

const Header = () => {
  return (
    <>
      <nav id="nav">
      <Link to="/" className="navigacija">
      <b>EL RINCÓN DE SUSI</b>
        </Link>
        <Link to="/" className="navigacija">
          HOME
        </Link>
        <Link to="/works" className="navigacija">
          WORKS
        </Link>
        <Link to="/contacts" className="navigacija">
          CONTACT
        </Link>
      </nav>
</>
  );
};

function App() {
  return (
    <>
      <Router>
        <Header />

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>

          <Route path="/works">
            <Works />
          </Route>

          <Route path="/contacts">
            <Contact />
          </Route>
        </Switch>

        <Footer />
      </Router>
    </>
  );
}

export default App;
