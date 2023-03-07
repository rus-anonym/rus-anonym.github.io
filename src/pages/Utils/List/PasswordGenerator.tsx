import React, { useEffect, useState } from "react";

import { Icon28CopyOutline, Icon28ReplayOutline } from "@vkontakte/icons";
import { copyTextToClipboard } from "@vkontakte/vkjs";
import {
    ButtonGroup,
    Checkbox,
    FormItem,
    FormLayout,
    FormLayoutGroup,
    Group,
    IconButton,
    Input,
    Snackbar
} from "@vkontakte/vkui";
import utils from "@rus-anonym/web-utils";

interface IPasswordConfig {
    uppercase: boolean;
    lowercase: boolean;
    numbers: boolean;
    symbols: boolean;
    length: number;
}

const PasswordGenerator = () => {
    const [snackbar, setSnackbar] = useState<JSX.Element | null>(null);
    const [password, setPassword] = useState("");
    const [config, setConfig] = useState<IPasswordConfig>({
        length: 12,
        uppercase: true,
        lowercase: true,
        numbers: true,
        symbols: true
    });

    const generate = () => {
        let password = "";

        const letters = "abcdefghijklmnopqrstuvwxyz".split("");
        const symbols = "!@#$%^&*(){}".split("");

        for (let i = 0; i < config.length; ++i) {
            if (config.uppercase) {
                const letter = utils.array.random(letters);
                password += letter.toUpperCase();
            }

            if (config.lowercase) {
                const letter = utils.array.random(letters);
                password += letter;
            }

            if (config.numbers) {
                password += utils.number.getRandomIntInclusive(0, 10);
            }

            if (config.symbols) {
                password += utils.array.random(symbols);
            }
        }

        const pass = utils.array.shuffle(password.split("")).join("");

        setPassword(pass.slice(0, config.length));
    };

    const copy = () => {
        void copyTextToClipboard(password).then(() => {
            setSnackbar(
                <Snackbar
                    onClose={(): void =>
                        setSnackbar(null)
                    }
                >
                    Password copied to clipboard
                </Snackbar>
            );
        });
    };

    useEffect(generate, [config]);

    return (
        <Group>
            <FormLayout>
                <FormLayoutGroup mode="horizontal">
                    <FormItem
                        top="Length"
                    >
                        <Input 
                            type="number" 
                            name="length" 
                            value={config.length}
                            min="0"
                            onChange={(value) => {
                                setConfig({
                                    ...config,
                                    length: Number(value.target.value)
                                });
                            }} />
                    </FormItem>
                    <FormItem>
                        <Checkbox checked={config.uppercase}>Uppercase</Checkbox>
                    </FormItem>
                    <FormItem>
                        <Checkbox checked={config.lowercase}>Lowercase</Checkbox>
                    </FormItem>
                    <FormItem>
                        <Checkbox checked={config.numbers}>Numbers</Checkbox>
                    </FormItem>
                    <FormItem>
                        <Checkbox checked={config.symbols}>Symbols</Checkbox>
                    </FormItem>
                </FormLayoutGroup>
                <FormItem>
                    <Input
                        value={password}
                        type="text"
                        after={
                            <ButtonGroup mode="horizontal" gap="s" stretched>
                                <IconButton onClick={copy}>
                                    <Icon28CopyOutline />
                                </IconButton>
                                <IconButton onClick={generate}>
                                    <Icon28ReplayOutline />
                                </IconButton>
                            </ButtonGroup>
                        }
                    />
                </FormItem>
            </FormLayout>
            {snackbar !== null && snackbar}
        </Group>
    );
};

export default PasswordGenerator;
