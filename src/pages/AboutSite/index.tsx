import { Octokit } from "@octokit/rest";
import { useEffect, useState } from "react";

import { Avatar, Cell, Group, Link, SimpleCell } from "@vkontakte/vkui";
import { VscIssues, VscRepoForked, VscStarFull } from "react-icons/vsc";

import { Icon28LinkOutline } from "@vkontakte/icons";

import session from "../../TS/store/session";

import { useTranslation } from "react-i18next";
import LogoGitHubDark from "../../PNG/socials/GitHub-dark.png";
import LogoGitHubLight from "../../PNG/socials/GitHub-light.png";

interface IRepositoryStat {
  stars: number;
  issues: number;
  forks: number;
}

const getRepositoryStat = async (): Promise<IRepositoryStat> => {
  const octokit = new Octokit();
  const response = await octokit.repos.get({
    owner: "rus-anonym",
    repo: "rus-anonym.github.io",
  });

  return {
    stars: response.data.stargazers_count,
    issues: response.data.open_issues_count,
    forks: response.data.forks,
  };
};

const SiteInfoView = (): JSX.Element => {
  const [stats, setStats] = useState<IRepositoryStat | null>(null);

  const { t } = useTranslation("translation", {
    keyPrefix: "pages.aboutSite",
  });

  useEffect(() => {
    void getRepositoryStat().then(setStats);
  }, []);

  return (
    <Group>
      {stats && (
        <div
          style={{
            display: "flex",
            flexDirection: "row",
          }}
        >
          <Cell
            after={<VscStarFull size={24} />}
            hasActive={false}
            hasHover={false}
          >
            {stats.stars}
          </Cell>
          <Cell
            after={
              <VscIssues
                size={24}
                style={{
                  marginLeft: "5px",
                  marginTop: "5px",
                }}
              />
            }
            disabled
          >
            {stats.issues}
          </Cell>
          <Cell
            after={<VscRepoForked size={24} />}
            hasActive={false}
            hasHover={false}
          >
            {stats.forks}
          </Cell>
        </div>
      )}
      <Link
        target="_blank"
        href="https://github.com/rus-anonym/rus-anonym.github.io"
      >
        <SimpleCell
          before={
            <Avatar
              size={36}
              src={session.theme === "dark" ? LogoGitHubLight : LogoGitHubDark}
            />
          }
          after={<Icon28LinkOutline />}
        >
          {t("github")}
        </SimpleCell>
      </Link>
    </Group>
  );
};

export default SiteInfoView;
