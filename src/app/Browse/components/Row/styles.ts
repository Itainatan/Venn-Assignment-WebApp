import { css } from "@emotion/react";

export const cell = (index: number) => css`
  background: ${index % 2 !== 0 ? "#F5F0FF" : "#fff"};
  color: var(--neutral-neutral-black, #05111a);
  font-family: Nunito Sans;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 115%;
  letter-spacing: 0.14px;
`;
