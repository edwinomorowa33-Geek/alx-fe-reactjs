import React, { useState } from "react";

const AddRecipeForm = () => {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [steps, setSteps] = useState("");
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!title.trim()) newErrors.title = "Title is required";
    if (!ingredients.trim() || ingredients.split(",").length < 2)
      newErrors.ingredients = "Enter at least two ingredients, separated by commas";
    if (!steps.trim()) newErrors.steps = "Preparation steps are required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      // Handle valid form submission
      console.log({ title, ingredients, steps });
      setTitle("");
      setIngredients("");
      setSteps("");
      setErrors({});
      alert("Recipe submitted successfully!");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-6 bg-white rounded shadow-md">
      <h2 className="text-2xl font-bold mb-4">Add a New Recipe</h2>

      <div className="mb-4">
        <label className="block font-medium mb-1">Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full border rounded p-2"
        />
        {errors.title && <p className="text-red-500 text-sm">{errors.title}</p>}
      </div>

      <div className="mb-4">
        <label className="block font-medium mb-1">Ingredients (comma separated)</label>
        <textarea
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
          className="w-full border rounded p-2"
        />
        {errors.ingredients && <p className="text-red-500 text-sm">{errors.ingredients}</p>}
      </div>

      <div className="mb-4">
        <label className="block font-medium mb-1">Preparation Steps</label>
        <textarea
          value={steps}
          onChange={(e) => setSteps(e.target.value)}
          className="w-full border rounded p-2"
        />
        {errors.steps && <p className="text-red-500 text-sm">{errors.steps}</p>}
      </div>

      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
      >
        Submit Recipe
      </button>
    </form>
  );
};

export default AddRecipeForm;
