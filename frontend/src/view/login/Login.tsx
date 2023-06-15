import {PageWrapper, ScreenWrapper} from "../../сomponent/section";
import {useTranslation} from "react-i18next";
import {Box, Button, ButtonGroup, Typography} from "@mui/material";
import {Header} from "../../сomponent/section/header";
import React from "react";
import {AuthProvider} from "../../enum";
import {getAuthUrl} from "../../api";
import {AnonymousOnly} from "../../сomponent/auth/AnonymousOnly";

export const Login = () => {

    const {t} = useTranslation();

    const handleClick = (provider: AuthProvider) => {
        getAuthUrl(provider, `${window.location.origin}/login/callback`)
            .then(url => window.location.href = url)
    }

    return (
        <AnonymousOnly>
            <PageWrapper>
                <ScreenWrapper>
                    <Header title={t('header.title').toString()}/>
                    <Box sx={{
                        display: 'flex',
                        flexGrow: 1,
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        textAlign: 'center'
                    }}>
                        <Typography margin={'16px'} variant={'h2'}>{t('login.title')}</Typography>
                        <ButtonGroup
                            orientation="vertical"
                        >
                            {(Object.keys(AuthProvider) as Array<keyof typeof AuthProvider>)
                                .map(it =>
                                    <Button
                                        onClick={() => handleClick(AuthProvider[it])}
                                        key={it}>
                                        {`${t('login.button.prefix')} ${it}`}
                                    </Button>,
                                )}
                        </ButtonGroup>
                    </Box>
                </ScreenWrapper>
            </PageWrapper>
        </AnonymousOnly>
    )
}
