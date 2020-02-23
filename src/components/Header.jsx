import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const styles = () => ({
    grow: {
        flexGrow: 1,
    },
    logoButton: {
        color: '#7da0bc',
        fontSize: ' 1.4rem',
        marginLeft: 20,
        textTransform: 'uppercase',
    },
    menuButton: {
        color: '#000',
        marginLeft: -12,
        marginRight: 20,
        textTransform: 'uppercase',
    },
    title: {
        textTransform: 'uppercase',
    },
    toolbar: {
        backgroundColor: '#fff',
        borderBottom: '1px solid #eceff1',
        boxShadow: 'none',
    },
});

const Header = ({ classes, active }) => (
    <div>
        <AppBar position="static" color="default" className={classes.toolbar}>
            <Toolbar>
                <Button
                    color="primary"
                    className={classes.logoButton}
                    onClick={() => { window.location.href = '#/'; }}
                >
                    Brad & Adrianne
                </Button>
                <div className={classes.grow} />
                <Typography variant="h4" align="center" className={classes.title}>
                    {active}
                </Typography>
                <div className={classes.grow} />
                { active !== 'schedule' && (
                    <Button
                        color="primary"
                        className={classes.menuButton}
                        onClick={() => { window.location.href = '#/schedule'; }}
                    >
                        Schedule
                    </Button>
                )}
                { active !== 'travel' && (
                    <Button
                        color="primary"
                        className={classes.menuButton}
                        onClick={() => { window.location.href = '#/travel'; }}
                    >
                        Travel
                    </Button>
                )}
                { active !== 'photos' && (
                    <Button
                        color="primary"
                        className={classes.menuButton}
                        onClick={() => { window.location.href = '#/photos'; }}
                    >
                        Photos
                    </Button>
                )}
                { active !== 'things to do' && (
                    <Button
                        color="primary"
                        className={classes.menuButton}
                        onClick={() => { window.location.href = '#/things-to-do'; }}
                    >
                        Things To Do
                    </Button>
                )}
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

Header.propTypes = {
    active: PropTypes.string.isRequired,
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Header);
