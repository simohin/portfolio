import React, {ReactNode} from "react";
import {Box} from "@mui/material";

interface Props {
    children: ReactNode
}

const PageSx = {
    display: 'flex',
    flexDirection: 'column',
}
const ScreenSx = {
    ...PageSx,
    minHeight: '100vh',
    justifyContent: 'center'
}

export const PageWrapper: React.FC<Props> = (props) => (
    <Box sx={PageSx}>
        {props.children}
    </Box>
)
export const ScreenWrapper: React.FC<Props> = (props) => (
    <Box sx={ScreenSx}>
        {props.children}
    </Box>
)
