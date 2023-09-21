/** @jsxImportSource @emotion/react */

import { buttonStyle } from '../../style/common/button';

export function Button(props) {
    return (
        <div css={ buttonStyle.wrap }>
            <button css={buttonStyle.contents}>
                {props.buttonTitle}
            </button>
        </div>
    )
}