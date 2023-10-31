import { css } from "@emotion/react";

export const container = css`
  display: flex;
  justify-content: center;
`;

export const button = (isFirst: boolean) => css`
  width: 204px;
  padding: 12px 24px;
  align-items: center;
  gap: 8px;
  border-radius: ${isFirst ? "8px 0px 0px 8px" : "0px 8px 8px 0px"};
  background: var(--Iris-10, #efeffd);
  color: #4310ae;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: 0.64px;
  text-transform: uppercase;
`;

export const selectedButton = css`
  background: #4310ae;
  color: var(--White, #fff);
  box-shadow: 0px 6px 15px 0px rgba(67, 16, 174, 0.12),
    0px -1px 0px 0px rgba(14, 14, 44, 0.4) inset;
`;
