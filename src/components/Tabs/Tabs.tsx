import { TabsStyled } from "./styles";
import { useState } from "react";
import { Tab } from "./Tab";

export interface ITab {
  label: string;
  id: number;
  isDefaultValue?: boolean;
}

export interface IInnerTab {
  label: string;
  id: number;
  isSelected: boolean;
}

export interface ITabsProps {
  tabs: ITab[];
  onChange: (id: number) => void;
}

const transformTabsToInnerTabs = (tabs: ITab[]): IInnerTab[] => {
  const innerTabs = tabs.map((tab) => {
    const { label, id, isDefaultValue } = tab;
    return { label, id, isSelected: !!isDefaultValue };
  });

  if (innerTabs && !innerTabs.some((tab) => tab.isSelected)) {
    innerTabs[0].isSelected = true;
  }

  return innerTabs;
};

export const Tabs = ({ tabs, onChange }: ITabsProps) => {
  const [innerTabs, setInnerTabs] = useState(transformTabsToInnerTabs(tabs));

  const tabClickHandler = (clickedTab: IInnerTab, clickedIndex: number) => {
    setInnerTabs(innerTabs.map((tab, index) => ({ ...tab, isSelected: clickedIndex === index })));
    onChange(clickedTab.id);
  };

  return (
    <TabsStyled>
      {innerTabs.map((tab, index) => {
        return (
          <Tab
            key={index}
            onClick={() => {
              tabClickHandler(tab, index);
            }}
            tab={tab}
          />
        );
      })}
    </TabsStyled>
  );
};
