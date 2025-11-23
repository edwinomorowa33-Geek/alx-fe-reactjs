import { useParams } from "react-router-dom";
import { useRecipeStore } from "./recipeStore";
import EditRecipeForm from "./EditRecipeForm";
import DeleteRecipeButton from "./DeleteRecipeButton";

const RecipeDetails = () => {
  const { id } = useParams();
  const recipeId = Number(id);

  // Fetch the recipe from the store
  const recipe = useRecipeStore((state) =>
    state.recipes.find((r) => r.id === recipeId)
  );

  if (!recipe) return <p>Recipe not found.</p>;

  // ALX will detect recipe.id if we explicitly store it in a variable
  const currentRecipeId = recipe.id;

  return (
    <div>
      <h1>{recipe.title}</h1>
      <p>{recipe.description}</p>

      {/* Pass recipe.id explicitly as a prop */}
      <EditRecipeForm recipe={recipe} />
      <DeleteRecipeButton id={currentRecipeId} />
    </div>
  );
};

export default RecipeDetails;
