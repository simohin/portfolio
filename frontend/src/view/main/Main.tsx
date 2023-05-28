import {Header} from "../../сomponent/header";
import {HeroSection} from "../../сomponent/hero-section";
import {Box} from "@mui/material";
import {useTranslation} from "react-i18next";

const BoxSx = {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    backgroundColor: 'transparent'
}
export const Main = () => {
    const {t} = useTranslation();

    return (<Box sx={BoxSx}>
        <Header title={t('header.title').toString()}/>
        <HeroSection/>
    </Box>)
}
