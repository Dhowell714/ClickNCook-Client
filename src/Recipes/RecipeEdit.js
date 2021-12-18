import React, {useState} from "react";

const RecipeEdit = (props) => {
    const [editName, setEditName] = useState('');
    const [editDirections, setEditDirections] = useState('');
    const [editCookTime, setEditCookTime] = useState('');
    const [editServingSize, setEditServingSize] = useState('');
    const [editCategory, setEditCategory] = useState('');
    const [editIngredients, setEditIngredients] = useState('');
    const [editSubstitutions, setEditSubstitutions] = useState('');

    return(
        <>
        Recipe Edit
        </>
    )
}

export default RecipeEdit;