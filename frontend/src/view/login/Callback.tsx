import {useSearchParams} from "react-router-dom";
import {auth} from "../../api";
import {PageWrapper, ScreenWrapper} from "../../сomponent/section";
import {Box, CircularProgress} from "@mui/material";
import {AnonymousOnly} from "../../сomponent/auth/AnonymousOnly";

export const Callback = () => {

    const [params] = useSearchParams()

    auth(params.get('code') || '', params.get('state') || '')

    return (
        <AnonymousOnly>
            <PageWrapper>
                <ScreenWrapper>
                    <Box sx={{
                        display: 'flex',
                        flexGrow: 1,
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                        <CircularProgress/>
                    </Box>
                </ScreenWrapper>
            </PageWrapper>
        </AnonymousOnly>
    )
}
