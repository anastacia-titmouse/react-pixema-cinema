import { TabsStyled } from "./styles";
import { Tab } from "./Tab";

export interface ITab {
  label: string;
  id: number;
}

export interface ITabsProps {
  tabs: ITab[];
  onChange: (id: number) => void;
  value: number;
}

export const Tabs = ({ tabs, onChange, value }: ITabsProps) => {
  const tabClickHandler = (clickedTab: ITab) => {
    onChange(clickedTab.id);
  };

  return (
    <TabsStyled>
      {tabs.map((tab, index) => {
        return (
          <Tab
            key={index}
            onClick={() => {
              tabClickHandler(tab);
            }}
            selected={tab.id === value}
            tab={tab}
          />
        );
      })}
    </TabsStyled>
  );
};
