import { useEffect, useState } from "react";
import styled from "styled-components";
import { Color } from "./ui";

export const App = () => {
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  useEffect(() => {
    document.documentElement.setAttribute("theme", theme);
  }, [theme]);

  const handleTheme = () => {
    setTheme((theme) => (theme === "dark" ? "light" : "dark"));
  };

  return (
    <StyledApp>
      <Title>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero neque
        quia reprehenderit officia molestias, dolores excepturi minima adipisci
        quo ullam nisi eos rerum recusandae accusantium iste accusamus
        architecto fugiat alias?
      </Title>
      <button onClick={handleTheme}>Theme</button>
    </StyledApp>
  );
};

const StyledApp = styled.div`
  background: ${Color.Primary_BG};
`;
const Title = styled.h1`
  color: ${Color.Primary_TX};
`;
