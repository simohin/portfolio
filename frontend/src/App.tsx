import React from 'react';
import {Main} from "./view/main";
import {ThemeProvider} from "@mui/material";
import {Provider, useSelector} from "react-redux";
import {RootState, store} from "./storage/model";
import {Theme} from "./enum";
import {DarkTheme, LightTheme} from "./theme";
import {AppGlobalStyle} from './AppGlobalStyle';
import './localization/index'

const App = () => {

    const themeState = useSelector((state: RootState) => state.theme)

    return (
        <ThemeProvider theme={themeState.current === Theme.DARK ? DarkTheme : LightTheme}>
            <AppGlobalStyle/>
            <Main/>
        </ThemeProvider>
    )
}

const AppWrapper = () => (
    <Provider store={store}>
        <App/>
    </Provider>
)

export default AppWrapper;
