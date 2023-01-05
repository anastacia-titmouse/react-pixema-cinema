import styled from "styled-components";
import { Color, H2 } from "ui";
import { INPUT } from "ui/typography";

export const SettingsFormStyled = styled.form`
  padding: 0 308px 0 0;
  color: ${Color.Primary_TEXT};
`;

export const Header2 = styled.h2`
  margin: 0 0 16px;
  ${H2}
`;

export const SettingsFieldset = styled.fieldset`
  background-color: ${Color.Dark};
  border: none;
  border-radius: 10px;
  padding: 40px;
  margin: 0 0 40px;
`;

export const ThemeSettingFieldset = styled(SettingsFieldset)`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const InputGroup = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 40px;
`;

export const Caption = styled.div`
  color: ${Color.Light};
  ${INPUT}
`;

export const ButtonGroup = styled.div`
  display: flex;
  margin: 48px 0 0;
  justify-content: flex-end;
  gap: 40px;

  & > * {
    min-width: 266px;
  }
`;
