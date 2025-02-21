import { Group, Placeholder, SimpleCell } from "@vkontakte/vkui";
import session from "../../../TS/store/session";

interface IResource {
  title: string;
  url: string;
}

const RESOURCES: IResource[] = [
  {
    title: "VK Limits",
    url: "https://severecloud.github.io/vk-limits",
  },
  {
    title: "Telegram limits",
    url: `https://limits.tginfo.me/${session.language}`,
  },
  {
    title: "HateTG",
    url: "https://hate.tg/",
  },
  {
    title: "MAS",
    url: "https://massgrave.dev/",
  }
] as const;

const UsefulResources = () => {
  const redirect = (url: string) => {
    const element = document.createElement("a");
    element.href = url;
    element.target = "_blank";
    element.click();
  };

  return (
    <Group>
      <Placeholder title="Useful resources" noPadding>
        List of useful resources
      </Placeholder>
      {RESOURCES.map((x) => {
        return (
          <SimpleCell chevron="auto" onClick={() => redirect(x.url)}>
            {x.title}
          </SimpleCell>
        );
      })}
    </Group>
  );
};

export default UsefulResources;
