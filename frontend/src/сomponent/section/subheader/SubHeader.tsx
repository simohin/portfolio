import {
    BottomNavigation,
    BottomNavigationAction,
    Box,
    Drawer,
    ToggleButton,
    Toolbar,
    useMediaQuery,
    useTheme
} from "@mui/material";
import {useSelector} from "react-redux";
import {RootState} from "../../../storage/model";
import React, {useState} from "react";
import ReorderIcon from '@mui/icons-material/Reorder';

const ToolbarSx = {
    borderBottom: 1,
    borderColor: 'divider',
    justifyContent: 'space-between',
    padding: '8px',
}

type Item = {
    id: number,
    name: string,
    link: string
}

const items: Item[] = [
    {
        id: 0,
        name: "Item 1",
        link: "#",
    },
    {
        id: 1,
        name: "Item 2",
        link: "#",
    },
    {
        id: 2,
        name: "Item 3",
        link: "#",
    }
]
type Props = {}

type MenuProps = {
    display: string,
    flexDirection?: string
}

const Menu: React.FC<MenuProps> = (props) => {
    const [activeTab, setActiveTab] = useState(0)
    const theme = useTheme()
    const isMd = useMediaQuery(theme.breakpoints.up('md'))

    return (
        <BottomNavigation
            showLabels
            value={activeTab}
            sx={{
                display: props.display,
                flexDirection: props.flexDirection || 'row',
                gap: '32px',
                bgcolor: 'transparent'
            }}
            onChange={(event, newValue: number) => {
                setActiveTab(newValue);
                window.location.replace(items[newValue].link)
            }}
        >
            {items.map(item => (
                <BottomNavigationAction value={item.id} label={item.name} sx={isMd ? {} : {minWidth: '30dvw'}}/>
            ))}
        </BottomNavigation>)
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

    return (
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
                    <Menu flexDirection={'column'} display='flex'/>
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
                <Menu display={isMd ? 'flex' : 'none'}/>
            </Toolbar>
        </>

    )

}
