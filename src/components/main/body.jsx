/** @jsxImportSource @emotion/react */
import { MainCardStyle } from "../../style/main/card"
import { MainCard } from "./card"

export const MainBody = () => {
    return (
        <div css={ MainCardStyle.wrap }>
            <MainCard></MainCard>
            <MainCard></MainCard>
            <MainCard></MainCard>
            <MainCard></MainCard>
            <MainCard></MainCard>
            <MainCard></MainCard>
        </div>
    )
}