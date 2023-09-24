/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { Link } from 'react-router-dom';

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
  return (
    <div css={MainHeaderStyle.wrap}>
      <div>LOGO</div>
      <div css={MainHeaderStyle.contents}>
        <p>content</p>
        <p>content</p>
        <p>content</p>
      </div>
      <div css={MainHeaderStyle.auth}>
        <Link to='/signIn' css={MainHeaderStyle.authItem}>
          <p>Sign In</p>
        </Link>
        <Link to='/signUp' css={MainHeaderStyle.authItem}>
          <p>Sign Up</p>
        </Link>
      </div>
    </div>
  );
};
