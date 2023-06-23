import React, {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import {RootState} from "../../../storage/model";
import {
    Box,
    Collapse,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Typography,
    useMediaQuery,
    useTheme
} from "@mui/material";
import i18n from "i18next";
import {ExperienceItem} from "../../../types/experience";
import {loadWorkExperience} from "../../../api/WorkExperience";

type Column = {
    id: 'title' | 'dateStart' | 'dateEnd' | 'position' | 'description';
    label: string;
}

const getColumns = (): Column[] => {
    return [
        {id: 'position', label: i18n.t('admin.panel.experience.column.name.position')!!},
        {id: 'title', label: i18n.t('admin.panel.experience.column.name.title')!!},
        {id: 'dateStart', label: i18n.t('admin.panel.experience.column.name.dateStart')!!},
        {id: 'dateEnd', label: i18n.t('admin.panel.experience.column.name.dateEnd')!!},
    ]
}

const ExperienceRow: React.FC<ExperienceItem> = (item: ExperienceItem) => {

    const [open, setOpen] = useState(false);
    const t = i18n.t

    const theme = useTheme()
    const isMd = useMediaQuery(theme.breakpoints.up('md'))

    const cellSx = {
        padding: isMd ? '16px' : '8px'
    }

    return (<>
            <TableRow
                onClick={() => setOpen(!open)}
                hover
                role="checkbox"
                key={item.key}
            >
                <TableCell sx={cellSx}>{item.position}</TableCell>
                <TableCell sx={cellSx}>{item.title}</TableCell>
                <TableCell sx={cellSx}>{item.dateStart}</TableCell>
                <TableCell sx={cellSx}>{item.dateEnd}</TableCell>
            </TableRow>
            <TableRow>
                <TableCell sx={{pb: '0', pt: '0'}} colSpan={4}>
                    <Collapse in={open} unmountOnExit>
                        <Box sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '8px',
                            margin: '16px'
                        }}>
                            <Typography variant={"h6"}>
                                {t('admin.panel.experience.column.name.description')!!}
                            </Typography>
                            <Typography variant={"body2"}>{item.description}</Typography>
                        </Box>
                    </Collapse>
                </TableCell>
            </TableRow>
        </>
    )
}

export const Experience = () => {

    const languageState = useSelector((state: RootState) => state.language)
    const experienceState = useSelector((state: RootState) => state.experience)
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
    const theme = useTheme()
    const isMd = useMediaQuery(theme.breakpoints.up('md'))
    const t = i18n.t

    useEffect(() => {
        loadWorkExperience().then(() => {
        })
    }, [languageState?.current])

    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: '36px',
            padding: isMd ? '36px' : '0px',
        }}>
            <Typography variant={'h2'}>{t('experience.title')}</Typography>
            <TableContainer sx={{
                display: 'flex',
            }}>
                <Table>
                    <TableHead>
                        <TableRow>
                            {getColumns().map((column) => (
                                <TableCell key={column.id}>
                                    <Typography variant={'body2'}>{column.label}</Typography>
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            experienceState?.items
                                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                .map(item => {
                                    return (<ExperienceRow {...item}/>)
                                })
                        }
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    )
}
