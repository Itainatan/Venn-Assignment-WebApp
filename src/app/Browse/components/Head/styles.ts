import { css } from "@emotion/react";

export const cell = css`
  background: #200062;
  color: var(--cr-neutral-white, #fff);
  font-family: Roboto;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 115%;
  letter-spacing: 0.14px;

  .MuiButtonBase-root {
    color: var(--cr-neutral-white, #fff) !important;
  }

  .MuiTableSortLabel-icon {
    color: var(--cr-neutral-white, #fff) !important;
  }
`;
