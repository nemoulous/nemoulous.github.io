/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/no-unused-state */
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/styles/withStyles';
import React, { Component } from 'react';

import InstructionDialog from './dialogs/InstructionDialog';
import SwipeDialog from './dialogs/SwipeDialog';
import Topbar from './Topbar';
import Footer from './Footer';

const styles = (theme) => ({
  root: {
    flexGrow: 1,
    overflow: 'hidden',
    background: 'url(background.jpg) no-repeat',
    backgroundSize: 'cover',
  },
  grid: {
    marginTop: 10,
    padding: 0,
    [theme.breakpoints.down('sm')]: {
      width: 'calc(100% - 20px)',
    },
  },
  paperMain: {
    minHeight: '60vh',
    width: '100%',
    textAlign: 'left',
    color: theme.palette.secondary.light,
    display: 'flex',
    backgroundColor: theme.palette.secondary.main,
  },
  paper: {
    minHeight: 20,
    textAlign: 'left',
    color: theme.palette.secondary.dark,
    backgroundColor: theme.palette.secondary.light,
    padding: 10,
  },
  paperDark: {
    minHeight: 20,
    textAlign: 'left',
    color: theme.palette.secondary.light,
    padding: 10,
    backgroundColor: theme.palette.secondary.dark,
  },
  mainTitle: {
    color: theme.palette.primary.dark,
  },
  title: {
    color: theme.palette.primary.light,
  },
  titleDark: {
    color: theme.palette.primary.dark,
  },
  titleLight: {
    color: theme.palette.primary.light,
  },
  rangeLabel: {
    display: 'flex',
    justifyContent: 'space-between',
    paddingTop: theme.spacing(2),
  },
  topBar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 32,
  },
  outlinedButtom: {
    textTransform: 'uppercase',
    margin: theme.spacing(1),
  },
  actionButtom: {
    textTransform: 'uppercase',
    margin: theme.spacing(1),
    width: 152,
  },
  blockCenter: {
    padding: theme.spacing(2),
    textAlign: 'center',
  },
  block: {
    padding: theme.spacing(2),
  },
  box: {
    marginBottom: 40,
    margin: 'auto',
    maxWidth: 1000,
  },
  boxMain: {
    width: '100%',
    minHeight: 300,
    margin: 'auto',
    textAlign: 'center',
    maxWidth: 1000,
  },
  inlining: {
    display: 'inline-block',
    marginRight: 10,
  },
  buttonBar: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  noBorder: {
    borderBottomStyle: 'hidden',
  },
  loadingState: {
    opacity: 0.05,
  },
  loadingMessage: {
    position: 'absolute',
    top: '40%',
    left: '40%',
  },
});

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      aboutUsDialog: false,
      strategiesDialog: false,
      contactDialog: false,
    };
  }

  componentDidMount() {}

  openAboutUsDialog = () => {
    this.setState({ aboutUsDialog: true });
  }

  openStrategiesDialog = () => {
    this.setState({ strategiesDialog: true });
  }

  openContactDialog = () => {
    this.setState({ contactDialog: true });
  }

  dialogClose = () => {
    this.setState({
      aboutUsDialog: false,
      strategiesDialog: false,
      contactDialog: false,
    });
  }

  render() {
    const { classes } = this.props;
    const { strategiesDialog, contactDialog } = this.state;
    return (
      <>
        <CssBaseline />
        <Topbar />
        <div className={classes.root}>
          <Grid container justify="center">
            <Grid item xs={12}>
              <Paper className={classes.paperMain}>
                <div className={classes.boxMain}>
                  <Typography style={{ fontWeight: 'bold' }} variant="h2" className={classes.mainTitle} gutterBottom>
                    Nemoulous
                  </Typography>
                  <Typography variant="h4" color="primary" gutterBottom>
                    Financial Technologies
                  </Typography>
                </div>
              </Paper>
            </Grid>
            <Grid item xs={12}>
              <Paper className={classes.paperDark}>
                <div className={classes.box}>
                  <Typography variant="h6" className={classes.title} gutterBottom>
                  Technology and Software
                  </Typography>
                  <Typography variant="subtitle1" gutterBottom color="primary">
                    Nemoulous Capital is a NYC based financial technology firm.
                  </Typography>
                </div>
                <div className={classes.buttonBar}>
                  <Button onClick={this.openStrategiesDialog} color="primary" variant="contained" className={classes.actionButtom}>
                    Strategies
                  </Button>
                </div>
              </Paper>
            </Grid>
            <Grid item xs={12}>
              <Paper className={classes.paper}>
                <div className={classes.box}>
                  <Typography variant="h6" className={classes.titleLight} gutterBottom>
                  Subtitle2
                  </Typography>
                  <Typography variant="body1" gutterBottom color="primary">
                  Some other info
                  </Typography>
                </div>
                <div className={classes.buttonBar}>
                  <Button color="primary" variant="outlined" className={classes.actionButtom} component={Link} to="about">
                    About Us
                  </Button>
                  <Button onClick={this.openContactDialog} color="primary" variant="contained" className={classes.actionButtom}>
                    Contact
                  </Button>
                </div>
              </Paper>
            </Grid>
          </Grid>
          <SwipeDialog
            open={strategiesDialog}
            onClose={this.dialogClose}
          />
          <InstructionDialog
            open={contactDialog}
            onClose={this.dialogClose}
          />
        </div>
        <Footer />
      </>
    );
  }
}

Main.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withRouter(withStyles(styles)(Main));
