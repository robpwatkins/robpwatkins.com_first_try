import React from 'react';
import Header from './Header';
import NameCard from './NameCard';
import { Grid } from '@material-ui/core';

function Homepage() {
  return(
    <div className="container">
      <div className="overlay">
        <Header />
        <Grid container justify="center">
          <NameCard />
        </Grid>
      </div>
    </div>
  )
}

export default Homepage;