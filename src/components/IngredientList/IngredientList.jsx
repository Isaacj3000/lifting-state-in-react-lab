import React from 'react';

function IngredientList({ ingredients, AddToBurger }) {
  return (
    <div>
      <h2>Available Ingredients</h2>
      <ul>
        {ingredients.map((ingredient, index) => (
          <li 
            key={index} 
            style={{ 
              backgroundColor: ingredient.color, 
              cursor: 'pointer', 
              padding: '5px', 
              margin: '5px 0', 
              display: 'flex', 
              justifyContent: 'space-between', 
              alignItems: 'center' 
            }}
          >
            {ingredient.name}
            <button 
              onClick={() => AddToBurger(ingredient)} 
              style={{
                backgroundColor: 'black',
                color: 'white',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer',
                padding: '5px 10px'
              }}
            >
              +
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default IngredientList;