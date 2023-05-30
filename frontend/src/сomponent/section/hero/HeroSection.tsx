import {
    Box,
    Divider,
    Grid,
    Link,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableRow,
    Typography,
    useMediaQuery,
    useTheme
} from "@mui/material";
import portrait from '../../../media/image/hero-section-photo.jpeg'
import React, {ReactNode} from "react";
import moment from 'moment';
import {useTranslation} from "react-i18next";

const HeroSx = {
    flexGrow: 1,
    display: 'flex',
    gap: '64px',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '16px'
}

const HeroInfoSx = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    minWidth: '300px'
}

const HeroTextSx = {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    paddingBottom: '32px'
}

interface Row {
    key: string,
    value: ReactNode
}

const createRow = (key: string, value: ReactNode) => {
    return {key, value} as Row
}

export const HeroSection = () => {
    const {t} = useTranslation();

    const theme = useTheme()
    const isMd = useMediaQuery(theme.breakpoints.up('md'))

    const rows: Row[] = [
        createRow(t('hero.bio.field.name.age'), moment().diff(moment("06.09.1995", "DD.MM.YYYY"), 'years').toString()),
        createRow(t('hero.bio.field.name.location'), t('hero.bio.field.value.location')),
        createRow(t('hero.bio.field.name.email'), <Link
            href={"mailto:65sumbox@gmail.com"}>65sumbox@gmail.com</Link>),
        createRow(t('hero.bio.field.name.work.type'), t('hero.bio.field.value.work.type')),
        createRow(t('hero.bio.field.name.employment'), t('hero.bio.field.value.employment'))
    ]

    return (
        <>
            <Grid sx={HeroSx}>
                <Box sx={HeroInfoSx}>
                    <Box sx={HeroTextSx}>
                        <Typography variant={'h2'}>{t('hero.title')}</Typography>
                    </Box>
                    <TableContainer component={Box}>
                        <Table sx={{width: '100%'}} aria-label="simple table">
                            <TableBody>
                                {rows.map((row) => (
                                    <TableRow key={row.key} sx={{'&:last-child td, &:last-child th': {border: 0}}}>
                                        <TableCell component="th" scope="row">{row.key}</TableCell>
                                        <TableCell align={'right'}>{row.value}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Box>
                <img style={{
                    display: isMd ? 'flex' : 'none',
                    height: '100%',
                    maxHeight: '60vh',
                    maxWidth: '600px'
                }} src={portrait} alt='portrait'/>
            </Grid>
            <Divider/>
        </>
    )
}
