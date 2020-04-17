/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/styles/withStyles';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import { products } from './All';

const styles = (theme) => ({
    paper: {
        padding: theme.spacing(3),
        textAlign: 'left',
        color: theme.palette.primary.main,
        backgroundColor: theme.palette.secondary.dark,
        borderBottom: `1px ${theme.palette.secondary.main} solid`,
    },
    avatar: {
        margin: 10,
        backgroundColor: theme.palette.secondary.dark,
        color: theme.palette.primary.main,
    },
    avatarContainer: {
        [theme.breakpoints.down('sm')]: {
            marginLeft: 0,
            marginBottom: theme.spacing(4),
        },
    },
    itemContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        [theme.breakpoints.down('sm')]: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
        },
    },
    baseline: {
        alignSelf: 'baseline',
        marginLeft: theme.spacing(4),
        [theme.breakpoints.down('sm')]: {
            display: 'flex',
            flexDirection: 'column',
            textAlign: 'center',
            alignItems: 'center',
            width: '100%',
            marginTop: theme.spacing(2),
            marginBottom: theme.spacing(2),
            marginLeft: 0,
        },
    },
    inline: {
        display: 'inline-block',
        marginLeft: theme.spacing(4),
        [theme.breakpoints.down('sm')]: {
            marginLeft: 0,
        },
    },
    inlineRight: {
        width: '30%',
        textAlign: 'right',
        marginLeft: 50,
        alignSelf: 'flex-end',
        [theme.breakpoints.down('sm')]: {
            width: '100%',
            margin: 0,
            textAlign: 'center',
        },
    },
});

const CardItem = (props) => {
    const { classes } = props;

    return (
        <div className={classes.root}>
            <Paper className={classes.paper}>
                <div className={classes.itemContainer}>
                    <div className={classes.avatarContainer}>
                        <img className={classes.img} src={products[0].imgPath} alt={products[0].label} />
                    </div>
                    <div className={classes.baseline}>
                        <div className={classes.inline}>
                            <Typography style={{ textTransform: 'uppercase' }} color="primary" gutterBottom>
                                Product1
                            </Typography>
                            <Typography variant="body1" color="primary" gutterBottom>
                                {products[0].description}
                            </Typography>
                            <Typography variant="body1" color="primary" gutterBottom>
                                {products[0].description}
                            </Typography>
                            {products[0].link && 
                            <Button variant="outlined">
                                <a target="_blank" rel="noopener noreferrer" href={products[0].link}>
                                    Visit website
                                </a>
                            </Button>}
                        </div>
                    </div>
                </div>
            </Paper>
        </div>
    );
};

CardItem.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CardItem);
