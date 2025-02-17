import React from 'react';

function BurgerStack({ stack, RemoveFromBurger }) {
  return (
    <div>
      <h2>Your Burger</h2>
      <ul>
        {stack.length === 0 ? (
          <p>No Ingredients</p>
        ) : (
          stack.map((ingredient, index) => (
            <li key={index} 
            style={{ backgroundColor: 
            ingredient.color }}>
              {ingredient.name}
              <button 
                onClick={() => RemoveFromBurger(index)} 
              >
                X
              </button>
            </li>
          ))
        )}
      </ul>
    </div>
  );
}

export default BurgerStack;