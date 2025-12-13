import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import RecipeDetail from "./components/RecipeDetail";
import AddRecipeForm from "./components/AddRecipeForm";

function App() {
  return (
    <Router>
      <Routes>
        {/* Home page */}
        <Route path="/" element={<HomePage />} />

        {/* Recipe detail page */}
        <Route path="/recipe/:id" element={<RecipeDetail />} />

        {/* Add recipe form page */}
        <Route path="/add-recipe" element={<AddRecipeForm />} />
      </Routes>
    </Router>
  );
}

export default App;
