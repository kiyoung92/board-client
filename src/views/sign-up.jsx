/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { CommonInput } from '../components/common/input';
import ReactModal from 'react-modal';

const SignUpStyle = {
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
  `,
};

export const SignUp = ({ isOpen }) => {
  return (
    <ReactModal isOpen={isOpen} css={SignUpStyle.wrap} closeTimeoutMS={2000}>
      <div css={SignUpStyle.contentsWrap}>
        <CommonInput placeholder='아이디를 입력해 주세요.' type='text' />
        <CommonInput placeholder='패스워드를 입력해 주세요.' type='password' />
        <CommonInput placeholder='이름을 입력해 주세요.' type='text' />
      </div>
    </ReactModal>
  );
};
