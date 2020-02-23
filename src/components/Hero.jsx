import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
    mainFeaturedPost: {
        backgroundColor: theme.palette.grey[800],
        backgroundImage: 'url(https://source.unsplash.com/random)',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        color: theme.palette.common.white,
        marginBottom: theme.spacing(4),
        position: 'relative',
    },
    mainFeaturedPostContent: {
        height: '800px',
        position: 'relative',
    },
    overlay: {
        backgroundColor: 'rgba(0,0,0,.5)',
    },
}));

export default function MainFeaturedPost({
    details,
    image,
}) {
    const classes = useStyles();

    return (
        <Paper className={classes.mainFeaturedPost} style={{ backgroundImage: `url(${image})` }}>
            {/* Increase the priority of the hero background image */}
            {<img style={{ display: 'none' }} src={image} alt="foo" />}
            <Grid
                container
                direction="column"
                justify="flex-end"
                alignItems="flex-end"
                spacing={0}
                className={classes.mainFeaturedPostContent}
            >
                <Grid item xs={4} align="center">
                    <div className={classes.overlay}>
                        {details}
                    </div>
                </Grid>
            </Grid>
        </Paper>
    );
}

MainFeaturedPost.propTypes = {
    details: PropTypes.object.isRequired,
    image: PropTypes.string.isRequired,
};
