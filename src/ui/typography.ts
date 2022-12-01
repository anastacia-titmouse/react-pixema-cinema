import { css } from "styled-components";
import { Media } from ".";

export const H1 = css`
  font-weight: 600;
  font-size: 40px;
  line-height: 60px;
  ${Media.Mobile} {
    font-size: 32px;
    line-height: 48px;
  }
  ${Media.Tablet} {
    font-size: 28px;
    line-height: 42px;
  }
`;
export const H2 = css`
  font-weight: 600;
  font-size: 24px;
  line-height: 36px;
  ${Media.Mobile} {
    font-size: 20px;
  }
`;
export const H3 = css`
  font-weight: 600;
  font-size: 20px;
  line-height: 32px;
  ${Media.Mobile} {
    font-size: 18px;
    line-height: 28px;
  }
`;
export const S1 = css`
  font-weight: 600;
  font-size: 18px;
  line-height: 24px;
`;
export const S1_2 = css`
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
`;
export const S1_3 = css`
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
`;
export const B = css`
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
`;
