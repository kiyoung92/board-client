/** @jsxImportSource @emotion/react */
import { flexCenterLayerStyle } from "../../style/common/flex-center-layer"

export function FlexCenterLayout(props) {
    return (
        <div css={ flexCenterLayerStyle.wrap }>
            {props.children}
        </div>
    )
}