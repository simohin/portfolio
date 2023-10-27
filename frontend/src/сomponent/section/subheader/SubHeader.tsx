import {Box, Drawer, Tab, Tabs, ToggleButton, Toolbar, useMediaQuery, useTheme} from "@mui/material";
import {useSelector} from "react-redux";
import {RootState} from "../../../storage/model";
import React, {useEffect, useState} from "react";
import ReorderIcon from '@mui/icons-material/Reorder';

const ToolbarSx = {
    borderBottom: 1,
    borderColor: 'divider',
    justifyContent: 'space-between',
    padding: '8px',
}

export type Item = {
    id: number,
    name: string,
}


type Props = {
    tabs?: Item[]
    handleActiveTab?: (id: number) => void
}

type MenuProps = {
    display?: string
    flexDirection?: string
    tabs?: Item[]
    handleActiveTab?: (id: number) => void
}

const defaultHandleActiveTab = (id: number) => {
    console.log("Handled tab id: " + id)
}

const Menu: React.FC<MenuProps> = (props) => {
    const [activeTab, setActiveTab] = useState(0)
    const theme = useTheme()
    const isMd = useMediaQuery(theme.breakpoints.up('md'))

    const items = props.tabs || []
    const handleActiveTab: (id: number) => void = props.handleActiveTab || defaultHandleActiveTab

    useEffect(() => handleActiveTab(activeTab), [activeTab, handleActiveTab])

    return (
        <Tabs
            orientation={isMd ? 'horizontal' : 'vertical'}
            sx={{
                display: props.display || 'flex',
                gap: '32px',
                bgcolor: 'transparent'
            }}
            value={activeTab}
            onChange={(event, newValue: number) => {
                setActiveTab(newValue);
            }}
            aria-label="basic tabs example"
        >
            {items.map(item => (
                <Tab value={item.id} label={item.name} sx={isMd ? {} : {minWidth: '30dvw'}}/>
            ))}
        </Tabs>)
}

export const SubHeader: React.FC<Props> = (props) => {

    const authState = useSelector((state: RootState) => state.auth)
    let isAuthenticated = authState?.isAuthenticated === true

    const theme = useTheme()
    const isMd = useMediaQuery(theme.breakpoints.up('md'))
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);


    const ConfiguredToolbarSx = {
        ...ToolbarSx,
        display: isAuthenticated ? 'flex' : 'none'
    }

    const proxyMenuProps = props as MenuProps

    return (props.tabs) ? (
        <>
            <Drawer
                anchor={'right'}
                open={isDrawerOpen}
                onClose={() => setIsDrawerOpen(false)}
            >
                <Box
                    sx={{
                        paddingTop: '64px'
                    }}
                >
                    <Menu {...proxyMenuProps}/>
                </Box>
            </Drawer>
            <Toolbar sx={{...ConfiguredToolbarSx, justifyContent: isMd ? 'flex' : 'flex-end'}}>
                <ToggleButton
                    value={'drawer-toggle'}
                    selected={isDrawerOpen}
                    onChange={() => setIsDrawerOpen(!isDrawerOpen)}
                    sx={{
                        justifyContent: 'flex-end',
                        display: isMd ? 'none' : 'flex',
                    }}>
                    <ReorderIcon/>
                </ToggleButton>
                <Menu{...proxyMenuProps} display={isMd ? 'flex' : 'none'}/>
            </Toolbar>
        </>

    ) : (<></>)
}
