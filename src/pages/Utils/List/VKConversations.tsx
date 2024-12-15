import { Icon56ErrorTriangleOutline } from "@vkontakte/icons";
import { Button, Group, Placeholder } from "@vkontakte/vkui";

const VKConversations = (): JSX.Element => {
  return (
    <Group>
      <Placeholder
        icon={<Icon56ErrorTriangleOutline />}
        title="Доступно только ВКонтакте"
        action={
          <Button
            size="m"
            onClick={() => {
              const element = document.createElement("a");
              element.href = "https://vk.com/app51408389_675114166";
              element.target = "_blank";
              element.click();
            }}
          >
            Открыть ВКонтакте
          </Button>
        }
      />
    </Group>
  );
};

export default VKConversations;
