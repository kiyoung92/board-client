/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { CommonInput } from '../components/common/input';
import ReactModal from 'react-modal';

const SignInStyle = {
  wrap: css`
    display: flex;
    width: 100%;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    height: 100%;
    transition: 0.5s all ease;
  `,
  contentsWrap: css`
    width: 500px;
    height: 500px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    box-sizing: border-box;
    position: relative;
  `,
  closeBtn: css`
    position: absolute;
    right: 20px;
    top: 20px;
    width: 20px;
    height: 20px;
  `,
};

export const SignIn = ({ isOpen }) => {
  return (
    <ReactModal isOpen={isOpen} css={SignInStyle.wrap} closeTimeoutMS={2000}>
      <div css={SignInStyle.contentsWrap}>
        {/* <div css={SignInStyle.closeBtn} onClick={signInModalClose}>
          X
        </div> */}
        <CommonInput placeholder='아이디를 입력해 주세요.' type='text' />
        <CommonInput placeholder='패스워드를 입력해 주세요.' type='password' />
      </div>
    </ReactModal>
  );
};
