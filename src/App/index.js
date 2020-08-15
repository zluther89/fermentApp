import React, { useState, useEffect } from "react";
import "./index.css";
import { Route, BrowserRouter as Router } from "react-router-dom";
import Axios from "axios";
import Nav from "./NavBar";
import FermContainer from "./Ferments";
import Modal from "./Modal";
import FermentDetail from "./FermentDetail";

function App() {
  const [show, setModal] = useState(false);
  const [ferments, setFerments] = useState([]);

  async function getFerments() {
    return Axios.get("/ferments");
  }

  async function deleteFerment(id) {
    return Axios.delete("/ferments", { data: { id } });
  }

  function showModal(e) {
    e.preventDefault();
    setModal(true);
  }

  function hideModal(e) {
    e.preventDefault();
    setModal(false);
  }

  function addFerment(event, fermObj) {
    event.preventDefault();
    try {
      Axios.post("/ferments", fermObj);
      // optimistic loading
      setFerments([...ferments, fermObj]);
    } catch (e) {
      console.warn(e);
    }
  }

  // at the moment this simply removes ferment from state, this will need to be in tandem with a function that
  // stashes the ferment in a db
  async function removeFerment(ferm) {
    try {
      const { id } = ferm;
      await deleteFerment(id);
      const newFerments = ferments.filter((ferment) => ferment !== ferm);
      setFerments(newFerments);
    } catch (e) {
      console.warn(e);
    }
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
      <Router>
        <div className="nav-container">
          <Nav>
            <Modal
              show={show}
              handleClose={hideModal}
              addHandler={addFerment}
            />
            <button type="submit" onClick={showModal}>
              Start a ferment
            </button>
          </Nav>
        </div>
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
