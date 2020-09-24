import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import Login from "./components/Login";
import WorksList from "./components/WorksList";
import { getAllWorks } from "./services";


function App() {

  const [user, setUser] = useState(null)
  const [work, setWorks] = useState([])
  const [filter, setFilter] =useState("")

  useEffect(() => {
    getAllWorks().then(res => {
      console.log(res.data);
      setWorks(res.data)
      
    })
  }, [])

  
  return (
    <>
      <Router>

      <nav className="navbar navbar-dark bg-dark">

        <Header />

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>

          <Route path="/works">
          {user ? <WorksList arr={work} setFilter={setFilter} filter={filter}/> : <Redirect to='/login' />}
            
          </Route>

          <Route path="/contacts">
            {<Contact />}
          </Route>

          <Route path="/login">
            <Login setUser={setUser}/>
          </Route>
        </Switch>

        </nav>

        <Footer />
      </Router>
      
    </>
  );
}

export default App;
