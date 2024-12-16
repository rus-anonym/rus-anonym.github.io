import { Avatar, Cell, Title } from "@vkontakte/vkui";
import { useEffect, useMemo, useState } from "react";
import { animated, useSpring } from "react-spring";

import SelfAvatar from "../../PNG/about/avatar.png";

const titles = ["RusAnonym", "RusCybersec"] as const;

const AnimatedText = ({ text }: { text: string }) => {
  const [letters, setLetters] = useState<string[]>([]);

  useEffect(() => {
    setLetters(text.split(""));
  }, [text]);

  const AnimatedLetter = ({
    letter,
    index,
  }: {
    letter: string;
    index: number;
  }): JSX.Element => {
    const props = useSpring({
      opacity: 1,
      from: { opacity: 0 },
      delay: Math.random() * 500,
    });

    return (
      <animated.span key={index} style={props}>
        {letter}
      </animated.span>
    );
  };

  return (
    <div style={{ display: "flex" }}>
      {letters.map((letter, index) => {
        return <AnimatedLetter letter={letter} key={index} index={index} />;
      })}
    </div>
  );
};

const RusAnonym = (): JSX.Element => {
  const [title, setTitle] = useState<string>("RusAnonym");
  const rendered = useMemo<JSX.Element>(() => {
    return <AnimatedText text={title} />;
  }, [title]);

  useEffect(() => {
    let currentTitleIndex = 0;
    const interval = setInterval(() => {
      currentTitleIndex =
        currentTitleIndex + 1 >= titles.length ? 0 : currentTitleIndex + 1;
      setTitle(titles[currentTitleIndex]);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Cell before={<Avatar src={SelfAvatar} size={36} />}>
      <Title level="3">{rendered}</Title>
    </Cell>
  );
};

export default RusAnonym;
