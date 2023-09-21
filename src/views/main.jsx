import { MainHeader } from "../components/main/header"
import { MainBody } from "../components/main/body"
import { MainFooter } from "../components/main/footer"

export function Main(props) {
    return (
        <div className={props.className}>
            <MainHeader></MainHeader>
            <MainBody></MainBody>
            <MainFooter></MainFooter>
        </div>
    )
}