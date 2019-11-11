import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Hidden from '@material-ui/core/Hidden';
import Link from '@material-ui/core/Link';
import { withStyles } from '@material-ui/core/styles';

import Header from '~components/Header';

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

const Schedule = ({
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
                                Schedule
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
                        <Grid item xs={10} md={7} align="center">
                            <img className={classes.image} alt="Villa Catalina" src="https://images.zola.com/8c786036-61c5-4ae8-8617-6dad57442e69?h=400" width="80%" />
                        </Grid>
                        <Grid item xs={10} md={7} align="center">
                            <img className={classes.image} alt="instagram influencer" src="https://d2gt2lt628wbyx.cloudfront.net/assets/union-navy/union_color3.png" width="80%" />
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
                        <React.Fragment>
                            <Grid item sm={5}>
                                <Grid
                                    container
                                    direction="row"
                                    justify="center"
                                    alignItems="flex-start"
                                >
                                    <Grid item xs={12}>
                                        <Typography variant="h3" align="center">
                                            Wedding
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={12} align="center">
                                        <Typography variant="h5" align="center">
                                            Sunday, May 24, 2020
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={12} align="center">
                                        <Typography variant="h5" align="center">
                                            5pm
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Hidden xsDown>
                                <Grid item xs={false} sm={2}>
                                    <div className={classes.line} />
                                </Grid>
                            </Hidden>
                            <Grid item sm={5} align="center">
                                <Grid
                                    container
                                    direction="row"
                                    justify="center"
                                    alignItems="flex-start"
                                >
                                    <Grid item xs={12}>
                                        <Typography variant="h4" align="center">
                                            Villa Catalina
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={12} align="center">
                                        <Typography variant="h5" align="center">
                                            <Link
                                                href="https://maps.google.com/?cid=10672543124784078"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                Carretera de Vilafranca km 4,6
                                                <br />
                                                Sant Pere de Ribes, 08810
                                                <br />
                                                Spain
                                            </Link>
                                        </Typography>
                                    </Grid>
                                    <div className={classes.spacer} />
                                    <Grid item xs={12} align="center">
                                        <Typography variant="p" align="center" className={classes.text}>
                                            Garden Attire: Wear sundresses, floral prints,
                                            suits in lighter hues, and fun hats and fascinators.
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Hidden xsDown>
                                <Grid item sm={12}>
                                    <div className={classes.spacer} />
                                </Grid>
                            </Hidden>
                        </React.Fragment>
                    </Grid>
                    <div className={classes.spacer} />
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

Schedule.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Schedule);
