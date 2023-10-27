import React, {useState} from "react";
import {Item} from "../../сomponent/section/subheader/SubHeader";
import {BaseLayout} from "../../layout";
import {HeroSection} from "../../сomponent/section/hero";
import {WorkExperienceSection} from "../../сomponent/section/work-experience";
import {Box} from "@mui/material";
import {Chat} from "../chat/Chat";

const items: Item[] = [
    {
        id: 0,
        name: "Main"
    },
    {
        id: 1,
        name: "Chat",
    }
]

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

function Tab(props: TabPanelProps) {
    const {children, value, index, ...other} = props;

    return (
        <Box
            role="tabpanel"
            hidden={value !== index}
            id={`main-page-tab-${index}`}
            aria-labelledby={`ain-page-tab-${index}`}
            {...other}
        >
            {value === index && (
                props.children
            )}
        </Box>
    );
}

export const Main = () => {

    const [currentTabId, setCurrentTabId] = useState(items[0].id)

    return (
        <BaseLayout subheaderTabs={items} handleActiveSubheaderTab={setCurrentTabId}>
            <Tab index={items[0].id} value={currentTabId}>
                <HeroSection/>
                <WorkExperienceSection/>
            </Tab>
            <Tab index={items[1].id} value={currentTabId}>
                <Chat/>
            </Tab>
        </BaseLayout>
    )

}
