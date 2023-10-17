import {BottomNavigation, BottomNavigationAction, Toolbar, useMediaQuery, useTheme} from "@mui/material";
import {useSelector} from "react-redux";
import {RootState} from "../../storage/model";
import React, {useState} from "react";

const ToolbarSx = {
    borderBottom: 1,
    borderColor: 'divider',
    justifyContent: 'space-between',
    padding: '8px'
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
        name: "Item 2",
        link: "#",
    }
]
type Props = {}
export const SubHeader: React.FC<Props> = (props) => {

    const authState = useSelector((state: RootState) => state.auth)
    let isAuthenticated = authState?.isAuthenticated === true

    const theme = useTheme()
    const isMd = useMediaQuery(theme.breakpoints.up('md'))

    const [activeTab, setActiveTab] = useState(0)

    const ConfiguredToolbarSx = {
        ...ToolbarSx,
        display: isAuthenticated ? 'flex' : 'none'
    }

    return (
        <Toolbar sx={ConfiguredToolbarSx}>
            <BottomNavigation
                showLabels
                value={activeTab}
                onChange={(event, newValue: number) => {
                    setActiveTab(newValue);
                    window.location.replace(items[newValue].link)
                }}
            >
                {items.map(item => (
                    <BottomNavigationAction value={item.id} label={item.name}/>
                ))}
            </BottomNavigation>
        </Toolbar>
    )

}
