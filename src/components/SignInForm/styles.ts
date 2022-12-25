import styled from "styled-components";
import { Link } from "react-router-dom";
import { Color, Media, typography } from "../../ui";

export const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
  width: 60%;
  gap: 40px;
  padding: 60px;
  border-radius: 10px;
  color: ${Color.White};
  ${Media.Mobile} {
    padding: 25px;
    gap: 30px;
  }
`;

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
  ${Media.Mobile} {
    gap: 20px;
  }
`;

export const Input = styled.input`
  padding: 15px;
  background-color: ${Color.Secondary};
  border: 2px solid transparent;
  border-radius: 10px;
  color: ${Color.Primary_TEXT};
  &::placeholder {
    color: ${Color.White};
  }
  &:hover {
    cursor: pointer;
  }
  &:disabled {
    background-color: ${Color.Secondary};
    &::placeholder {
      color: ${Color.Light};
    }
  }
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: 10px;
  ${typography.S1_2};
  color: ${Color.Primary_TEXT};
`;

export const Title = styled.h2`
  padding: 10px 0;
  ${typography.H2};
  color: ${Color.Primary_TEXT};
`;

export const CustomLink = styled(Link)`
  ${typography.B};
  color: ${Color.Secondary};
  text-decoration: none;
`;

export const Error = styled.span`
  ${typography.B};
  color: ${Color.Errors};
`;

export const Refer = styled.a`
  ${typography.B};
`;
