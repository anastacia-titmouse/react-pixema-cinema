import styled from "styled-components";
import { Color, H2, Media } from "ui";
import { INPUT } from "ui/typography";

export const SettingsFormStyled = styled.form`
  display: flex;
  flex-direction: column;
  gap: 40px;
  width: 75%;
  color: ${Color.Primary_TEXT};

  ${Media.Mobile} {
    gap: 32px;
  }

  ${Media.Tablet} {
    width: 100%;
  }

  ${Media.Desktop_S} {
    width: 100%;
  }

  ${Media.Desktop_M} {
    width: 100%;
  }
`;

export const Header = styled.h2`
  margin: 0 0 16px;
  ${H2}
`;

export const SettingsFieldset = styled.fieldset`
  background-color: ${Color.Primary_FORM_BG};
  border: none;
  border-radius: 10px;
  padding: 40px;

  ${Media.Mobile} {
    padding: 24px;
  }
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

  ${Media.Mobile} {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
`;

export const Caption = styled.div`
  color: ${Color.Light};
  ${INPUT}
`;

export const ButtonGroup = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 40px;

  & > * {
    min-width: 266px;

    ${Media.Tablet} {
      width: 100%;
    }
  }

  ${Media.Mobile} {
    flex-direction: column;
    gap: 15px;
  }

  ${Media.Tablet} {
    justify-content: stretch;
    gap: 33px;
  }
`;
