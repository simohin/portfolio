import {GlobalStyles, useTheme} from "@mui/material";

export const AppGlobalStyle = () => {
    const theme = useTheme();
    return (
        <GlobalStyles styles={{
            body: {
                backgroundColor: theme.palette.background.default,
                color: theme.palette.text.primary
            }
        }}/>
    )
}
