import { useEffect, useState } from "react";

import utils from "@rus-anonym/web-utils";
import { Icon28CopyOutline, Icon28ReplayOutline } from "@vkontakte/icons";
import { copyTextToClipboard } from "@vkontakte/vkjs";
import {
  ButtonGroup,
  Checkbox,
  FormItem,
  FormLayoutGroup,
  Group,
  IconButton,
  Input,
  Snackbar,
} from "@vkontakte/vkui";

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
    symbols: true,
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
        <Snackbar onClose={(): void => setSnackbar(null)}>
          Password copied to clipboard
        </Snackbar>
      );
    });
  };

  useEffect(generate, [config]);

  return (
    <Group>
      <form>
        <FormLayoutGroup mode="horizontal">
          <FormItem top="Length">
            <Input
              type="number"
              name="length"
              value={Number(config.length)}
              min="0"
              onChange={(value) => {
                setConfig({
                  ...config,
                  length: Number(value.target.value),
                });
              }}
            />
          </FormItem>
          <FormItem>
            <Checkbox
              checked={config.uppercase}
              onChange={(event) => {
                setConfig({
                  ...config,
                  uppercase: event.target.checked,
                });
              }}
            >
              Uppercase
            </Checkbox>
          </FormItem>
          <FormItem>
            <Checkbox
              checked={config.lowercase}
              onChange={(event) => {
                setConfig({
                  ...config,
                  lowercase: event.target.checked,
                });
              }}
            >
              Lowercase
            </Checkbox>
          </FormItem>
          <FormItem>
            <Checkbox
              checked={config.numbers}
              onChange={(event) => {
                setConfig({
                  ...config,
                  numbers: event.target.checked,
                });
              }}
            >
              Numbers
            </Checkbox>
          </FormItem>
          <FormItem>
            <Checkbox
              checked={config.symbols}
              onChange={(event) => {
                setConfig({
                  ...config,
                  symbols: event.target.checked,
                });
              }}
            >
              Symbols
            </Checkbox>
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
      </form>
      {snackbar !== null && snackbar}
    </Group>
  );
};

export default PasswordGenerator;
