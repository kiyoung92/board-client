/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const MainCardStyle = {
  wrap: css`
    display: flex;
    padding: 20px;
    border: 1px solid #333;
    border-radius: 10px;
    height: 200px;
    width: 198px;
  `,
};

export const MainCard = () => {
  return (
    <div css={MainCardStyle.wrap}>
      <div>card</div>
    </div>
  );
};
