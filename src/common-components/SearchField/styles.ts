import { css } from "@emotion/react";

export const container = css`
  display: flex;
  justify-content: center;
  height: 107px;
  align-items: center;
  column-gap: 20px;
  width: 100%;
  padding: 0 20px;
`;

export const input = css`
  border-radius: 4px;
  border: 1px solid;
  width: 481px;
  height: 46px;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;

  .MuiOutlinedInput-input {
    height: 20px;
    padding: 13px;

    &::placeholder {
      color: #a1a1a1;
    }
   
  }
`;

export const submitButton = css`
  width: 100px;
  padding: 12px 24px;
  border-radius: 8px;
  border: 1px solid;
  gap: 8px;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-transform: uppercase;
`;
