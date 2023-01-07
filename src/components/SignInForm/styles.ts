import { Link } from "react-router-dom";
import styled from "styled-components";
import { Color, H2, Media } from "ui";

export const SignInFormStyled = styled.form`
  display: grid;
  grid-row-gap: 40px;
  width: 574px;
  margin: 0 auto;
  padding: 40px;
  border-radius: 10px;
  background: ${Color.Primary_FORM_BG};

  ${Media.Tablet} {
    width: 80%;
  }

  ${Media.Mobile_S} {
    width: 80%;
  }
`;

export const Title = styled.h2`
  align-self: center;
  color: ${Color.Label_Text};
  ${H2};
`;

export const Text = styled.div`
  text-align: center;
  color: ${Color.Secondary};
`;

export const InputSection = styled.section`
  display: grid;
  grid-row-gap: 24px;
`;
