import {
    Box,
    Button,
    Drawer,
    FormControl,
    FormControlLabel,
    MenuItem,
    Select,
    SelectChangeEvent,
    Switch,
    ToggleButton,
    Toolbar,
    Typography,
    useMediaQuery,
    useTheme
} from "@mui/material";
import SettingsIcon from '@mui/icons-material/Settings';
import React, {useState} from "react";
import {Language, Theme} from "../../../enum";
import {Dispatch, RootState} from "../../../storage/model";
import {useDispatch, useSelector} from 'react-redux'
import {useTranslation} from "react-i18next";

const ToolbarSx = {
    borderBottom: 1,
    borderColor: 'divider',
    justifyContent: 'space-between',
    padding: '8px'
}

export interface HeaderProps {
    title?: string,
}

const LanguageSelectSx = {
    minWidth: '120px'
}

interface SettingsProps {
    display: string,
    flexDirection?: string
}

const Settings: React.FC<SettingsProps> = (props) => {

    const dispatch = useDispatch<Dispatch>()
    const {t} = useTranslation();
    const authState = useSelector((state: RootState) => state.auth)
    const themeState = useSelector((state: RootState) => state.theme)
    const languageState = useSelector((state: RootState) => state.language)
    const languages = Object.keys(Language)

    let isAuthenticated = authState?.isAuthenticated === true
    return (
        <Box
            sx={{
                margin: '16px',
                display: props.display,
                flexDirection: props.flexDirection || 'row',
                gap: '32px'
            }}
        >
            <Select
                labelId="language-select-label"
                id="language-select"
                value={languageState.current}
                onChange={(e: SelectChangeEvent) => dispatch.language.setLanguage(e.target.value as Language)}
                sx={LanguageSelectSx}
                defaultValue={Language.EN}
            >
                {languages.map(option => (
                    <MenuItem value={option} key={option}>
                        {option}
                    </MenuItem>
                ))}
            </Select>
            <FormControlLabel
                control={
                    <Switch
                        checked={themeState.current === Theme.DARK}
                        onChange={() => dispatch.theme.setTheme(themeState.current === Theme.DARK ? Theme.LIGHT : Theme.DARK)}/>}
                label={t('header.field.label.theme')}/>
            <Button
                onClick={() => isAuthenticated ? dispatch.auth.logout() : window.location.replace('/login')}
                variant='outlined'>
                {isAuthenticated ? t('header.button.logout.text') : t('header.button.login.text')}
            </Button>
        </Box>)
}

const SettingsWrapper = () => {

    const theme = useTheme()

    const isMd = useMediaQuery(theme.breakpoints.up('md'))
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);


    return (
        <>
            <Box sx={{display: 'flex', justifyContent: 'center'}}>
                <FormControl fullWidth sx={{
                    flexDirection: 'row',
                    gap: '16px'
                }}>
                    <ToggleButton
                        value={'drawer-toggle'}
                        selected={isDrawerOpen}
                        onChange={() => setIsDrawerOpen(!isDrawerOpen)}
                        sx={{
                            display: isMd ? 'none' : 'flex',
                        }}>
                        <SettingsIcon/>
                    </ToggleButton>
                    <Drawer
                        anchor={'right'}
                        open={isDrawerOpen}
                        onClose={() => setIsDrawerOpen(false)}
                    >
                        <Settings flexDirection={'column'} display='flex'/>
                    </Drawer>
                    <Settings display={isMd ? 'flex' : 'none'}/>
                </FormControl>
            </Box>
        </>
    )
}

export const Header: React.FC<HeaderProps> = (props) => (
    <Toolbar component='header' sx={ToolbarSx}>
        <Typography margin={'16px'} variant={'h5'}>{props.title}</Typography>
        <SettingsWrapper/>
    </Toolbar>
)
