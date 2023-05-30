import {Header} from "../../сomponent/section/header";
import {HeroSection} from "../../сomponent/section/hero";
import {WorkExperienceSection} from "../../сomponent/section/work-experience";
import {Box} from "@mui/material";
import {useTranslation} from "react-i18next";

const BoxSx = {
    display: 'flex',
    flexDirection: 'column',
}

const MainSectionSx = {
    ...BoxSx,
    minHeight: '100vh',
    justifyContent: 'center'
}
export const Main = () => {
    const {t} = useTranslation();

    return (
        <Box sx={BoxSx}>
            <Box sx={MainSectionSx}>
                <Header title={t('header.title').toString()}/>
                <HeroSection/>
            </Box>
            <WorkExperienceSection/>
        </Box>
    )
}
