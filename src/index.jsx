import React from 'react';
import { render } from 'react-dom';
import {
    HashRouter,
    Route,
    Switch,
} from 'react-router-dom';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import themeJson from './theme.json';
import Home from '~components/Home';
import Schedule from '~components/Schedule';
import Travel from '~components/Travel';
import Photos from '~components/Photos';
import ThingsToDo from '~components/ThingsToDo';

const theme = createMuiTheme(themeJson);

render(
    <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <HashRouter>
            <Switch>
                <Route
                    path="/schedule"
                    render={() => (
                        <Schedule />
                    )}
                />
                <Route
                    path="/travel"
                    render={() => (
                        <Travel />
                    )}
                />
                <Route
                    path="/photos"
                    render={() => (
                        <Photos />
                    )}
                />
                <Route
                    path="/things-to-do"
                    render={() => (
                        <ThingsToDo />
                    )}
                />
                <Route
                    path="/"
                    render={() => (
                        <Home />
                    )}
                />
            </Switch>
        </HashRouter>
    </MuiThemeProvider>,
    document.getElementById('root'),
);
