/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { MainCard } from './card';

const MainBodyStyle = {
  wrap: css`
    display: flex;
    flex-wrap: wrap;
    padding: 20px 0px;
    gap: 20px;
  `,
};

export const MainBody = () => {
  return (
    <div css={MainBodyStyle.wrap}>
      <MainCard></MainCard>
      <MainCard></MainCard>
      <MainCard></MainCard>
      <MainCard></MainCard>
      <MainCard></MainCard>
      <MainCard></MainCard>
    </div>
  );
};
