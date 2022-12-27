import { TabsStyled } from "./styles";
import { useState } from "react";
import { Tab } from "./Tab";

export interface ITab<TVal = any> {
  label: string;
  value: TVal;
  isDefaultValue?: boolean;
}

export interface IInnerTab<TVal = any> {
  label: string;
  value: TVal;
  isSelected: boolean;
}

export interface ITabsProps<TVal> {
  tabs: Array<ITab<TVal>>;
  onChange: (value: TVal) => void;
}

const transformTabsToInnerTabs = <TVal extends unknown>(
  tabs: Array<ITab<TVal>>,
): Array<IInnerTab<TVal>> => {
  const innerTabs = tabs.map((tab) => {
    const { label, value, isDefaultValue } = tab;
    return { label, value, isSelected: !!isDefaultValue };
  });

  if (innerTabs && !innerTabs.some((tab) => tab.isSelected)) {
    innerTabs[0].isSelected = true;
  }

  return innerTabs;
};

export const Tabs = <TVal extends unknown = any>({ tabs, onChange }: ITabsProps<TVal>) => {
  const [innerTabs, setInnerTabs] = useState(transformTabsToInnerTabs(tabs));

  const tabClickHandler = (clickedTab: IInnerTab<TVal>, clickedIndex: number) => {
    setInnerTabs(innerTabs.map((tab, index) => ({ ...tab, isSelected: clickedIndex === index })));
    onChange(clickedTab.value);
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
