import React, {ReactNode} from "react";
import {Header} from "../сomponent/section/header";
import {Item, SubHeader} from "../сomponent/section/subheader/SubHeader";
import {useTranslation} from "react-i18next";
import {ScreenWrapper} from "../сomponent/section";
import {Box} from "@mui/material";

type Props = {
    children: ReactNode
    subheaderTabs?: Item[]
    handleActiveSubheaderTab?: (id: number) => void
}
export const BaseLayout: React.FC<Props> = (props) => {
    const {t} = useTranslation();

    return (
        <ScreenWrapper>
            <Box component={'header'} id={'header-id'}>
                <Header title={t('header.title').toString()}/>
                <SubHeader tabs={props.subheaderTabs} handleActiveTab={props.handleActiveSubheaderTab}/>
            </Box>
            {props.children}
        </ScreenWrapper>
    )
}
