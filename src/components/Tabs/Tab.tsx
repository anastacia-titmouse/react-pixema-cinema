import { IInnerTab } from "./Tabs";
import { TabStyled } from "./styles";

export const Tab = ({ tab, onClick }: { tab: IInnerTab; onClick: () => void }) => {
  return (
    <TabStyled className={tab.isSelected ? "active" : ""} onClick={onClick}>
      {tab.label}
    </TabStyled>
  );
};
