/* eslint-disable react/forbid-prop-types */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/styles/withStyles';
import { withRouter } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

import Topbar from './Topbar';
import Footer from './Footer';

const numeral = require('numeral');

numeral.defaultFormat('0,000');

const styles = (theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.secondary.dark,
    color: theme.palette.primary.main,
    overflow: 'hidden',
    backgroundSize: 'cover',
    backgroundPosition: '0 400px',
    paddingBottom: 100,
  },
  grid: {
    margin: `0 ${theme.spacing(2)}px`,
    [theme.breakpoints.down('sm')]: {
      width: 'calc(100% - 20px)',
    },
  },
  gridPaddingTop: {
    margin: `0 ${theme.spacing(2)}px`,
    [theme.breakpoints.down('sm')]: {
      width: 'calc(100% - 20px)',
    },
    marginTop: 100,
  },
  paper: {
    display: "flex",
    flexDirection: "column",
    margin: "auto",
    minHeight: 480,
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
    alignItems: "center",
    backgroundColor: theme.palette.secondary.main,
  },
  topBar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  blockCenter: {
    padding: theme.spacing(2),
    textAlign: 'center',
  },
  outlinedButtom: {
    textTransform: 'uppercase',
    marginTop: 10,
  },
  block: {
    padding: theme.spacing(2),
    marginBottom: 20,
  },
  avatar: {
    backgroundColor: theme.palette.secondary.light,
    width: 150,
    height: 150,
  }
});


const Team = [
  {
    name: "Jed Hsu",
    title: "CEO",
    image: "img/jed.png",
    text: `<div><strong>Portfolio Manager</strong><br>
    Jamison Capital Partners<br><br>
    <strong>Quantitative Research Analyst</strong><br>
    Jamison Capital Partners<br><br>
    B.S. in Economics<br>
    Wharton - University of Pennsylvania, 2015
    </div>
    `
  },
  {
    name: "Jeffrey Luk",
    title: "COO",
    image: "img/jeff.png",
    text: `<div><strong>Co-Founder / VP of Product</strong><br>
    Ledger Run<br><br>
    <strong>Product & Strategy</strong><br>
    Walters Kluwer<br><br>
    <strong>Investment Banking</strong><br>
    J.P. Morgan<br><br>

    B.A. in Economics and Philosophy<br>
    Columbia University, 2016
    </div>
    `
  },
]


class AboutUs extends Component {
  componentDidMount() {}

  render() {
    const { classes, location } = this.props;
    const currentPath = location.pathname;

    return (
      <>
        <CssBaseline />
        <Topbar currentPath={currentPath} />
        <div className={classes.root}>
          <Grid container justify="center">
            <Grid alignItems="center" justify="center" container className={classes.grid}>
              <Grid item xs={12}>
                <div className={classes.topBar}>
                  <div className={classes.block}>
                    <Typography variant="h6" gutterBottom>About Us</Typography>
                    <Typography variant="body1">
                      Nemoulous Capital is a financial technology company based in New York City.
                    </Typography>
                  </div>
                </div>
              </Grid>
              <Grid container justify="center" direction="row" spacing={3}>
              {Team.map(value => (
              <Grid item xs={12} sm={6} md={4} key={value.name} >
                <Paper className={classes.paper} >
                  <Avatar variant="rounded" alt={value.name} src={value.image} className={classes.avatar} />
                  <Typography variant="h6" color="primary">
                    {value.name}
                  </Typography>
                  <Typography variant="subtitle1" color="primary">
                    {value.title}
                  </Typography>
                  <Typography variant="body2" color="primary" dangerouslySetInnerHTML={{__html: value.text}}>
                  </Typography>
                </Paper>
              </Grid>
              ))}
              </Grid>
              <Grid alignItems="center" justify="center" container className={classes.gridPaddingTop}>
                <Grid item xs={12}>
                  <Typography variant="h6" gutterBottom>Contact Us</Typography>
                  <Typography variant="body1" gutterBottom>
                  Feel free to reach out to us with any questions.
                  </Typography>
                    <Button variant="outlined" color="primary" className={classes.outlinedButtom}>
                        Email us
                      </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </div>
        <Footer />
      </>
    );
  }
}

AboutUs.propTypes = {
  classes: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
};

export default withRouter(withStyles(styles)(AboutUs));
