import React, { useEffect, useState } from "react";
import axios from "axios";
import {
    Footer,
    Group,
    List,
    Placeholder,
    RichCell,
    Separator,
    Spinner,
    Tabs,
    TabsItem,
} from "@vkontakte/vkui";

interface IWeek {
    date: string;
    value: string;
    isNumerator: boolean;
    isDenominator: boolean;
}

interface ILesson {
    num: number;
    name: string;
    teacher: string;
}

interface ISchedule {
    week: IWeek;
    place: string;
    lessons: ILesson[];
}

const Lesson = ({ lesson }: { lesson: ILesson }): JSX.Element => {
    return (
        <RichCell
            hasActive={false}
            hasHover={false}
            multiline
            text={lesson.teacher}
            before={`${lesson.num}.`}
            after="08:30:00 - 10:00:00"
        >
            {lesson.name}
        </RichCell>
    );
};

const Week = ({ week }: { week: IWeek }): JSX.Element => {
    return (
        <RichCell hasActive={false}
            hasHover={false} text={week.value} subhead="Неделя">
            {week.date}
        </RichCell>
    );
};

const Schedule = (): JSX.Element => {
    const [schedule, setSchedule] = useState<ISchedule | null>(null);

    useEffect(() => {
        void (async (): Promise<void> => {
            const schedule = await axios.get(
                "https://api.mpt-assistant.ru/schedule.get",
                {
                    params: {
                        group: "БИ50-3-19" 
                    },
                }
            );
            setSchedule((schedule.data as { response: ISchedule }).response);
        })();
    }, []);

    if (schedule === null) {
        return (
            <Group>
                <Placeholder>
                    <Spinner size="large" />
                </Placeholder>
            </Group>
        );
    }

    return (
        <>
            <div
                style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-around",
                }}
            >
                <Week week={schedule.week} />
                <RichCell hasActive={false}
                    hasHover={false} subhead="Место">
                    {schedule.place}
                </RichCell>
            </div>
            <Group>
                <List>
                    {schedule.lessons.map((lesson, index) => (
                        <>
                            <Lesson lesson={lesson} />
                            {index !== schedule.lessons.length - 1 && (
                                <Separator />
                            )}
                        </>
                    ))}
                </List>
            </Group>
            <Footer>{schedule.lessons.length} пары</Footer>
        </>
    );
};

const MPT = (): JSX.Element => {
    const [activeTab, setActiveTab] = useState("schedule");

    return (
        <Group>
            <Tabs>
                <TabsItem
                    selected={activeTab === "schedule"}
                    onClick={(): void => setActiveTab("schedule")}
                >
                    Schedule
                </TabsItem>
            </Tabs>
            {activeTab === "schedule" && <Schedule />}
        </Group>
    );
};

export default MPT;
