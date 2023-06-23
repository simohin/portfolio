import React, {useState} from "react";
import {PageWrapper, ScreenWrapper} from "../../сomponent/section";
import {Header} from "../../сomponent/section/header";
import {useTranslation} from "react-i18next";
import {Box, Tab, Tabs, useMediaQuery, useTheme} from "@mui/material";
import {TabContext, TabPanel} from "@mui/lab";
import {Experience} from "../../сomponent/admin/experience";

export const Admin = () => {

    const {t} = useTranslation();
    let [tabsValue, setTabsValue] = useState('experience');

    const theme = useTheme()
    const isMd = useMediaQuery(theme.breakpoints.up('md'))
    const handleTabsChange = (event: React.SyntheticEvent, newValue: any) => {
        setTabsValue(newValue);
    };

    const tabPanelSx = {
        display: 'flex',
        flexDirection: 'column',
        width: '100%'
    }

    return (
        <PageWrapper>
            <Header title={t('header.title').toString()}/>
            <ScreenWrapper>
                <TabContext value={tabsValue}>
                    <Box sx={{
                        display: 'flex',
                        flexDirection: isMd ? 'row' : 'column',
                    }}>
                        <Tabs
                            orientation={isMd ? 'vertical' : 'horizontal'}
                            variant={'fullWidth'}
                            value={tabsValue}
                            onChange={handleTabsChange}
                        >
                            <Tab value={'experience'} label={t('admin.tab.experience')}/>
                        </Tabs>
                        <TabPanel sx={tabPanelSx} value={'experience'}>
                            <Experience/>
                        </TabPanel>
                    </Box>
                </TabContext>
            </ScreenWrapper>
        </PageWrapper>
    )
}
