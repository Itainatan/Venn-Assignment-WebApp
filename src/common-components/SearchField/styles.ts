import { css } from "@emotion/react";

export const container = css`
  display: flex;
  justify-content: center;
  height: 107px;
  align-items: center;
  column-gap: 20px;
  background: #efeff4;
  width: 100%;
`;

export const input = css`
  border-radius: 4px;
  border: 1px solid var(--components-input-border, #ddd);
  background: var(--White, #fff);
  width: 481px;
  height: 46px;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0.25px;

  .MuiOutlinedInput-input {
    height: 20px;
    padding: 13px;
    color: #4310ae;

    &::placeholder {
      color: #a1a1a1;
    }
   
  }
`;

export const submitButton = css`
  width: 100px;
  padding: 12px 24px;
  border-radius: 8px;
  border: 1px solid #000;
  gap: 8px;
  background: #4310ae;
  box-shadow: 0px 6px 15px 0px rgba(67, 16, 174, 0.12),
    0px -1px 0px 0px rgba(14, 14, 44, 0.4) inset;
  color: var(--White, #fff);
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 0.64px;
  text-transform: uppercase;
`;
