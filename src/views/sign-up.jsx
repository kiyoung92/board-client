/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { CommonInput } from '../components/common/input';
import ReactModal from 'react-modal';
import { useState } from 'react';
import axios from 'axios';

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

export const SignUp = ({ isOpen, modalHandler }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const signUpService = async (e) => {
    e.preventDefault();
    const response = await axios.post('http://localhost:3000/user', {
      email: email,
      password: password,
      name: name,
    }, { withCredentials: true }).then(res => {
      return res.data;
    }).catch(err => {
      console.log(err);
    })
    modalHandler(false, e);
    console.log(response);
  }

  return (
    <ReactModal isOpen={isOpen} css={SignUpStyle.wrap} closeTimeoutMS={200}>
      <form css={SignUpStyle.contentsWrap} onSubmit={signUpService}>
        <div css={SignUpStyle.closeBtn} onClick={(e) => {modalHandler(false, e)}}>
          X
        </div>
        <CommonInput placeholder='아이디를 입력해 주세요.' type='text' onChangeEvent={setEmail}/>
        <CommonInput placeholder='패스워드를 입력해 주세요.' type='password' onChangeEvent={setPassword}/>
        <CommonInput placeholder='이름을 입력해 주세요.' type='text' onChangeEvent={setName}/>
        <button>가입하기</button>
      </form>
    </ReactModal>
  );
};
