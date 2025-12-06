import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

const RecipeDetail = () => {
  const { id } = useParams(); // get recipe ID from URL
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/src/data.json")
      .then((res) => res.json())
      .then((data) => {
        const foundRecipe = data.find((r) => r.id === parseInt(id));
        setRecipe(foundRecipe);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <p className="text-center mt-6">Loading...</p>;
  if (!recipe) return <p className="text-center mt-6">Recipe not found.</p>;

  return (
    <div className="container mx-auto p-6">
      <Link to="/" className="text-blue-500 hover:text-blue-700 mb-4 inline-block">
        &larr; Back to Home
      </Link>

      <div className="bg-white rounded-lg shadow-md p-6">
        <h1 className="text-3xl font-bold mb-4">{recipe.title}</h1>
        <img
          src={recipe.image}
          alt={recipe.title}
          className="w-full h-64 object-cover rounded-md mb-4"
        />
        <p className="text-gray-700 mb-4">{recipe.summary}</p>

        <div className="mt-6">
          <h2 className="text-2xl font-semibold mb-2">Ingredients</h2>
          <ul className="list-disc list-inside text-gray-600">
            {recipe.ingredients
              ? recipe.ingredients.map((item, idx) => <li key={idx}>{item}</li>)
              : ["No ingredients listed."]}
          </ul>
        </div>

        <div className="mt-6">
          <h2 className="text-2xl font-semibold mb-2">Instructions</h2>
          <ol className="list-decimal list-inside text-gray-600">
            {recipe.instructions
              ? recipe.instructions.map((step, idx) => <li key={idx}>{step}</li>)
              : ["No instructions provided."]}
          </ol>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetail;
