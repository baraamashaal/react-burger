import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
function BurgerController(burger) {
  return (
    <Grid item xs={12}>
      <Card>
        <CardHeader title="some title" />
        <CardContent>
          <Grid container>
            {Object.keys(burger.ingredients).map(type => (
              <Grid key={type} item xs={12}>
                <Typography component="h3">{type}</Typography>
                <Button
                  onClick={e => {
                    burger.add(type);
                  }}
                >
                  Add
                </Button>
                <Button
                  disabled={burger.ingredients[type].count <= 0 ? true : false}
                  onClick={e => {
                    burger.remove(type);
                  }}
                >
                  remove
                </Button>
              </Grid>
            ))}
          </Grid>
        </CardContent>
        <CardActions>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    </Grid>
  );
}

export default BurgerController;
