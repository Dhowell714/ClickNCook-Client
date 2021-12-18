import React, {useState} from "react";

const RecipeEdit = (props) => {
    const [editName, setEditName] = useState(props.recipesToUpdate.name);
    const [editDirections, setEditDescription] = useState(props.recipesToUpdate.directions);
    const [editCookTime, setEditCookTime] = useState(props.recipesToUpdate.cookTime);
    const [editServingSize, setEditServingSize] = useState(props.recipesToUpdate.servingSize);
    const [editCategory, setEditCategory] = useState(props.recipesToUpdate.category);
    const [editIngredients, setEditIngredients] = useState(props.recipesToUpdate.ingredients);
    const [editSubstitutions, setEditSubstitutions] = useState(props.recipesToUpdate.substitutions);

    return(
        <>
        This is Recipe Edit
        </>
    )
}

export default RecipeEdit;