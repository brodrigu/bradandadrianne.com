import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const styles = () => ({
    buttons: {
        margin: 'auto',
        textAlign: 'center',
    },
    logoButton: {
        color: 'black',
        fontSize: ' 1.4rem',
        marginLeft: -12,
    },
    menuButton: {
        color: 'black',
        marginRight: 20,
        textTransform: 'uppercase',
    },
    toolbar: {
        backgroundColor: 'white',
        borderBottom: '1px solid #eceff1',
        boxShadow: 'none',
    },
});

const HomeHeader = ({ classes }) => (
    <div>
        <AppBar position="sticky" color="default" className={classes.toolbar}>
            <Toolbar className={classes.buttons}>
                <Button
                    color="primary"
                    className={classes.menuButton}
                    onClick={() => { window.location.href = '#/schedule'; }}
                >
                    Schedule
                </Button>
                <Button
                    color="primary"
                    className={classes.menuButton}
                    onClick={() => { window.location.href = '#/travel'; }}
                >
                    Travel
                </Button>
                <Button
                    color="primary"
                    className={classes.menuButton}
                    onClick={() => { window.location.href = '#/photos'; }}
                >
                    Photos
                </Button>
                <Button
                    color="primary"
                    className={classes.menuButton}
                    onClick={() => { window.location.href = '#/things-to-do'; }}
                >
                    Things To Do
                </Button>
                <Button
                    color="primary"
                    className={classes.menuButton}
                    onClick={() => {
                        window.location.href = 'https://www.zola.com/registry/bradandadrianne';
                    }}
                >
                    Registry
                </Button>
                <Button
                    color="primary"
                    className={classes.menuButton}
                    onClick={() => {
                        window.location.href = 'https://www.zola.com/wedding/bradandadrianne/rsvp';
                    }}
                >
                    RSVP
                </Button>
            </Toolbar>
        </AppBar>
    </div>
);

HomeHeader.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(HomeHeader);
