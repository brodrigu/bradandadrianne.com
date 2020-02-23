import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

import HomeHeader from '~components/HomeHeader';

const styles = theme => ({
    alternate: {
        backgroundColor: theme.palette.background.default,
    },
    and: {
        fontSize: '20px',
    },
    bna: {
        color: '#2a655f',
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
        paddingTop: theme.spacing(5),
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
    married: {
        fontFamily: 'Great Vibes, cursive',
        fontSize: '5rem',
        marginBottom: '40px',
        marginTop: '60px',
    },
    roundInput: {
        borderRadius: '30px',
    },
    spacer: {
        display: 'block',
        height: '100px',
    },
    text: {
        // fontSize: '1rem',
        // fontWeight: 400,
        // lineHeight: 1.5,
        marginTop: '10px',
    },
    textBold: {
        fontWeight: 700,
        lineHeight: 1.5,
        margin: 0,
    },
    textBottom: {
        margin: theme.spacing(4),
    },
    title: {
        color: '#2a655f',
        fontWeight: 400,
        textTransform: 'uppercase',
    },
});

const Home = ({
    classes,
}) => (
    <React.Fragment>
        <HomeHeader />
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
                        <Grid item xs={12} align="center">
                            <Typography variant="h4" align="center" className={classes.bna}>
                                BRAD RODRIGUEZ & ADRIANNE LEE
                            </Typography>
                        </Grid>
                        <Grid item xs={10} md={7} align="center">
                            <img className={classes.image} alt="flower" src="https://d2gt2lt628wbyx.cloudfront.net/assets/union-navy/union_color3.png" width="80%" />
                        </Grid>
                    </Grid>
                    <Grid
                        container
                        direction="row"
                        justify="center"
                        alignItems="center"
                        spacing={2}
                    >
                        <Grid item xs={10} md={10}>
                            <Typography variant="h2" align="center" className={classes.married}>
                                {/*  eslint-disable-next-line react/no-unescaped-entities */}
                                We're Getting Married!
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid
                        container
                        direction="row"
                        justify="space-around"
                        alignItems="center"
                        spacing={2}
                    >
                        <Grid item sm={12}>
                            <Typography variant="h4" align="center">
                                May 24, 2020
                            </Typography>
                        </Grid>
                        <Grid item sm={12}>
                            <Typography variant="h4" align="center">
                                Sitges, Barcelona, Spain
                            </Typography>
                        </Grid>
                    </Grid>
                    <div className={classes.spacer} />
                    <Grid
                        container
                        direction="row"
                        justify="space-evenly"
                        alignItems="center"
                        spacing={2}
                    >
                        <Grid item sm={10}>
                            <Typography variant="h5" align="center" className={classes.title}>
                                Hello Family & Friends
                            </Typography>
                        </Grid>
                        <Grid item sm={10} align="center">
                            <Typography variant="h5" align="center" className={classes.text}>
                                We are so excited to have our wedding near the Mediterranean
                                coast in Spain. The wedding will be a semi-formal, intimate
                                and relaxing getaway near the beach town of Sitges. Following
                                the ceremony, the reception will include ample dining and our
                                favorite Spanish wines alongside live music, so come prepared
                                to feast!

                                We hope you can join us across the world in our celebrations!
                            </Typography>
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
                            <img alt="flowers" src="https://d2gt2lt628wbyx.cloudfront.net/assets/union-navy/unionfooter_color3.png" width="70%" />
                        </Grid>
                    </Grid>
                </div>
            </div>
        </main>
    </React.Fragment>
);

Home.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Home);
