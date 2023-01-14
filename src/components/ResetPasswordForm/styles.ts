import styled from "styled-components";
import { Color, H2, INPUT, Media } from "ui";

export const ResetPasswordFormStyled = styled.form`
  display: flex;
  flex-direction: column;
  grid-row-gap: 40px;
  width: 574px;
  margin: 0 auto;
  padding: 40px;
  border-radius: 10px;
  background: ${Color.Primary_FORM_BG};

  ${Media.Tablet} {
    width: 80%;
  }

  ${Media.Mobile} {
    width: 80%;
  }
`;

export const SuccessfulResetText = styled.p`
  color: ${Color.White};
  ${INPUT}
`;

export const Title = styled.h2`
  ${H2}
  color: ${Color.Label_Text};
`;
