/** @jsxImportSource @emotion/react */
import { MainHeader } from '../components/main/header';
import { MainBody } from '../components/main/body';
import { MainFooter } from '../components/main/footer';
import { css } from '@emotion/react';
// import { Link } from 'react-router-dom';

const MainStyle = {
  wrap: css`
    width: 100%;
    display: flex;
    justify-content: center;
  `,

  contents: css`
    width: 1280px;
    display: flex;
    flex-direction: column;
  `,
};

export const Main = () => {
  return (
    <div css={MainStyle.wrap}>
      <div css={MainStyle.contents}>
        <MainHeader></MainHeader>
        <MainBody></MainBody>
        <MainFooter></MainFooter>
      </div>
    </div>
  );
};
