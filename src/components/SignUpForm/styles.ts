import styled from "styled-components";
import { Color, H2, Media, S1_4 } from "ui";

export const SignUpFormStyled = styled.form`
  display: grid;
  grid-row-gap: 40px;
  width: 574px;
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

export const Title = styled.h2`
  ${H2};
  align-self: center;
  color: ${Color.Label_Text};
`;

export const Text = styled.p`
  ${S1_4};
  text-align: center;
  color: ${Color.Secondary};
`;

export const InputSection = styled.section`
  display: grid;
  grid-row-gap: 24px;
`;

export const Error = styled.span`
  margin-top: 10px;
  ${S1_4};
  color: ${Color.Errors};
`;
