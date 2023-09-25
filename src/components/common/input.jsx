/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const CommonStyle = {
  underlineInputWrap: css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #fff;
    margin-bottom: 10px;
    position: relative;
    box-sizing: border-box;
  `,
  underlineInput: css`
    flex: 1;
    height: 40px;
    border: none;
    border-radius: 0px;
    color: #333;
    font-size: 18px;
    font-weight: bold;
    background: #fff;
    transition: 1s ease all;
    margin: 0px;
    &:focus {
      outline: none;
      :first-of-type + div {
        background: linear-gradient(#3d6afe, #3d6afe) bottom / 100% 100% no-repeat #ccc;
      }
    }
  `,
  inputUnderline: css`
    position: absolute;
    background: linear-gradient(#3d6afe, #3d6afe) bottom / 0% 100% no-repeat #ccc;
    height: 2px;
    width: 100%;
    transition: 0.4s ease all;
    bottom: 0px;
    margin: 0px;
    padding: 0px;
  `,
};

export const CommonInput = ({ placeholder, type, onChangeEvent }) => {
  const inputChangeHandler = (e) => {
    e.preventDefault();
    onChangeEvent(e.target.value)
  }
  
  return (
    <div css={CommonStyle.underlineInputWrap}>
      <input css={CommonStyle.underlineInput} type={type} placeholder={placeholder} onChange={inputChangeHandler} />
      <div css={CommonStyle.inputUnderline}></div>
    </div>
  );
};
