/** @jsxImportSource @emotion/react */
import { MainHeaderStyle } from "../../style/main/header";

export function MainHeader() {
    return (
        <div css={MainHeaderStyle.wrap}>
            <div css={ MainHeaderStyle.contentsWrap }>
                <div css={ MainHeaderStyle.logo }>LOGO</div>
                <div css={ MainHeaderStyle.contents }>
                    <p>CONTENTS</p>
                    <p>CONTENTS</p>
                    <p>CONTENTS</p>
                    <p>CONTENTS</p>
                    <p>CONTENTS</p>
                </div>
                <div css={ MainHeaderStyle.auth }>
                    <p>SIGN IN</p>
                    <p>SIGN UP</p>
                </div>
            </div>
        </div>
    )
}