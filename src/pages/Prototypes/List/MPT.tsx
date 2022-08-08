import React, { useEffect, useState } from "react";
import axios from "axios";
import {
    Group,
    List,
    Placeholder,
    RichCell,
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

interface IGroup {
    name: string;
    specialty: string;
}

interface ILesson {
    num: number;
    name: string;
    teacher: string;
}

interface ISchedule {
    week: IWeek;
    group: IGroup;
    schedule: {
        place: string;
        lessons: ILesson[];
        hasReplacements: boolean;
    };
}

const Lesson = ({ lesson }: { lesson: ILesson }): JSX.Element => {
    return (
        <RichCell
            disabled
            multiline
            text={lesson.teacher}
            after="08:30:00 - 10:00:00"
        >
            {lesson.num}. {lesson.name}
        </RichCell>
    );
};

const MptGroup = ({ group }: { group: IGroup }): JSX.Element => {
    return (
        <RichCell disabled text={group.specialty} subhead="Группа">
            {group.name}
        </RichCell>
    );
};

const Week = ({ week }: { week: IWeek }): JSX.Element => {
    return (
        <RichCell disabled text={week.value} subhead="Неделя">
            {week.date}
        </RichCell>
    );
};

const Schedule = (): JSX.Element => {
    const [schedule, setSchedule] = useState<ISchedule | null>(null);

    useEffect(() => {
        void (async (): Promise<void> => {
            const schedule = await axios.get(
                "https://api.mpt-assistant.space/schedule.get",
                {
                    params: { group: "БИ50-3-19" },
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
                <MptGroup group={schedule.group} />
                <Week week={schedule.week} />
                <RichCell disabled subhead="Место">
                    {schedule.schedule.place}
                </RichCell>
            </div>
            <Group>
                <List>
                    {schedule.schedule.lessons.map((x) => (
                        <Lesson lesson={x} />
                    ))}
                </List>
            </Group>
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
