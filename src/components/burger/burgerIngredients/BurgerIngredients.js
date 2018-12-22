import React from 'react';
import PropTypes from 'prop-types';

import Grid from '@material-ui/core/Grid';

import classes from './BurgerIngredients.module.scss';
import STATIC_CONFIG from 'react-global-configuration';

function BurgerIngredients(burger) {
  return <Grid item xs={12}>
      <div className={classes.root}>
        <div className={classes.BreadTop}>
          <div className={classes.Seeds1} />
          <div className={classes.Seeds2} />
        </div>
        {Object.keys(burger.order).map(id =>
          burger.order[id] !== undefined ? (
            <div key={id} className={classes[burger.order[id]]} />
          ) : null
        )}
        <div className={classes.BreadBottom} />
      </div>
    </Grid>;
}
BurgerIngredients.propTypes = {
  // order: PropTypes.arrayOf(
  //   PropTypes.shape({
  //     id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  //     val: PropTypes.oneOf(STATIC_CONFIG.get('burger.ingredientsTypes'))
  //   })
  // )
  order: PropTypes.object.isRequired
};

export default BurgerIngredients;
