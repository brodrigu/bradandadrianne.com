import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Gallery from 'react-photo-gallery';

import Header from '~components/Header';

import photos from '../photos.json';

const styles = theme => ({
    alternate: {
        backgroundColor: theme.palette.background.default,
    },
    card: {
        padding: theme.spacing(0, 4, 0),
    },
    content: {
        margin: '0 auto',
        maxWidth: 1200,
        padding: theme.spacing(4, 0, 0),
    },
    image: {
        paddingTop: theme.spacing(4),
    },
    layout: {
        backgroundColor: theme.palette.background.paper,
    },
    line: {
        borderLeft: '2px solid #454546',
        display: 'block',
        height: '274px',
        margin: 'auto',
        width: '1px',
    },
    roundInput: {
        borderRadius: '30px',
    },
    spacer: {
        display: 'block',
        height: '40px',
    },
    text: {
        fontSize: '1rem',
        fontWeight: 400,
        lineHeight: 1.5,
    },
    textBold: {
        fontWeight: 700,
        lineHeight: 1.5,
        margin: 0,
    },
    textBottom: {
        margin: theme.spacing(4),
    },
});

const Photos = ({
    classes,
}) => (
    <React.Fragment>
        <Header />
        <main className={classes.layout}>
            <div className={classes.content}>
                <div className={classes.card}>
                    <Grid
                        container
                        direction="row"
                        justify="center"
                        alignItems="center"
                        spacing={0}
                    >
                        <Grid item xs={12}>
                            <Typography variant="h3" align="center">
                                Photos
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid
                        container
                        direction="row"
                        justify="center"
                        alignItems="center"
                        spacing={2}
                    >
                        <Grid item xs={8} md={6} align="center">
                            <img className={classes.image} alt="flowers" src="https://d2gt2lt628wbyx.cloudfront.net/assets/union-navy/union_color3.png" width="80%" />
                        </Grid>
                    </Grid>
                    <div className={classes.spacer} />
                    <Grid
                        container
                        direction="row"
                        justify="space-evenly"
                        alignItems="center"
                        spacing={0}
                    >
                        <Grid item sm={12}>
                            <Gallery photos={photos} />
                        </Grid>
                    </Grid>
                    <div className={classes.spacer} />
                    <Grid
                        container
                        direction="row"
                        justify="center"
                        alignItems="center"
                        spacing={2}
                    >
                        <Grid item sm={8} align="center">
                            <img alt="flowers" src="https://d2gt2lt628wbyx.cloudfront.net/assets/union-navy/unionfooter_color3.png" width="80%" />
                        </Grid>
                    </Grid>
                </div>
            </div>
        </main>
    </React.Fragment>
);

Photos.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Photos);
