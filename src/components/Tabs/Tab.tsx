import { TabStyled } from "./styles";
import { ITab } from "./Tabs";

export const Tab = ({
  tab,
  selected,
  onClick,
}: {
  tab: ITab;
  selected: boolean;
  onClick: () => void;
}) => {
  return (
    <TabStyled className={selected ? "active" : ""} onClick={onClick}>
      {tab.label}
    </TabStyled>
  );
};
