import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "../components/Login";
import ContentArea from "../components/ContentArea";
import AddCategory from "../components/AddCategory";
import Categories from "../components/Categories";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/Login" element={<Login />} />
          <Route exact path="/" element={<ContentArea />} />
          <Route exact path="/Categories" element={<Categories />} />
          <Route exact path="/AddCategories" element={<AddCategory />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
