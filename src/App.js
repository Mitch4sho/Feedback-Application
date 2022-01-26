import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";
import AboutPage from "./pages/AboutPage";
import AboutIcon from "./components/AboutIcon";
import { FeedbackProvider } from "./context/FeedbackContext";

export default function App() {
  return (
    <FeedbackProvider>
      <Router>
        <Link to="/">
          <Header />
        </Link>
        <div className="container">
          <Routes>
            <Route
              exact
              path="/"
              element={
                <div>
                  <FeedbackForm />
                  <FeedbackStats />
                  <FeedbackList />
                </div>
              }
            ></Route>
            <Route path="/about" element={<AboutPage />} />
          </Routes>
          <AboutIcon />
        </div>
      </Router>
    </FeedbackProvider>
  );
}
