import { css } from "@emotion/react"

export const MainHeaderStyle = {
    wrap: css`
        height: 60px;
        width: 100%;
        border-bottom: var(--border-bottom);
        display: flex;
        justify-content: center;
        align-items: center;
        -webkit-user-select:none;
        -moz-user-select:none;
        -ms-user-select:none;
        user-select:none;
    `,
    contentsWrap: css`
        width: 1280px;
        display: flex;
        justify-content: space-between;
        gap: 60px;
    `,
    logo: css`
        cursor: pointer;
        align-items: center;
        display: flex;
    `,
    contents: css`
        flex: 1;
        display: flex;
        align-items: center;
        gap: 20px;
        p {
            cursor: pointer;
        }
    `,
    auth: css`
        display: flex;
        align-items: center;
        gap: 20px;
        p {
            cursor: pointer;
        }
    `
}