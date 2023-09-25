/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { SignIn } from '../../views/sign-in';
import { SignUp } from '../../views/sign-up';

const MainHeaderStyle = {
  wrap: css`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 100px;
    height: 60px;
  `,
  logo: css``,
  contents: css`
    display: flex;
    gap: 20px;
    flex: 1;
  `,
  auth: css`
    display: flex;
    gap: 20px;
  `,
  authItem: css`
    text-decoration: none;
    color: var(--text-color);
  `,
};

export const MainHeader = () => {
  const [isSignInOpen, setSignInOpen] = useState(false);
  const [isSignUpOpen, setSignUpOpen] = useState(false);

  const signInModalOpen = (is, e) => {
    e.preventDefault();
    setSignInOpen(is);
  };
  const signUpModalHandler = (is, e) => {
    e.preventDefault();
    setSignUpOpen(is);
  };

  return (
    <div css={MainHeaderStyle.wrap}>
      <Link to='/' css={MainHeaderStyle.authItem}>
        LOGO
      </Link>
      <div css={MainHeaderStyle.contents}>
        <p>content</p>
        <p>content</p>
        <p>content</p>
      </div>
      <div css={MainHeaderStyle.auth}>
        <div onClick={(e) => {signInModalOpen(true, e)}}>
          <p>Sign In</p>
        </div>
        <div onClick={(e) => {signUpModalHandler(true, e)}}>
          <p>Sign Up</p>
        </div>
        <SignIn isOpen={isSignInOpen} modalHandler={signInModalOpen}></SignIn>
        <SignUp isOpen={isSignUpOpen} modalHandler={signUpModalHandler}></SignUp>
      </div>
    </div>
  );
};
