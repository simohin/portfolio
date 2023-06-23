import {Header} from "../../сomponent/section/header";
import {HeroSection} from "../../сomponent/section/hero";
import {WorkExperienceSection} from "../../сomponent/section/work-experience";
import {useTranslation} from "react-i18next";
import {PageWrapper, ScreenWrapper} from "../../сomponent/section";

export const Main = () => {
    const {t} = useTranslation();

    return (
        <PageWrapper>
            <ScreenWrapper sx={{justifyContent: 'center'}}>
                <Header title={t('header.title').toString()}/>
                <HeroSection/>
            </ScreenWrapper>
            <WorkExperienceSection/>
        </PageWrapper>
    )
}
