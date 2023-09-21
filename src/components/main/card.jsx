/** @jsxImportSource @emotion/react */

import { useRef } from "react"
import { css } from "@emotion/react";

const common = {
    wrap: css`
        width: calc(100% / 3);
        height: 400px;
        background: #fafafa;
        transition: all 0.1s;
        border: 1px solid #000;
        &:hover {
            background: radial-gradient(100rem circle at var(--x-pos) var(--y-pos), rgba(0, 255, 241, 0.4), transparent 15%);
            transform: perspective(400px) rotateX(var(--x-deg)) rotateY(var(--y-deg));
        }
    `
};

export const MainCard = (props) => {
    const cardRef = useRef(null);

    const cardEffector = (e) => {
        const rect = e.target.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const r = e.clientX - rect.right;
        const b = e.clientY - rect.bottom;

        console.log(e.clientX, e.clientY);
        e.target.style.setProperty('--x-pos', `${x}px`);
        e.target.style.setProperty('--y-pos', `${y}px`);
        // e.target.style.setProperty('--x-deg', `${ (e.clientX) / 100}deg`);
        // e.target.style.setProperty('--y-deg', `${ (e.clientY) / 100}deg`);
    }
    return (
        <div onMouseMove={ cardEffector } css={ common.wrap }>
            <div>CARD</div>
        </div>
    )
}
