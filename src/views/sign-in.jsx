/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { CommonInput } from '../components/common/input';
import ReactModal from 'react-modal';
import { useState } from 'react';
import axios from 'axios';

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

export const SignIn = ({ isOpen, modalHandler }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signInHandler = async (e) => {
    e.preventDefault();
    const response = await axios.post('http://localhost:3000/auth/login', {
      email: email,
      password: password,
    }, { withCredentials: true }).then(res => {
      return res.data;
    }).catch(err => {
      console.log(err);
    })

    modalHandler(false, e);
    console.log(response);
  }
  
  return (
    <ReactModal isOpen={isOpen} css={SignInStyle.wrap} closeTimeoutMS={200}>
      <form css={SignInStyle.contentsWrap} onSubmit={signInHandler}>
        <div css={SignInStyle.closeBtn} onClick={(e) => {modalHandler(false, e)}}>
          X
        </div>
        <CommonInput placeholder='아이디를 입력해 주세요.' type='text' onChangeEvent={setEmail}/>
        <CommonInput placeholder='패스워드를 입력해 주세요.' type='password' onChangeEvent={setPassword}/>
        <button>로그인</button>
      </form>
    </ReactModal>
  );
};
