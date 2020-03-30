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
import * as THREE from "three";
// import {MeshLine, MeshLineMaterial} from "three.meshline";


import './utils/MeshLine';
import InstructionDialog from './dialogs/InstructionDialog';
import SwipeDialog from './dialogs/SwipeDialog';
import Topbar from './Topbar';
import Footer from './Footer';
import {boxMullerRandom} from './utils/randomWalk';

const styles = (theme) => ({
  root: {
    flexGrow: 1,
    overflow: 'hidden',
  },
  grid: {
    marginTop: 10,
    padding: 0,
    [theme.breakpoints.down('sm')]: {
      width: 'calc(100% - 20px)',
    },
  },
  gridItem: {
    zIndex: 100,
  },
  background: {
    // background: 'url(bits.png) no-repeat',
    backgroundColor: "black",
    backgroundSize: 'cover',
    height: "70%",
    overflow: "hidden",
    minWidth: "100%",
  },
  paperMain: {
    minHeight: '60vh',
    width: '100%',
    textAlign: 'left',
    color: theme.palette.primary.light,
    display: 'flex',
    background: "transparent",
  },
  paper: {
    minHeight: 20,
    textAlign: 'left',
    color: theme.palette.primary.dark,
    backgroundColor: theme.palette.secondary.dark,
    padding: 10,
  },
  paperDark: {
    minHeight: 20,
    textAlign: 'left',
    color: theme.palette.primary.dark,
    padding: 10,
    backgroundColor: theme.palette.secondary.dark,
  },
  mainTitle: {
    color: theme.palette.primary.light,
  },
  mainSubtitle: {
    color: theme.palette.primary.light,
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

  componentDidMount() {
    if( process.env.JEST_WORKER_ID === undefined ) {
      // === THREE.JS CODE START ===
      var renderer = new THREE.WebGLRenderer({antialias: true});
      renderer.setSize( window.innerWidth, window.innerHeight );
      this.mount.appendChild( renderer.domElement );
      
      var camera = new THREE.PerspectiveCamera( 60, window.innerWidth / window.innerHeight, 1, 500 );
      camera.position.set( 0, 0, 250 );
      camera.lookAt( window.innerWidth/20, -30, 0 );
      
      var scene = new THREE.Scene();

      //create a blue MeshLineMaterial
      // var material1 = new MeshLineMaterial( { color: 0xb0acb0 } );
      // var material2 = new MeshLineMaterial( { color: 0xe2dddf } );
      // var material3 = new MeshLineMaterial( { color: 0x85ebd9 } );
      // var material4 = new MeshLineMaterial( { color: 0x3d898d } );
      // var material5 = new MeshLineMaterial( { color: 0x2f404d } );
      // var material6 = new MeshLineMaterial( { color: 0x00ffff } );
      var material1 = new THREE.LineBasicMaterial( { color: 0xb0acb0 } );
      var material2 = new THREE.LineBasicMaterial( { color: 0xe2dddf } );
      var material3 = new THREE.LineBasicMaterial( { color: 0x85ebd9 } );
      var material4 = new THREE.LineBasicMaterial( { color: 0x3d898d } );
      var material5 = new THREE.LineBasicMaterial( { color: 0x2f404d } );
      var material6 = new THREE.LineBasicMaterial( { color: 0x00ffff } );

      var points1 = [];
      var points2 = [];
      var points3 = [];
      var points4 = [];
      var points5 = [];
      var points6 = [];
      var walks = [
        [[0, 0], ],
        [[0, 0], ],
        [[0, 0], ],
        [[0, 0], ],
        [[0, 0], ],
        [[0, 0], ],
      ];
      var index = 0;

      // var geometry1 = new THREE.Geometry().setFromPoints( points1 );
      // var geometry2 = new THREE.Geometry().setFromPoints( points2 );
      // var geometry3 = new THREE.Geometry().setFromPoints( points3 );
      // var geometry4 = new THREE.Geometry().setFromPoints( points4 );
      // var geometry5 = new THREE.Geometry().setFromPoints( points5 );
      // var geometry6 = new THREE.Geometry().setFromPoints( points6 );
      var geometry1 = new THREE.BufferGeometry().setFromPoints( points1 );
      var geometry2 = new THREE.BufferGeometry().setFromPoints( points2 );
      var geometry3 = new THREE.BufferGeometry().setFromPoints( points3 );
      var geometry4 = new THREE.BufferGeometry().setFromPoints( points4 );
      var geometry5 = new THREE.BufferGeometry().setFromPoints( points5 );
      var geometry6 = new THREE.BufferGeometry().setFromPoints( points6 );


      // var _line1 = new MeshLine();
      // _line1.setGeometry(geometry1);
      // var line1 = new THREE.Mesh(_line1.geometry, material1);

      // var _line2 = new MeshLine();
      // _line2.setGeometry(geometry2);
      // var line2 = new THREE.Mesh(_line2.geometry, material2);

      // var _line3 = new MeshLine();
      // _line3.setGeometry(geometry1);
      // var line3 = new THREE.Mesh(_line3.geometry, material3);

      // var _line4 = new MeshLine();
      // _line4.setGeometry(geometry1);
      // var line4 = new THREE.Mesh(_line4.geometry, material4);

      // var _line5 = new MeshLine();
      // _line5.setGeometry(geometry1);
      // var line5 = new THREE.Mesh(_line5.geometry, material5);

      // var _line6 = new MeshLine();
      // _line6.setGeometry(geometry1);
      // var line6 = new THREE.Mesh(_line6.geometry, material6);

      var line1 = new THREE.Line(geometry1, material1);
      var line2 = new THREE.Line(geometry2, material2);
      var line3 = new THREE.Line(geometry3, material3);
      var line4 = new THREE.Line(geometry4, material4);
      var line5 = new THREE.Line(geometry5, material5);
      var line6 = new THREE.Line(geometry6, material6);



      scene.add( line1 );
      scene.add( line2 );
      scene.add( line3 );
      scene.add( line4 );
      scene.add( line5 );
      scene.add( line6 );
      renderer.render( scene, camera );
      // var add = 0.001;

      var animate = function () {
        requestAnimationFrame( animate );

        if (index < 1000){
          walks[0].push(
            [walks[0].slice(-1)[0][0]+1, walks[0].slice(-1)[0][1]+ boxMullerRandom()]
          );
          walks[1].push(
            [walks[1].slice(-1)[0][0]+1, walks[1].slice(-1)[0][1]+ boxMullerRandom()]
          );
          walks[2].push(
            [walks[2].slice(-1)[0][0]+1, walks[2].slice(-1)[0][1]+ boxMullerRandom()]
          );
          walks[3].push(
            [walks[3].slice(-1)[0][0]+1, walks[3].slice(-1)[0][1]+ boxMullerRandom()]
          );
          walks[4].push(
            [walks[4].slice(-1)[0][0]+1, walks[4].slice(-1)[0][1]+ boxMullerRandom()]
          );
          walks[5].push(
            [walks[5].slice(-1)[0][0]+1, walks[5].slice(-1)[0][1]+ boxMullerRandom()]
          );

          points1.push(new THREE.Vector3(walks[0][index][0]-50, walks[0][index][1], 0));
          points2.push(new THREE.Vector3(walks[1][index][0]-50, walks[1][index][1], 0));
          points3.push(new THREE.Vector3(walks[2][index][0]-50, walks[2][index][1], 0));
          points4.push(new THREE.Vector3(walks[3][index][0]-50, walks[3][index][1], 0));
          points5.push(new THREE.Vector3(walks[4][index][0]-50, walks[4][index][1], 0));
          points6.push(new THREE.Vector3(walks[5][index][0]-50, walks[5][index][1], 0));
        }

        // if ((index % 500)===0){
        //   add = -1 * add;
        // }
        // line1.rotation.y += add;
        // line1.rotation.x += add;
        // line2.rotation.y += add;
        // line2.rotation.x += add;
        // line3.rotation.y += add;
        // line3.rotation.x += add;
        // line4.rotation.y += add;
        // line4.rotation.x += add;
        // line5.rotation.y += add;
        // line5.rotation.x += add;
        // line6.rotation.y += add;
        // line6.rotation.x += add;

        if (index < 1000){
          geometry1.setFromPoints(points1);
          // _line1.setGeometry(geometry1);
          geometry2.setFromPoints(points2);
          // _line2.setGeometry(geometry2);
          geometry3.setFromPoints(points3);
          // _line3.setGeometry(geometry3);
          geometry4.setFromPoints(points4);
          // _line4.setGeometry(geometry4);
          geometry5.setFromPoints(points5);
          // _line5.setGeometry(geometry5);
          geometry6.setFromPoints(points6);
          // _line6.setGeometry(geometry6);
          renderer.render( scene, camera );
          index++;
        }
    };
      animate();
      // === THREE.JS EXAMPLE CODE END ===
    }
  }

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
            <div className={classes.background} ref={ref => (this.mount = ref)} style={{float: "left", position: "absolute"}}></div>
            <Grid item xs={12} className={classes.gridItem}>
              <Paper className={classes.paperMain}>
                <div className={classes.boxMain}>
                  <Typography style={{ fontWeight: 'bold' }} variant="h1" className={classes.mainTitle} gutterBottom>
                    Nemoulous
                  </Typography>
                  <Typography className={classes.mainSubtitle} variant="h3" gutterBottom>
                    Financial Technologies
                  </Typography>
                </div>
              </Paper>
            </Grid>
            <Grid item xs={12} className={classes.gridItem}>
              <Paper className={classes.paperDark}>
                <div className={classes.box}>
                  <Typography variant="h3" className={classes.title} gutterBottom>
                  Technology and Software
                  </Typography>
                  <Typography variant="h6" gutterBottom color="primary">
                    Nemoulous Capital is a NYC based financial technology firm.
                  </Typography>
                </div>
                <div className={classes.buttonBar}>
                  <Button onClick={this.openStrategiesDialog} color="primary" variant="contained" className={classes.actionButtom}>
                    Products
                  </Button>
                </div>
              </Paper>
            </Grid>
            <Grid item xs={12} className={classes.gridItem}>
              <Paper className={classes.paper}>
                <div className={classes.box}>
                  <Typography variant="h3" className={classes.titleLight} gutterBottom>
                  Subtitle2
                  </Typography>
                  <Typography variant="h6" gutterBottom color="primary">
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
