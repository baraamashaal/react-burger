import React, { useState, useEffect } from 'react';

import BurgerIngredients from './burgerIngredients/BurgerIngredients';
import BurgerController from './burgerController/BurgerController';
import Grid from '@material-ui/core/Grid';

const Burger = () => {
  const [ingredients, setIngredients] = useState({
    meat: {
      count: 0,
      ids: []
    },
    cheese: {
      count: 0,
      ids: []
    },
    bacon: {
      count: 0,
      ids: []
    },
    salad: {
      count: 0,
      ids: []
    }
  });
  // const [ingredientsOrder, setIngredientsOrder] = useState([]);
  const [ingredientsOrder, setIngredientsOrder] = useState({});
  const [price, setPrice] = useState(4);

  const uud = () => {
    return (
      '_' +
      Math.random()
        .toString(36)
        .substr(2, 9)
    );
  };
  // function addIngredient(type) {
  //   const uud = () => {
  //     return (
  //       '_' +
  //       Math.random()
  //         .toString(36)
  //         .substr(2, 9)
  //     );
  //   };
  //   const newIngredients = (() => {
  //     const oldIngredients = { ...ingredients };
  //     oldIngredients[type][0] = oldIngredients[type][0] + 1;
  //     oldIngredients[type][1].push(ingredientsOrder.length);
  //     // console.log(oldIngredients);
  //     return oldIngredients;
  //   })();
  //   setIngredients(newIngredients);
  //   const newIngredientsOrder = (() => {
  //     const oldIngredientsOrder = [...ingredientsOrder];
  //     oldIngredientsOrder.push({ id: uud(), val: type });
  //     // console.log(oldIngredientsOrder);
  //     return oldIngredientsOrder;
  //   })();
  //   setIngredientsOrder(newIngredientsOrder);
  // }
  
  function addIngredient2(type) {
    const id = uud();
    const newIngredients = (() => {
      const prevIngredients = { ...ingredients };
      prevIngredients[type].count = prevIngredients[type].count + 1;
      prevIngredients[type].ids.push(id);
      return prevIngredients;
    })();
    setIngredients(newIngredients);

    const newIngredientsOrder = (() => {
      const prevIngredientOrder = { ...ingredientsOrder };
      prevIngredientOrder[id] = type;
      return prevIngredientOrder;
    })();
    setIngredientsOrder(newIngredientsOrder);
  }
  function removeIngredient2(type) {
    let id = null;
    const newIngredients = (() => {
      const prevIngredients = { ...ingredients };
      id = prevIngredients[type].ids.splice(-1, 1)[0];
      prevIngredients[type].count = prevIngredients[type].count - 1;
      return prevIngredients;
    })();
    setIngredients(newIngredients);

    const newIngredientsOrder = (() => {
      const prevIngredientOrder = { ...ingredientsOrder };
      prevIngredientOrder[id] = undefined;
      return prevIngredientOrder;
    })();
    setIngredientsOrder(newIngredientsOrder);
  }
  return (
    <>
      <BurgerIngredients
        ingredients={ingredients}
        price={price}
        order={ingredientsOrder}
      />
      <BurgerController
        ingredients={ingredients}
        price={price}
        order={ingredientsOrder}
        add={addIngredient2}
        remove={removeIngredient2}
      />
    </>
  );
};

export default Burger;
