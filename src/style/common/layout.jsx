import { css } from "@emotion/react"

export const commonLayout = {
    wrap: css`
        background: var(--background-color);
        color: var(--text-color);
        width: 100%;
        height: auto;
    `
}
// const cards = document.querySelectorAll(".card");
// const wrapper = document.querySelector(".cards");

// wrapper.addEventListener("mousemove", function ($event) {
// 	cards.forEach((card) => {
// 		const rect = card.getBoundingClientRect();
// 		const x = $event.clientX - rect.left;
// 		const y = $event.clientY - rect.top;

// 		card.style.setProperty("--xPos", `${x}px`);
// 		card.style.setProperty("--yPos", `${y}px`);
// 	});
// });