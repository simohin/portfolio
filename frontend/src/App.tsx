import React from 'react';
import {Main} from "./view/main";
import {ThemeProvider} from "@mui/material";
import {Provider, useSelector} from "react-redux";
import {RootState, store} from "./storage/model";
import {Theme} from "./enum";
import {DarkTheme, LightTheme} from "./theme";
import {AppGlobalStyle} from './AppGlobalStyle';
import './localization/index'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {Callback, Login} from "./view/login";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main/>,
    },
    {
        path: "/login",
        element: <Login/>,
    },
    {
        path: "/login/callback",
        element: <Callback/>,
    },
]);

const App = () => {

    const themeState = useSelector((state: RootState) => state.theme)

    return (
        <ThemeProvider theme={themeState.current === Theme.DARK ? DarkTheme : LightTheme}>
            <AppGlobalStyle/>
            <RouterProvider router={router}/>
        </ThemeProvider>
    )
}

const AppWrapper = () => (
    <Provider store={store}>
        <App/>
    </Provider>
)

export default AppWrapper;
