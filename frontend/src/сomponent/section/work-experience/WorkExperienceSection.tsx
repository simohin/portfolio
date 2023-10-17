import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import React, {useEffect} from "react";
import {TimelineDot, TimelineOppositeContent} from "@mui/lab";
import {Box, Paper, Typography, useTheme} from "@mui/material";
import {useTranslation} from "react-i18next";
import moment from "moment/moment";
import {useSelector} from "react-redux";
import {RootState} from "../../../storage/model";
import {Language} from "../../../enum";
import {ExperienceItemContent, ExperienceItemOppositeContent,} from "../../../types/experience";
import {loadWorkExperience} from "../../../api/WorkExperience";
import {ScreenWrapper} from "../index";


const ExperienceItemContentComponent: React.FC<ExperienceItemContent> = (props) => {
    const theme = useTheme();
    return (
        <Paper elevation={0} sx={{backgroundColor: theme.palette.background.default, minWidth: '100px'}}>
            <Typography variant={'subtitle1'}>{props.title}</Typography>
            <Typography color={theme.palette.text.secondary}
                        variant={'subtitle2'}>
                {props.dateStart} - {props.dateEnd}
            </Typography>
        </Paper>
    )
}
const ExperienceItemOppositeContentComponent: React.FC<ExperienceItemOppositeContent> = (props) => {
    const theme = useTheme();
    return (
        <Paper elevation={0} sx={{
            backgroundColor: theme.palette.background.default,
            minWidth: '100px',
            maxWidth: '400px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-end'
        }}>
            <Typography variant={'subtitle1'}>{props.position}</Typography>
            <Typography color={theme.palette.text.secondary} variant={'subtitle2'}>
                {props.description || ''}
            </Typography>
        </Paper>
    )
}

export const WorkExperienceSection = () => {
    const theme = useTheme();
    const {t} = useTranslation();

    const languageState = useSelector((state: RootState) => state.language)
    const experienceState = useSelector((state: RootState) => state.experience)

    useEffect(() => {
        loadWorkExperience().then(() => {
        })
    }, [languageState?.current])


    const getDates = () => {
        return moment.duration(
            moment().diff(
                moment("09.2019", "mm.YYYY"),
                "month"
            ), 'month')
            .locale((languageState?.current || Language.EN).toLowerCase())
            .humanize()
    }

    return (
        <ScreenWrapper sx={{
            margin: '16px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        }}>
            <Typography variant={'h2'}>{t('experience.title')}</Typography>
            <Typography pb={'32px'} color={theme.palette.text.secondary} fontWeight={300}
                        variant={'h3'}>{getDates()}</Typography>
            <Box>
                <Timeline sx={{display: 'flex', justifyContent: 'space-around', alignItems: 'center'}}>
                    {experienceState!!.items.map(item => (
                        <TimelineItem key={item.key} sx={{width: '100%'}}>
                            <TimelineContent>
                                <ExperienceItemContentComponent
                                    title={item.title}
                                    dateStart={item.dateStart}
                                    dateEnd={item.dateEnd}
                                />
                            </TimelineContent>
                            <TimelineSeparator>
                                <TimelineDot/>
                                <TimelineConnector/>
                            </TimelineSeparator>
                            <TimelineOppositeContent
                                color="text.secondary"
                            >
                                <ExperienceItemOppositeContentComponent
                                    position={item.position}
                                    description={item.description}
                                />
                            </TimelineOppositeContent>
                        </TimelineItem>
                    ))}
                </Timeline>
            </Box>
        </ScreenWrapper>
    )
}
