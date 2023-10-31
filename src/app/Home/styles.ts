import { css } from "@emotion/react";

export const container = css`
  color: #000;
  font-family: Roboto, sans-serif;
  width: 100vw;
  height: 100vh;
  display: flex;
  direction: ltr;
  overflow: auto;
  flex-direction: column;
`;

export const card = css`
  display: flex;
  flex-direction: column;
  position: relative;
  bottom: 5vh;
  row-gap: 48px;
`;

export const main = css`
  padding: 0 20%;
`;
