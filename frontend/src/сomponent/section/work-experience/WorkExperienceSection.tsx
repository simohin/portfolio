import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import React, {ReactNode} from "react";
import {TimelineDot, TimelineOppositeContent} from "@mui/lab";
import {Box, Paper, Typography, useTheme} from "@mui/material";
import {useTranslation} from "react-i18next";
import moment from "moment/moment";
import {useSelector} from "react-redux";
import {RootState} from "../../../storage/model";
import {Language} from "../../../enum";

interface ExperienceItemContentProps {
    title: string
    dateStart: string
    dateEnd: string,
}

interface ExperienceItemOppositeContentProps {
    title: string
    description?: string
}

const ExperienceItemContent: React.FC<ExperienceItemContentProps> = (props) => {
    const theme = useTheme();
    const {t} = useTranslation()
    return (
        <Paper elevation={0} sx={{backgroundColor: theme.palette.background.default, minWidth: '100px'}}>
            <Typography variant={'subtitle1'}>{t(props.title)}</Typography>
            <Typography color={theme.palette.text.secondary}
                        variant={'subtitle2'}>
                {t(props.dateStart)} - {t(props.dateEnd)}
            </Typography>
        </Paper>
    )
}
const ExperienceItemOppositeContent: React.FC<ExperienceItemOppositeContentProps> = (props) => {
    const theme = useTheme();
    const {t} = useTranslation()
    return (
        <Paper elevation={0} sx={{
            backgroundColor: theme.palette.background.default,
            minWidth: '100px',
            maxWidth: '400px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-end'
        }}>
            <Typography variant={'subtitle1'}>{t(props.title)}</Typography>
            <Typography color={theme.palette.text.secondary} variant={'subtitle2'}>
                {t(props.description || '')}
            </Typography>
        </Paper>
    )
}

interface ExperienceItem {
    key: string,
    content: ReactNode,
    oppositeContent: ReactNode,
}

export const WorkExperienceSection = () => {
    const theme = useTheme();
    const {t} = useTranslation();

    const languageState = useSelector((state: RootState) => state.language)


    const experience: ExperienceItem[] = ['qiwi', 'premium', 'luxoft'].map((item: string) => {
        return {
            key: item,
            content: <ExperienceItemContent
                title={`experience.content.places.${item}.title`}
                dateStart={`experience.content.places.${item}.dateStart`}
                dateEnd={`experience.content.places.${item}.dateEnd`}/>,
            oppositeContent: <ExperienceItemOppositeContent
                title={`experience.content.places.${item}.role`}
                description={`experience.content.places.${item}.description`}/>,
        }
    })

    const getDates = () => {
        moment.locale(languageState?.current || Language.EN)
        return moment.duration(
            moment().diff(
                moment("09.2019", "mm.YYYY"),
                "month"
            ), 'month')
            .humanize()
    }

    return (
        <Box sx={{
            margin: '16px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: '100vh'
        }}>
            <Typography variant={'h2'}>{t('experience.title')}</Typography>
            <Typography pb={'32px'} color={theme.palette.text.secondary} fontWeight={300}
                        variant={'h3'}>{getDates()}</Typography>
            <Box>
                <Timeline sx={{display: 'flex', justifyContent: 'space-around', alignItems: 'center'}}>
                    {experience.map(item => (
                        <TimelineItem key={item.key} sx={{width: '100%'}}>
                            <TimelineContent>{item.content}</TimelineContent>
                            <TimelineSeparator>
                                <TimelineDot/>
                                <TimelineConnector/>
                            </TimelineSeparator>
                            <TimelineOppositeContent
                                color="text.secondary"
                            >
                                {item.oppositeContent}
                            </TimelineOppositeContent>
                        </TimelineItem>
                    ))}
                </Timeline>
            </Box>

        </Box>
    )
}
