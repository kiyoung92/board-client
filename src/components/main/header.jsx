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

  const signInModalOpen = () => {
    setSignInOpen(true);
  };
  const signUpModalHandler = () => {
    setSignUpOpen(true);
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
        <div onClick={signInModalOpen}>
          <p>Sign In</p>
          <SignIn isOpen={isSignInOpen}></SignIn>
        </div>
        <div onClick={signUpModalHandler}>
          <p>Sign Up</p>
          <SignUp isOpen={isSignUpOpen}></SignUp>
        </div>
      </div>
    </div>
  );
};
