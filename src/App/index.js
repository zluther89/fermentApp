import React, { useState, useEffect } from "react";
import "./index.css";
import { Route, BrowserRouter as Router } from "react-router-dom";
import Axios from "axios";
import Nav from "./NavBar";
import FermContainer from "./Ferments";
import Modal from "./Modal";
import FermentDetail from "./FermentDetail";

const sampleObj = {
  name: "test-name",
  type: "test-type",
  status: "test-status",
  date: "01/01/2001",
  description: "sample descriptions",
};

function App() {
  const [show, setModal] = useState(false);
  const [ferments, setFerments] = useState([sampleObj, sampleObj, sampleObj]);

  async function getFerments() {
    return Axios.get("/ferments");
  }

  function showModal(e) {
    e.preventDefault();
    setModal(true);
  }

  function hideModal(e) {
    e.preventDefault();
    setModal(false);
  }

  function addFerment(e, fermObj) {
    e.preventDefault();
    // needs to set ferment in local state
    setFerments([...ferments, fermObj]);

    // when back end is set up needs to post ferment to db
  }

  // at the moment this simply removes ferment from state, this will need to be in tandem with a function that
  // stashes the ferment in a db
  function removeFerment(ferm) {
    const newFerments = ferments.filter((ferment) => ferment !== ferm);
    setFerments(newFerments);
  }

  useEffect(() => {
    async function setFermentState() {
      try {
        const { data: results } = await getFerments();
        const state = results.map(function mapResHeaders(res) {
          res.date = res.create_date;
          delete res.create_date;
          return res;
        });
        setFerments(state);
      } catch (e) {
        console.warn(e);
      }
    }
    setFermentState();
  }, []);

  return (
    <div className="App">
      <div className="nav-container">
        <Nav>
          <Modal show={show} handleClose={hideModal} addHandler={addFerment} />
          <button type="submit" onClick={showModal}>
            Start a ferment
          </button>
        </Nav>
      </div>
      <Router>
        <Route
          exact
          path="/"
          render={() => (
            <FermContainer ferments={ferments} removeHandler={removeFerment} />
          )}
        />
        <Route path="/fermentdetail" render={() => <FermentDetail />} />
      </Router>
    </div>
  );
}

export default App;
