"use client";

import { useParams } from "next/navigation";
import Recipe from "../../add-recipe/(components)/recipe";

const UpdateRecipe = () => {
  const { id } = useParams();
  return (
    <div>
      <Recipe id={id} />
    </div>
  );
};

export default UpdateRecipe;
