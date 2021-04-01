import React from "react";
import Recipe from "./Recipe";

export default function RecipeList({
  recipes,
  handleRecipeAdd,
  handleRecipeDelete,
}) {
  return (
    <>
      <div className="recipe-list">
        {recipes.map((recipe) => {
          return (
            <Recipe
              key={recipe.id}
              {...recipe}
              handleRecipeDelete={handleRecipeDelete}
            />
          );
        })}
        <div className="recipe-list__add-recipe-btn-container">
          <button className="btn btn--primary" onClick={handleRecipeAdd}>
            ADD RECIPE
          </button>
        </div>
      </div>
    </>
  );
}
