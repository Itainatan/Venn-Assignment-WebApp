import { css } from "@emotion/react";

export const container = css`
  display: flex;
  margin-top: 49px;
  margin-bottom: 49px;
  width: 100%;
  column-gap: 50px;
`;

export const image = css`
  height: 262px;
  width: 20%;
  object-fit: contain;
  border-radius: 20px;
  border: 5px solid #4310ae;
`;

export const data = css`
  border-radius: 10.256px;
  border: 1px solid rgba(237, 237, 237, 0.49);
  background: linear-gradient(
    241deg,
    #f9f6ff 4.4%,
    rgba(255, 255, 255, 0.53) 119.94%
  );
  box-shadow: -10px 10px 20px 0px rgba(67, 16, 174, 0.12);
  backdrop-filter: blur(13px);
  width: 80%;
  padding: 35px 50px;
  overflow: auto;
`;

export const mainData = css`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(30%, 1fr));
  gap: 33%;
`;

export const keyValue = css`
  gap: 12px;
  display: flex;
  flex-direction: column;
`;

export const header = css`
  color: #4310ae;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 0.56px;
  text-transform: uppercase;
  margin-bottom: 49px;
`;

export const key = css`
  color: #000;
  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const value = css`
  color: #200062;
  font-family: Roboto;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;
